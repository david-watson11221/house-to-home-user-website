import React from "react";

export default function ThreeBoxes() {
  return (
    <section className="home-three-boxs">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-lg-0 mb-3">
            <div className="about-box text-center d-flex align-items-center flex-column justify-content-center">
              <figure>
                <img className="smpl-img" src="assets/images/about-icon-1.png" />
                <img className="hover-img" src="assets/images/about-icon-1-hover.png" />
              </figure>
              <figure className="mt-3">
                <img className="line-arrows" src="assets/images/line-arrows.png" />
              </figure>
              <h4>Value My Car</h4>
              <p className="text-color">
                Lorem Ipsum is simply dummy text of the printing and crambled it to make a type specimen book.
              </p>
              <a href="_#">Value My Car</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-lg-0 mb-3">
            <div className="about-box text-center d-flex align-items-center flex-column justify-content-center">
              <figure>
                <img className="smpl-img" src="assets/images/about-icon-2.png" />
                <img className="hover-img" src="assets/images/about-icon-2-hover.png" />
              </figure>
              <figure className="mt-3">
                <img className="line-arrows" src="assets/images/line-arrows.png" />
              </figure>
              <h4>Book Your Car Service Online</h4>
              <p className="text-color">
                Lorem Ipsum is simply dummy text of the printing and crambled it to make a type specimen book.
              </p>
              <a href="_#">book Now</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-lg-0 mb-3">
            <div className="about-box text-center d-flex align-items-center flex-column justify-content-center">
              <figure>
                <img className="smpl-img" src="assets/images/about-icon-3.png" />
                <img className="hover-img" src="assets/images/about-icon-3-hover.png" />
              </figure>
              <figure className="mt-3">
                <img className="line-arrows" src="assets/images/line-arrows.png" />
              </figure>
              <h4>Find Your Local Dealer</h4>
              <p className="text-color">
                Lorem Ipsum is simply dummy text of the printing and crambled it to make a type specimen book.
              </p>
              <a href="_#">find location</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
