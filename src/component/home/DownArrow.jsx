import React from "react";
import { icons } from "../../assets/icons";

const DownArrow = ({ name }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "7px",
        cursor: "pointer",
      }}
    >
      <div style={{}}>{name}</div>
      <img
        src={icons.ARROW_DOWN}
        alt="ARROW_DOWN"
        style={{
          width: "8px",
          marginTop: "4px",
        }}
      />
    </div>
  );
};

export default DownArrow;
