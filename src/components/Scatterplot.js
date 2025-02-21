import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

function Scatterplot({ data, xAttr, yAttr, colorAttr, opacityAttr, sizeAttr, onSelectionChange }) {
    const svgRef = useRef(null);
    const prevXAttribute = useRef(xAttr);
    const prevYAttribute = useRef(yAttr);
    const prevXPositions = useRef(new Map());
    const prevYPositions = useRef(new Map());
    const prevSizeAttribute = useRef(sizeAttr);
    useEffect(() => {
        if (!data || xAttr === "none" || yAttr === "none") return;

        const validData = data.filter(d => d[xAttr] !== undefined && d[yAttr] !== undefined);
        if (validData.length === 0) return;

        const width = 750, height = 500, margin = 60;
        const svg = d3.select(svgRef.current);
        svg.selectAll("*").remove();

        const xScale = d3.scaleLinear()
            .domain(d3.extent(validData, d => +d[xAttr]))
            .range([margin, width - margin]);

        const yScale = d3.scaleLinear()
            .domain(d3.extent(validData, d => +d[yAttr]))
            .range([height - margin, margin]);

        const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
        const sizeScale = d3.scaleLinear()
            .domain(d3.extent(validData, d => d[sizeAttr] || 1))
            .range([4, 15]);
        const opacityScale = d3.scaleLinear()
            .domain(d3.extent(validData, d => d[opacityAttr] || 100))
            .range([0.3, 1]);

        svg.append("g")
            .attr("class", "x-axis")
            .attr("transform", `translate(0, ${height - margin})`)
            .call(d3.axisBottom(xScale));

        const yAxisGroup = svg.append("g")
            .attr("class", "y-axis")
            .attr("transform", `translate(${margin}, 0)`)
            .call(d3.axisLeft(yScale));

        const circles = svg.selectAll("circle")
            .data(validData, d => d.title)
            .enter()
            .append("circle")
            .attr("cx", d => prevXPositions.current.get(d.title) || xScale(d[xAttr]))
            .attr("cy", d => prevYPositions.current.get(d.title) || yScale(d[yAttr]))
            .attr("fill", d => (colorAttr !== "none" ? colorScale(d[colorAttr]) : "black"))
            .attr("opacity", d => (opacityAttr !== "none" ? opacityScale(d[opacityAttr]) : 0.8))
            .attr("stroke", "none")
            .attr("stroke-width", 0);

        if (prevSizeAttribute.current !== sizeAttr) {
            circles.attr("r", 4)
                .transition()
                .duration(1000)
                .attr("r", d => (sizeAttr !== "none" ? sizeScale(d[sizeAttr]) : 4));
        } else {
            circles.attr("r", d => (sizeAttr !== "none" ? sizeScale(d[sizeAttr]) : 4));
        }
        prevSizeAttribute.current = sizeAttr;

        if (prevXAttribute.current !== xAttr) {
            circles.attr("cx", d => prevXPositions.current.get(d.title) || xScale(d[xAttr]))
                .transition()
                .duration(1000)
                .attr("cx", d => xScale(d[xAttr]));

            svg.select(".x-axis")
                .transition()
                .duration(1000)
                .ease(d3.easeCubicOut)
                .call(d3.axisBottom(xScale));
        } else {
            circles.attr("cx", d => xScale(d[xAttr]));
        }

        if (prevYAttribute.current !== yAttr) {
            circles.attr("cy", d => prevYPositions.current.get(d.title) || yScale(d[yAttr]))
                .transition()
                .duration(1000)
                .attr("cy", d => yScale(d[yAttr]));

            yAxisGroup.transition()
                .duration(1000)
                .ease(d3.easeCubicOut)
                .call(d3.axisLeft(yScale));
        } else {
            circles.attr("cy", d => yScale(d[yAttr]));
        }

        prevXPositions.current.clear();
        prevYPositions.current.clear();
        validData.forEach(d => {
            prevXPositions.current.set(d.title, xScale(d[xAttr]));
            prevYPositions.current.set(d.title, yScale(d[yAttr]));
        });
        prevXAttribute.current = xAttr;
        prevYAttribute.current = yAttr;

        const brush = d3.brush()
            .extent([[margin, margin], [width - margin, height - margin]])
            .on("end", (event) => {
                if (!event.selection) {
                    onSelectionChange([]);
                    circles.attr("stroke", "none").attr("stroke-width", 0);
                    return;
                }

                const [[x0, y0], [x1, y1]] = event.selection;
                const selectedPoints = validData.filter(
                    d => xScale(d[xAttr]) >= x0 && xScale(d[xAttr]) <= x1 &&
                         yScale(d[yAttr]) >= y0 && yScale(d[yAttr]) <= y1
                );

                circles.attr("stroke", d => (selectedPoints.includes(d) ? "black" : "none"))
                    .attr("stroke-width", d => (selectedPoints.includes(d) ? 2 : 0));

                onSelectionChange(selectedPoints);
            });

        svg.append("g").call(brush);
    }, [data, xAttr, yAttr, colorAttr, opacityAttr, sizeAttr, onSelectionChange]);

    return <svg ref={svgRef} width={750} height={500} />;
}

export default Scatterplot;
