import React, { useState } from "react";
import ControlPanel from "./components/ControlPanel";
import Scatterplot from "./components/Scatterplot";
import DataTable from "./components/DataTable";
import rawMovieData from "./data/movie.json";
import "./App.css";

const movieData = rawMovieData.map(movie => ({
  ...movie,
  imdb_votes: movie.imdb_votes ? parseInt(movie.imdb_votes.replace(/,/g, ""), 10) : 0
}));

function App() {
  const [attributeMap, setAttributeMap] = useState({
    x: "imdb_rating",
    y: "us_gross",
    color: "none",
    opacity: "none",
    size: "none",
  });

  const [selectedData, setSelectedData] = useState([]);

  const handleMappingChange = (channel, attribute) => {
    setAttributeMap((prev) => ({ ...prev, [channel]: attribute }));
    setSelectedData([]);
  };

  return (
    <div className="app-wrapper">
      <div className="control-panel-container">
        <ControlPanel
          onMappingChange={handleMappingChange}
          mapping={attributeMap}
        />
      </div>

      <div className="main-content">
        <div className="scatterplot-area">
          <Scatterplot
            data={movieData}
            xAttr={attributeMap.x}
            yAttr={attributeMap.y}
            colorAttr={attributeMap.color}
            opacityAttr={attributeMap.opacity}
            sizeAttr={attributeMap.size}
            onSelectionChange={setSelectedData}
          />
        </div>

        <div className="data-table-area">
          <DataTable selectedData={selectedData} />
        </div>
      </div>
    </div>
  );
}

export default App;
