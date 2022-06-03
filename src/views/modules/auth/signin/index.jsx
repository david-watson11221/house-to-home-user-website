import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { useMutation } from "react-query";
import { useHistory, Link } from "react-router-dom";

import Error from "../../../components/alerts/Error.Alert";
import { userState } from "../../../../recoil";
import { getMe, login } from "../../../../services/auth";
import Input from "../../../components/form_elements/Input";
import Button from "../../../components/form_elements/Button";

export default function Login() {
  const Token = localStorage.getItem("JSON_WEB_TOKEN");
  const [state, setState] = useState({ email: "", password: "" });
  const history = useHistory();

  const { mutate: handleLogin, isLoading } = useMutation(() => login(state), {
    retry: false,
    onSuccess: (res) => {
      localStorage.setItem("JSON_WEB_TOKEN", res.data.token);
      window.location.reload();
    },
    onError: (err) => {
      console.log(err);
      Error(err?.response?.data?.message);
    },
  });

  // AFTER LOGIN FLOW
  const [user, setUser] = useRecoilState(userState);
  const [loading, setLoading] = useState(true);

  const { mutate: handleGetLoggedInUser } = useMutation(() => getMe(), {
    retry: false,
    onSuccess: (res) => {
      // console.log(res);
      setUser(res?.data?.user);
    },
    onError: (err) => {
      // console.log(err);
      localStorage.clear();
      history.push("/");
      setLoading(false);
    },
  });

  // useEffect(() => {
  //   if (Token) {
  //     setLoading(true);
  //     handleGetLoggedInUser();
  //   } else {
  //     setLoading(false);
  //   }
  // }, []);

  // console.log(user);

  return (
    <div
      className="modal fade auth-modal"
      id="modalSignIn"
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
                  Sign <span className="text-primary">In</span>
                </h4>
                <form>
                  <div className="row form-group mt-4">
                    <div className="col">
                      <label>Email Address</label>
                      <Input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email Address"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={state?.email}
                        onChange={(email) => setState({ ...state, email })}
                      />
                    </div>
                  </div>
                  <div className="row form-group mt-4">
                    <div className="col password-field">
                      <label className>Password</label>
                      <Input
                        type="password"
                        className="form-control"
                        placeholder="Enter Password"
                        value={state?.password}
                        onChange={(password) => setState({ ...state, password })}
                        onKeyPress={handleLogin}
                      />
                      {/* <i className="toggle-password fas fa-eye" /> */}
                    </div>
                  </div>
                  <div className="text-right">
                    <Link
                      to="#"
                      data-dismiss="modal"
                      aria-label="Close"
                      data-toggle="modal"
                      data-target="#modalForgotPassEmail"
                      className="frg-pass"
                    >
                      Forgot Password
                    </Link>
                  </div>
                  <div className="text-center mt-4">
                    <Button
                      loading={isLoading}
                      id="btn_login"
                      className="btn btn-primary"
                      onClick={handleLogin}
                    >
                      Sign In
                    </Button>
                    <p className="mt-sm-5 mt-4 text-dark">
                      Don't Have An Account?
                      <Link
                        to="#"
                        data-dismiss="modal"
                        aria-label="Close"
                        data-toggle="modal"
                        data-target="#modalSignUp"
                        className="text-primary"
                      >
                        Sign Up
                      </Link>
                    </p>
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
