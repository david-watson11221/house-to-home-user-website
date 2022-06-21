import React, { useState, useEffect, useRef } from "react";
import { MEDIA_URL } from "../../../services/config/baseUrl.config";

export default function ImageSelector({ accept, onChange, value, onDelete }) {
  const [defaultImage, setDefaultImage] = useState(null);
  const imageRef = useRef();

  useEffect(() => {
    // setDefaultImage(`${MEDIA_URL}${value}`);
    setDefaultImage(value);
    if (value && typeof value !== "string") {
      const objectURL = URL.createObjectURL(value);
      setDefaultImage(objectURL);
      return () => URL.revokeObjectURL(objectURL);
    }
  }, [value]);

  return (
    <div className="profile_tboxl image-picker">
      <div className="image-picker-inner">
        <img
          src={value ? defaultImage : "assets/images/userImage.png"}
          alt=""
          title={!value && "Click to upload Image"}
          className="img-fluid pointer"
          onClick={() => {
            imageRef.current.click();
          }}
        />
      </div>
      <input
        ref={imageRef}
        type="file"
        style={{ display: "none" }}
        accept={accept ? accept : "image/*"}
        onChange={(e) => onChange(e.target.files[0])}
        onClick={(event) => {
          event.target.value = null;
        }}
      />
    </div>
  );
}
