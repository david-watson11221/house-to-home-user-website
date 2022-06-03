import React from "react";
import ReactStars from "react-rating-stars-component";

export default function RatingStars({ value, setValue, readOnly }) {
  const handleChange = (rating) => {
    if (setValue) setValue(rating);
  };

  return (
    <div>
      <ReactStars
        count={5}
        edit={readOnly ? false : true}
        value={value}
        onChange={handleChange}
        size={24}
        //   isHalf={true}
        emptyIcon={<i className="fa-star text-primary fal" />}
        //   halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa-star text-primary fas" />}
        activeColor="#3fb58b"
      />
    </div>
  );
}
