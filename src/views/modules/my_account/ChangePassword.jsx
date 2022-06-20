import React, { useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { changePassword } from "../../../services";

import Success from "../../components/alerts/Success.Alert";
import Error from "../../components/alerts/Error.Alert";

export default function ChangePassword() {
  const navigate = useNavigate();
  const [state, setState] = useState({});
  const { mutate, isLoading } = useMutation((data) => changePassword(data), {
    retry: false,
    onSuccess: (res) => {
      Success(res?.data?.message);
      navigate("/profile");
    },
    onError: (err) => Error(err?.response?.data?.message),
  });

  const handleSubmit = () => {
    if (state?.newPassword !== state?.currentPassword) {
      if (state?.newPassword === state?.confirmPassword) {
        mutate(state);
      } else Error("Password does not match");
    } else Error("Your new password must be different from your previous password.");
  };

  return (
    <section className="secsignup py-md-5 py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <form>
              <div className="row mb-md-5 mb-0">
                <div className="col-md-12">
                  <div className="finspired_top heading_main text-left mb-md-5 mb-1">
                    <h3 className="h_57 mb-md-3 mb-1">CHANGE PASSWORD</h3>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="paschan">
                    <input type="password" name placeholder="Current Password*" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="paschan">
                    <input type="password" name placeholder="New Password*" />
                    <i className="far fa-eye-slash toggle_password" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="paschan">
                    <input type="password" name placeholder="Confirm Password*" />
                    <i className="far fa-eye-slash toggle_password" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="button">
                    <button
                      type="button"
                      onclick="location.href='sign-in.php'"
                      className="btn_orange h_22 py-3 px-5"
                    >
                      UPDATE <img src="assets/images/arrow_right_white.png" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="signup_right">
              <img src="assets/images/forgotpass_img.png" alt="" />{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
