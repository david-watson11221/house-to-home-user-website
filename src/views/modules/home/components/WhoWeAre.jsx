import React from "react";
import { useHistory } from "react-router-dom";

export default function WhoWeAre() {
  const history = useHistory();
  return (
    <section className="section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <figure className="mb-sm-0 mb-4">
              <img src="assets/images/who-we-img.png" />
            </figure>
          </div>
          <div className="col-md-6 pl-sm-5 pl-3">
            <h4 className="secondary-hdng mb-4">
              Who <span className="text-primary"> We Are</span>
            </h4>
            <p className="mb-4">
              Lorem Ipsum is simply dummy text of the printing and unknown printer took a the
              scrambled it to make a type is printer took a the specimen book.
            </p>
            <p className="mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem Ipsum is been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.{" "}
            </p>
            <button
              type="button"
              className="btn btn-primary mt-sm-4 mt-0"
              onClick={() => history.push("/about-us")}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
