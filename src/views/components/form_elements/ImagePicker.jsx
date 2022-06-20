import React, { useState, useEffect, useRef } from "react";
import { MEDIA_URL } from "../../../services/config/baseUrl.config";

export default function ImageSelector({ accept, onChange, value, onDelete }) {
  const [defaultImage, setDefaultImage] = useState(null);
  const imageRef = useRef();

  useEffect(() => {
    setDefaultImage(`${MEDIA_URL}${value}`);
    if (value && typeof value !== "string") {
      const objectURL = URL.createObjectURL(value);
      setDefaultImage(objectURL);
      return () => URL.revokeObjectURL(objectURL);
    }
  }, [value]);

  return (
    <div className="profile_tboxl">
      <img
        src={value ? defaultImage : "assets/images/profile_tboxl.png"}
        alt=""
        className="userImage img-fluid"
      />
      <label htmlFor="userImage" className="uploadCamera">
        <i className="fas fa-camera" />
      </label>
      <input
        type="file"
        id="userImage"
        accept="image/*"
        className="d-none"
        onChange={(e) => onChange(e.target.files[0])}
      />
    </div>
    // <div className="image-picker">
    //   <div className="image-picker-inner">
    //     <img
    //       src={value ? defaultImage : imagePlaceholder}
    //       alt=""
    //       title={!value && "Click to upload Image"}
    //       className="img-fluid pointer"
    //       onClick={() => {
    //         imageRef.current.click();
    //       }}
    //     />
    //   </div>
    //   <input
    //     ref={imageRef}
    //     type="file"
    //     style={{ display: "none" }}
    //     accept={accept ? accept : "image/*"}
    //     onChange={(e) => onChange(e.target.files[0])}
    //     onClick={(event) => {
    //       event.target.value = null;
    //     }}
    //   />
    // </div>
  );
}
