import React from "react";

export default function Button({ loading, children, onClick, className, style, ...rest }) {
  if (loading)
    return (
      <button type="button" className={className} style={{ ...style, cursor: "wait" }}>
        <i className="fas fa-spinner fa-pulse"></i>
      </button>
    );

  return (
    <button {...rest} type="button" className={className} onClick={onClick} style={style}>
      {children}
    </button>
  );
}
