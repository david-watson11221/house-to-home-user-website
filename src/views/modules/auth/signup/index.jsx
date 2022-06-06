import React, { useState } from "react";
import { useMutation } from "react-query";
import InputPhone from "../../../components/form_elements/InputPhone";
import Input from "../../../components/form_elements/Input";
import Button from "../../../components/form_elements/Button";
import Success from "../../../components/alerts/Success.Alert";
import Warning from "../../../components/alerts/Warning.Alert";
import Error from "../../../components/alerts/Error.Alert";
import { signup } from "../../../../services/auth";
import SignupIcon from "../../../components/icons/svgs/Signup.Icon";
import { Link } from "react-router-dom";

export default function Signup() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: {
      countryCode: "",
      countryDialCode: "",
      number: "",
    },
    confirmPassword: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
  });

  const { mutate, isLoading } = useMutation(() => signup(state), {
    retry: false,
    onSuccess: (res) => {
      Success(res?.data?.message);
      window.location.reload();
    },
    onError: (err) => {
      // console.log(err);
      Error(err?.response?.data?.message);
    },
  });

  const handleSignup = () => {
    if (state?.password !== state?.confirmPassword) {
      Warning("Password does not match");
    } else {
      mutate();
    }
  };

  return (
    <section className="secsignup py-md-5 py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="finspired_top heading_main text-left mb-md-5 mb-1">
              <h3 className="h_57 mb-md-3 mb-1">Sign Up</h3>
              <p className="h_20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <form>
              <div className="row mb-md-5 mb-0">
                <div className="col-md-6">
                  <Input
                    type="text"
                    value={state?.firstName}
                    onChange={(firstName) => setState({ ...state, firstName })}
                    placeholder="Enter First Name*"
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    type="text"
                    value={state?.lastName}
                    onChange={(lastName) => setState({ ...state, lastName })}
                    placeholder="Enter Last Name*"
                  />
                </div>
                <div className="col-md-12">
                  <Input
                    type="email"
                    name
                    placeholder="Enter Email Address*"
                    value={state?.email}
                    onChange={(email) => setState({ ...state, email })}
                  />
                </div>
                <div className="col-md-12">
                  <InputPhone
                    placeholder="Enter Phone Number"
                    country={state?.phoneNumber?.countryDialCode}
                    value={state?.phoneNumber?.number}
                    onChange={(countryCode, phoneNumber) => {
                      console.log(countryCode, phoneNumber);
                    }}
                  />
                </div>
                <div className="col-md-6">
                  <select>
                    <option value>Select Country</option>
                    <option value>Select Country</option>
                    <option value>Select Country</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <select>
                    <option value>Select City</option>
                    <option value>Select City</option>
                    <option value>Select City</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <Input
                    type="text"
                    value={state?.address}
                    onChange={(address) => setState({ ...state, address })}
                    placeholder="Enter Address*"
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    type="number"
                    placeholder="Enter Zip Code"
                    value={state?.zipCode}
                    onChange={(zipCode) => setState({ ...state, zipCode })}
                  />
                </div>
                <div className="col-md-6">
                  <div className="paschan">
                    <Input
                      type="password"
                      value={state?.password}
                      onChange={(password) => setState({ ...state, password })}
                      placeholder="Enter Password*"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="paschan">
                    <input
                      type="password"
                      value={state?.confirmPassword}
                      onChange={(confirmPassword) => setState({ ...state, confirmPassword })}
                      placeholder="Confirm Password*"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="button">
                    <Button className="btn_orange h_18 px-4" loading={isLoading} onClick={handleSignup}>
                      SIGN UP <img src="assets/images/arrow_right_white.png" alt="" />
                    </Button>
                    <p className="h_20 text-gray">
                      Don't have an account?{" "}
                      <Link to="/login" className="text-darkblue h_20">
                        <u>Sign In</u>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-4">
            <div className="signup_right">
              <div id="signup-login">
                <SignupIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
