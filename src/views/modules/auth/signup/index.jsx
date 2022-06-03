import React, { useState } from "react";
import { useMutation } from "react-query";
import InputPhone from "../../../components/form_elements/InputPhone";
import Input from "../../../components/form_elements/Input";
import Button from "../../../components/form_elements/Button";
import Success from "../../../components/alerts/Success.Alert";
import Warning from "../../../components/alerts/Warning.Alert";
import Error from "../../../components/alerts/Error.Alert";
import { signup } from "../../../../services/auth";

export default function Signup() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    countryCode: "",
    phoneNumber: "",
    confirmPassword: "",
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
                      <Input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        value={state?.firstName}
                        onChange={(firstName) => setState({ ...state, firstName })}
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className>Last Name</label>
                      <Input
                        type="text"
                        className="form-control"
                        placeholder="Enter Last Name"
                        value={state?.lastName}
                        onChange={(lastName) => setState({ ...state, lastName })}
                      />
                    </div>
                    <div className="col-md-6 mb-4">
                      <label className>Phone Number</label>
                      <InputPhone
                        className="form-control"
                        placeholder="Enter Phone Number"
                        country={state?.countryCode}
                        value={state?.phoneNumber}
                        onChange={(countryCode, phoneNumber) =>
                          setState({ ...state, countryCode, phoneNumber })
                        }
                      />
                      {/* <input type="text" className="form-control" placeholder="Enter Phone Number" /> */}
                    </div>
                    <div className="col-md-6 mb-4">
                      <label>Email Address</label>
                      <Input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email Address"
                        id="exampleInputEmail1"
                        value={state?.email}
                        onChange={(email) => setState({ ...state, email })}
                      />
                    </div>
                    <div className="col-md-6 mb-4 password-field">
                      <label className>Password</label>
                      <Input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        value={state?.password}
                        onChange={(password) => setState({ ...state, password })}
                      />
                      {/* <i className="toggle-password fas fa-eye" /> */}
                    </div>
                    <div className="col-md-6 mb-4 password-field">
                      <label>Confirm Password</label>
                      <Input
                        type="password"
                        className="form-control"
                        placeholder="Enter Confirm Password"
                        value={state?.confirmPassword}
                        onChange={(confirmPassword) => setState({ ...state, confirmPassword })}
                      />
                      {/* <i className="toggle-password fas fa-eye" /> */}
                    </div>
                  </div>
                  <div className="text-center mt-sm-5 mt-3">
                    <Button className="btn btn-primary" loading={isLoading} onClick={handleSignup}>
                      Sign Up
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
