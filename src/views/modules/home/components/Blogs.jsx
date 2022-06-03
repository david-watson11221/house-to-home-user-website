import React from "react";

export default function Blogs() {
  return (
    <section className=" section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h4 className="secondary-hdng mb-sm-5 mb-3">
              The Latest <span className="text-primary">From Auto Trader</span>
            </h4>
            <img draggable="false" src="assets/images/line-arrows.png" />
            <div className="row mt-5">
              <div className="col-lg-4 col-md-6 text-center mb-sm-0 mb-3">
                <div className="blog-card position-relative">
                  <figure className>
                    <img draggable="false" src="assets/images/blog-img-1.png" />
                  </figure>
                  <p className="text-white blog-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting indust when make a type book.{" "}
                  </p>
                  <div className="blog-date">
                    29 <sapn className="d-block pt-2">JAN</sapn>{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center mb-sm-0 mb-3">
                <div className="blog-card position-relative">
                  <figure className>
                    <img draggable="false" src="assets/images/blog-img-2.png" />
                  </figure>
                  <p className="text-white blog-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting indust when make a type book.{" "}
                  </p>
                  <div className="blog-date">
                    29 <sapn className="d-block pt-2">JAN</sapn>{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 text-center mb-sm-0 mb-3">
                <div className="blog-card position-relative">
                  <figure className>
                    <img draggable="false" src="assets/images/blog-img-3.png" />
                  </figure>
                  <p className="text-white blog-text">
                    Lorem Ipsum is simply dummy text of the printing and typesetting indust when make a type book.{" "}
                  </p>
                  <div className="blog-date">
                    29 <sapn className="d-block pt-2">JAN</sapn>{" "}
                  </div>
                </div>
              </div>
            </div>
            <button type="button" className="btn btn-primary mt-sm-5 mt-0">
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
