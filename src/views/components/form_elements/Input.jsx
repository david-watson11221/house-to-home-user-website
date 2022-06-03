import React, { useState } from "react";

export default function Input({
  id,
  className,
  placeholder,
  type,
  value,
  onChange,
  onKeyPress,
  disabled,
  max,
  startIcon,
  endIcon,
  enable_dot,
  passWordButtonClssName,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    if (max ? e.target.value.length <= max : true) onChange && onChange(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.charCode === 13) onKeyPress && onKeyPress();
  };

  // Prevent characters that are not numbers ("e", ".", "+" & "-") ✨
  const formatInput = (e) => {
    if (type === "number") {
      let checkIfNum;
      if (e.key !== undefined) {
        // Check if it's a "e", ".", "+" or "-"
        const filter = enable_dot
          ? e.key === "e" || e.key === "+" || e.key === "-"
          : e.key === "e" || e.key === "." || e.key === "+" || e.key === "-";
        checkIfNum = filter;
      } else if (e.keyCode !== undefined) {
        // Check if it's a "e" (69), "." (190), "+" (187) or "-" (189)
        checkIfNum = e.keyCode === 69 || e.keyCode === 190 || e.keyCode === 187 || e.keyCode === 189;
      }
      return checkIfNum && e.preventDefault();
    }
  };

  return (
    <>
      <input
        id={id}
        className={className}
        placeholder={placeholder}
        disabled={disabled}
        type={showPassword ? "text" : type}
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        onKeyDown={formatInput}
      />
      {type === "password" ? (
        // <button type="button" className={passWordButtonClssName} onClick={() => setShowPassword(!showPassword)}>
        //   {showPassword ? <i className="fa fa-eye passDisplay" /> : <i className="fa fa-eye-slash passDisplay" />}
        // </button>
        <button type="button" className="not_btn eye_btns" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <i className="fa fa-eye passDisplay" /> : <i className="fa fa-eye-slash passDisplay" />}
        </button>
      ) : (
        <div className="form-control-position custom-input-icon custom-search-icon" style={{ width: "3rem" }}>
          {startIcon ? startIcon : null}
          {endIcon ? endIcon : null}
        </div>
      )}
    </>
  );
}
