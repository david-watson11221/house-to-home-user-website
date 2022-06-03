import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <section className="hero-section">
        <div className="banner-section container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-5">
              <h3 className="primary-heading mb-2">About Us</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and unknown printer took a the
                scrambled it to make a type is printer took a the specimen book.
              </p>
            </div>
            <div className="col-md-6">
              <figure>
                <img src="assets/images/car-banner.png" />
              </figure>
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal fade auth-modal"
        id="modalSignUp"
        tabIndex={-1}
        aria-labelledby="logoutLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
            <div className="modal-body">
              <div className="row align-items-center">
                <div className="col-lg-5 px-0">
                  <img src="assets/images/login-side.png" className="w-100 login-img d-block" />
                </div>
                <div className="col-lg-7 p-5">
                  <h4 className="secondary-hdng mb-sm-5 mb-3 text-center">
                    Sign <span className="text-primary">Up</span>
                  </h4>
                  <form>
                    <div className="row form-group">
                      <div className="col-md-6 mb-4">
                        <label className>First Name</label>
                        <input type="text" className="form-control" placeholder="First name" />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label className>Last Name</label>
                        <input type="text" className="form-control" placeholder="Enter Last Name" />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label className>Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Phone Number"
                        />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label>Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter Email Address"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="col-md-6 mb-4 password-field">
                        <label className>Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter Password"
                        />
                        <i className="toggle-password fas fa-eye" />
                      </div>
                      <div className="col-md-6 mb-4 password-field">
                        <label>Confirm Password</label>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Enter Confirm Password"
                          ria-describedby="emailHelp"
                        />
                        <i className="toggle-password fas fa-eye" />
                      </div>
                    </div>
                    <div className="text-center mt-sm-5 mt-3">
                      <button type="submit" className="btn btn-primary">
                        Sign Up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="my-sm-5 my-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 pb-sm-5 pb-4">
              <ul>
                <li className="d-inline-block px-1 first">
                  <Link to="/" className="text-black-50">
                    Home <i className="fas fa-caret-right pl-1" />
                  </Link>
                </li>
                <li className="d-inline-block pr-2 last">
                  <Link to="" className="text-black-50">
                    About
                  </Link>
                </li>
              </ul>
            </div>
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
                  Lorem Ipsum is simply dummy text of the printing and crambled it to make a type
                  specimen book.
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
                  Lorem Ipsum is simply dummy text of the printing and crambled it to make a type
                  specimen book.
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
                  Lorem Ipsum is simply dummy text of the printing and crambled it to make a type
                  specimen book.
                </p>
                <a href="_#">find location</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-sm-5 py-2 ">
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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type book. Lorem
                Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is
                been the industry's standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <p className="mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type book.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
