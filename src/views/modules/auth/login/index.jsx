import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { useRecoilState } from "recoil";

import { getMe, login } from "../../../../services";
import { userState } from "../../../../store";
import LoginIcon from "../../../components/icons/svgs/Login.Icon";
import Input from "../../../components/form_elements/Input";
import Button from "../../../components/form_elements/Button";
import Error from "../../../components/alerts/Error.Alert";

const INITIAL_STATE = {
  email: "",
  password: "",
};

export default function Login() {
  const Token = localStorage.getItem("JSON_WEB_TOKEN");
  const [state, setState] = useState(INITIAL_STATE);
  const navigate = useNavigate();

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
      setUser(res?.data?.user);
      navigate("/");
    },
    onError: (err) => {
      console.log(err);
      localStorage.clear();
      navigate("/login");
      setLoading(false);
    },
  });

  useEffect(() => {
    if (Token) {
      setLoading(true);
      handleGetLoggedInUser();
    } else {
      setLoading(false);
    }
  }, []);

  if (loading)
    return (
      <div
        style={{
          height: "100vh",
          // width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#fff",
        }}
      >
        <img src="assets/images/logo.png" />
      </div>
    );

  return (
    <section className="secsignup py-md-5 py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <form>
              <div className="row mb-md-5 mb-0">
                <div className="col-md-12">
                  <div className="finspired_top heading_main text-left mb-md-5 mb-1">
                    <h3 className="h_57 mb-md-3 mb-1">SIGN IN</h3>
                    <p className="h_20">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
                    </p>
                  </div>
                </div>
                <div className="col-md-12">
                  <Input
                    type="email"
                    placeholder="Enter Email Address*"
                    value={state?.email}
                    onChange={(email) => setState({ ...state, email })}
                  />
                </div>
                <div className="col-md-12">
                  <div className="paschan">
                    <Input
                      type="password"
                      placeholder="Enter Password*"
                      value={state?.password}
                      onChange={(password) => setState({ ...state, password })}
                    />
                  </div>
                </div>
                <div className="col-md-12 text-right">
                  <Link to="/forget-password" className="text-darkblue h_24 mb-3">
                    <u>Forgot Password ?</u>
                  </Link>
                </div>
                <div className="col-md-12">
                  <div className="button">
                    <Button
                      loading={isLoading}
                      onClick={handleLogin}
                      className="btn_orange h_22 py-3 px-5"
                      id="btn_login"
                    >
                      SIGN IN <img src="assets/images/arrow_right_white.png" alt="" />
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="signup_right">
              <div id="signup-login">
                <LoginIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
