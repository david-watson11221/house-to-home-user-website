import React from "react";

export default function Spinner({ style, size }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <i className="fas fa-spinner fa-pulse" style={{ ...style, fontSize: size }}></i>
    </div>
  );
}
