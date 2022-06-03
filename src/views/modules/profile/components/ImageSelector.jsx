import React, { useEffect, useRef, useState } from "react";
import { MEDIA_URL } from "../../../../services/config/baseUrl.config";

export default function ImageSelector({ onChange, value, accept }) {
  const [defaultImage, setDefaultImage] = useState();
  const imageRef = useRef();

  useEffect(() => {
    setDefaultImage(`${MEDIA_URL}${value}`);
    if (value && typeof value !== "string") {
      const objectURL = URL.createObjectURL(value);
      setDefaultImage(objectURL);
      return () => URL.revokeObjectURL(objectURL);
    }
  }, [value]);

  const showOpenFileDialog = () => {
    imageRef.current.click();
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    onChange(file);
  };

  return (
    <div className="attached">
      <img src={value ? defaultImage : "assets/images/placeholder-gray.png"} alt="Admin Image" />
      <input
        ref={imageRef}
        type="file"
        id="imgupload"
        name="file"
        style={{ display: "none" }}
        accept={accept ? accept : "image/*"}
        onChange={handleChange}
        onClick={(event) => {
          event.target.value = null;
        }}
      />
      <button id="OpenImgUpload" className="change-image" onClick={showOpenFileDialog}>
        <i className="fas fa-camera" />
      </button>
    </div>
  );
}
