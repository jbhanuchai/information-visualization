import React from "react";
import Select from "react-select";

const xAxisOptions = [
  { value: "budget", label: "Budget" },
  { value: "us_gross", label: "US Gross" },
  { value: "worldwide_gross", label: "Worldwide Gross" },
  { value: "rotten_rating", label: "Rotten Tomatoes Rating" },
  { value: "imdb_rating", label: "IMDB Rating" },
  { value: "imdb_votes", label: "IMDB Votes" },
];

const yAxisOptions = [
  { value: "budget", label: "Budget" },
  { value: "us_gross", label: "US Gross" },
  { value: "worldwide_gross", label: "Worldwide Gross" },
  { value: "rotten_rating", label: "Rotten Tomatoes Rating" },
  { value: "imdb_rating", label: "IMDB Rating" },
  { value: "imdb_votes", label: "IMDB Votes" },
];

const colorOptions = [
  { value: "none", label: "None" },
  { value: "genre", label: "Genre" },
  { value: "creative_type", label: "Creative Type" },
  { value: "source", label: "Source" },
  { value: "release", label: "Release" },
  { value: "rating", label: "Rating" },
];

const opacityOptions = [
  { value: "none", label: "None" },
  { value: "us_gross", label: "US Gross" },
  { value: "worldwide_gross", label: "Worldwide Gross" },
  { value: "rotten_rating", label: "Rotten Tomatoes Rating" },
  { value: "imdb_rating", label: "IMDB Rating" },
  { value: "imdb_votes", label: "IMDB Votes" },
];

const sizeOptions = [
  { value: "none", label: "None" },
  { value: "us_gross", label: "US Gross" },
  { value: "worldwide_gross", label: "Worldwide Gross" },
  { value: "rotten_rating", label: "Rotten Tomatoes Rating" },
  { value: "imdb_rating", label: "IMDB Rating" },
  { value: "imdb_votes", label: "IMDB Votes" },
];

function ControlPanel({ onMappingChange, mapping }) {
  return (
    <div className="control-panel-content-area">
      <div key="x" className="dropdown-container">
        <label>X:</label>
        <Select
          options={xAxisOptions}
          value={xAxisOptions.find((opt) => opt.value === mapping["x"])}
          menuPortalTarget={document.body}
          styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
          onChange={(selected) => onMappingChange("x", selected?.value)}
        />
      </div>

      <div key="y" className="dropdown-container">
        <label>Y:</label>
        <Select
          options={yAxisOptions}
          value={yAxisOptions.find((opt) => opt.value === mapping["y"])}
          menuPortalTarget={document.body}
          styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
          onChange={(selected) => onMappingChange("y", selected?.value)}
        />
      </div>

      <div key="color" className="dropdown-container">
        <label>Color:</label>
        <Select
          options={colorOptions}
          value={colorOptions.find((opt) => opt.value === mapping["color"])}
          menuPortalTarget={document.body}
          styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
          onChange={(selected) => onMappingChange("color", selected?.value)}
        />
      </div>

      <div key="opacity" className="dropdown-container">
        <label>Opacity:</label>
        <Select
          options={opacityOptions}
          value={opacityOptions.find((opt) => opt.value === mapping["opacity"])}
          menuPortalTarget={document.body}
          styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
          onChange={(selected) => onMappingChange("opacity", selected?.value)}
        />
      </div>

      <div key="size" className="dropdown-container">
        <label>Size:</label>
        <Select
          options={sizeOptions}
          value={sizeOptions.find((opt) => opt.value === mapping["size"])}
          menuPortalTarget={document.body}
          styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
          onChange={(selected) => onMappingChange("size", selected?.value)}
        />
      </div>
    </div>
  );
}

export default ControlPanel;
