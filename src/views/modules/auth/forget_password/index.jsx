import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useMutation } from "react-query";

import { recoverPassword, resetPassword, verifyCode } from "../../../../services";

import Input from "../../../components/form_elements/Input";
import Button from "../../../components/form_elements/Button";
import Success from "../../../components/alerts/Success.Alert";
import Error from "../../../components/alerts/Error.Alert";

export default function ForgetPassword() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [step, setStep] = useState(1);

  // FORGOT PASSWORD JOURNEY APIs
  const { mutate: recoverPasswordMuate, isLoading: recoverLoading } = useMutation((data) => recoverPassword(data), {
    retry: false,
    onSuccess: (res) => {
      Success(res?.data?.message);
      setStep(2);
    },
    onError: (err) => Error(err?.response?.data?.message),
  });
  const { mutate: verifyCodeMutate, isLoading: codeLoading } = useMutation((data) => verifyCode(data), {
    retry: false,
    onSuccess: (res) => {
      // Success(res?.data?.message);
      setStep(3);
    },
    onError: (err) => Error(err?.response?.data?.message),
  });
  const { mutate: resetPasswordMuate, isLoading: resetLoading } = useMutation((data) => resetPassword(data), {
    retry: false,
    onSuccess: (res) => {
      Success(res?.data?.message);
      setStep(1);
      setCode("");
      setPassword("");
      setConfirmPassword("");
      history.replace("/");
    },
    onError: (err) => Error(err?.response?.data?.message),
  });

  return (
    <div
      className="modal fade auth-modal"
      id="modalForgotPassEmail"
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
              <div className="col-lg-5">
                <img src="assets/images/login-side.png" className="w-100 login-img d-block" />
              </div>
              <div className="col-lg-7 p-5">
                <h4 className="secondary-hdng mb-sm-5 mb-3 text-center">
                  Forgot <span className="text-primary">Password</span>
                </h4>
                <form>
                  <div className="row form-group mt-4">
                    {step === 1 ? (
                      <div className="col">
                        <label>Email Address</label>
                        <Input
                          type="email"
                          className="form-control"
                          placeholder="Enter Email Address"
                          value={email}
                          onChange={(email) => setEmail(email)}
                        />
                      </div>
                    ) : step === 2 ? (
                      <div className="col">
                        <label>Verification Code</label>
                        <Input
                          type="email"
                          className="form-control"
                          placeholder="Enter Verification Code"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          value={code}
                          onChange={(code) => setCode(code)}
                        />
                      </div>
                    ) : step === 3 ? (
                      <>
                        <div className="col-12 password-field">
                          <label className>Password</label>
                          <Input
                            type="password"
                            className="form-control"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(password) => setPassword(password)}
                          />
                          {/* <i className="toggle-password fas fa-eye" /> */}
                        </div>
                        <div className="col-12 password-field mt-4">
                          <label>Confirm Password</label>
                          <Input
                            type="password"
                            className="form-control"
                            placeholder="Enter Confirm Password"
                            ria-describedby="emailHelp"
                            value={confirmPassword}
                            onChange={(confirmPassword) => setConfirmPassword(confirmPassword)}
                          />
                          {/* <i className="toggle-password fas fa-eye" /> */}
                        </div>
                      </>
                    ) : null}
                  </div>
                  <div className={`d-flex justify-content-${step === 2 ? "between" : "end"}`}>
                    {step === 2 && (
                      <Link to="#" onClick={() => recoverPasswordMuate({ email })} className="frg-pass">
                        Resend Code
                      </Link>
                    )}
                    <Link
                      to="#"
                      data-dismiss="modal"
                      aria-label="Close"
                      data-toggle="modal"
                      data-target="#modalSignIn"
                      className="frg-pass"
                    >
                      Back To Login
                    </Link>
                  </div>
                  <div className="text-center mt-sm-5 mt-3">
                    <Button
                      className="btn btn-primary"
                      loading={recoverLoading || codeLoading || resetLoading}
                      onClick={() => {
                        if (step === 1) recoverPasswordMuate({ email });
                        if (step === 2) verifyCodeMutate({ code, email });
                        if (step === 3)
                          resetPasswordMuate({
                            password,
                            confirmPassword,
                            code,
                            email,
                          });
                      }}
                    >
                      Continue
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
