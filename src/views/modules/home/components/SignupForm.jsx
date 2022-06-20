import React, { useState } from "react";
import { useMutation } from "react-query";

import { signup } from "../../../../services/auth";

import Input from "../../../components/form_elements/Input";
import Button from "../../../components/form_elements/Button";
import Success from "../../../components/alerts/Success.Alert";
import Warning from "../../../components/alerts/Warning.Alert";
import Error from "../../../components/alerts/Error.Alert";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { mutate, isLoading } = useMutation(() => signup(state), {
    retry: false,
    onSuccess: (res) => {
      Success(res?.data?.message);
      navigate("/login");
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
    <form className="secsignup row">
      <div className="col-md-6">
        <Input
          type="text"
          placeholder="Enter First Name"
          value={state?.firstName}
          onChange={(firstName) => setState({ ...state, firstName })}
        />
      </div>
      <div className="col-md-6">
        <Input
          type="text"
          placeholder="Enter Surname"
          value={state?.lastName}
          onChange={(lastName) => setState({ ...state, lastName })}
        />
      </div>
      <div className="col-md-12">
        <Input
          type="email"
          placeholder="Enter Email"
          value={state?.email}
          onChange={(email) => setState({ ...state, email })}
        />
      </div>
      <div className="col-md-12">
        <div className="paschan">
          <Input
            type="password"
            placeholder="Enter Password"
            value={state?.password}
            onChange={(password) => setState({ ...state, password })}
          />
        </div>
      </div>
      <div className="col-md-12">
        <div className="paschan">
          <Input
            type="password"
            placeholder="Confirm Password"
            value={state?.confirmPassword}
            onChange={(confirmPassword) => setState({ ...state, confirmPassword })}
          />
        </div>
      </div>
      <div className="col-md-12 text-md-center text-left">
        <Button loading={isLoading} onClick={handleSignup} className="btn_whitebor">
          Sign Up <img src="assets/images/arrow_right_white.png" className="pl-3" alt="" />
        </Button>
      </div>
    </form>
  );
}
