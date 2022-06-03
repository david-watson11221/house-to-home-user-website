import React, { useState } from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";

import Input from "../../components/form_elements/Input";
import Button from "../../components/form_elements/Button";
import Success from "../../components/alerts/Success.Alert";
import Error from "../../components/alerts/Error.Alert";
import Warning from "../../components/alerts/Warning.Alert";
import { submitQuery } from "../../../services";

export default function Contact() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    message: "",
  });

  const { mutate, isLoading } = useMutation((data) => submitQuery(data), {
    retry: false,
    onSuccess: (res) => {
      Success(res?.data?.message);
    },
    onError: (err) => Error(err?.response?.data?.message),
  });

  return (
    <div>
      <section className="hero-section">
        <div className="banner-section container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-5">
              <h3 className="primary-heading mb-2">Contact Us</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and unknown printer took a the scrambled it to make a
                type is printer took a the specimen book.
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
      <section className="my-sm-5 my-4">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-12 pb-5">
              <ul>
                <li className="d-inline-block px-1 first">
                  <Link to="/" className="text-black-50">
                    Home <i className="fas fa-caret-right pl-1" />
                  </Link>
                </li>
                <li className="d-inline-block pr-2 last">
                  <Link to="#" className="text-black-50" href="#">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 col-md-12 order-lg-0 order-1">
              <form>
                <div className="form-row mb-sm-4 mb-0">
                  <div className="form-group col-md-6 px-3">
                    <label>
                      First Name<span className="alert-text">*</span>
                    </label>
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Enter First Name"
                      value={state?.firstName}
                      onChange={(firstName) => setState({ ...state, firstName })}
                    />
                  </div>
                  <div className="form-group col-md-6 px-3">
                    <label>
                      Last Name<span className="alert-text">*</span>
                    </label>
                    <Input
                      type="text"
                      className="form-control"
                      placeholder="Enter Last Name"
                      value={state?.lastName}
                      onChange={(lastName) => setState({ ...state, lastName })}
                    />
                  </div>
                </div>
                <div className="form-row mb-sm-4 mb-0">
                  <div className="form-group col-md-6 px-3">
                    <label>
                      Email Address<span className="alert-text">*</span>
                    </label>
                    <Input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email Address"
                      value={state?.email}
                      onChange={(email) => setState({ ...state, email })}
                    />
                  </div>
                  <div className="form-group col-md-6 px-3">
                    <label>
                      Subject<span className="alert-text">*</span>
                    </label>
                    <Input
                      className="form-control"
                      placeholder="Enter Subject"
                      value={state?.subject}
                      onChange={(subject) => setState({ ...state, subject })}
                    />
                  </div>
                </div>
                <div className="form-row mb-sm-4 mb-0">
                  <div className="form-group col-md-12 px-3">
                    <label>
                      Message<span className="alert-text">*</span>
                    </label>
                    <textarea
                      className="form-control"
                      placeholder="Required example textarea"
                      rows={5}
                      defaultValue={""}
                      onChange={(e) => setState({ ...state, message: e.target.value })}
                    />
                  </div>
                </div>
                <Button
                  loading={isLoading}
                  onClick={() => mutate({ ...state, name: `${state?.firstName} ${state?.lastName}` })}
                  className="btn btn-primary ml-4"
                >
                  Submit
                </Button>
              </form>
            </div>
            <div className="col-lg-3 col-md-12 d-lg-block d-sm-flex d-block order-lg-1 order-0">
              <div className="contact-box text-center mb-4">
                <figure>
                  <img src="assets/images/phone-icon.png" />
                </figure>
                <p>Phone</p>
                <a href="to:07472034968">07472034968</a>
              </div>
              <div className="contact-box text-center mb-4">
                <figure>
                  <img src="assets/images/email-icon.png" />
                </figure>
                <p>Email</p>
                <a href="mailto:gyagomba@gmail.com">gyagomba@gmail.com</a>
              </div>
              <div className="contact-box text-center mb-4">
                <figure>
                  <img src="assets/images/address-icon.png" />
                </figure>
                <p>Address</p>
                <a href>20 st stephens road</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
