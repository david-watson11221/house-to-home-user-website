import React, { useState } from "react";
import { useMutation } from "react-query";
import { changePassword } from "../../../../services";
import Error from "../../../components/alerts/Error.Alert";
import Success from "../../../components/alerts/Success.Alert";
import Button from "../../../components/form_elements/Button";
import Input from "../../../components/form_elements/Input";

export default function ChangePassword() {
  const [state, setState] = useState({});
  const { mutate, isLoading } = useMutation((data) => changePassword(data), {
    retry: false,
    onSuccess: (res) => {
      Success(res?.data?.message);
      window.$("#modalChangePassword").modal("hide");
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
    <div
      className="modal fade common-modal"
      id="modalChangePassword"
      tabIndex={-1}
      aria-labelledby="logoutLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          <div className="modal-body text-center pt-0">
            <div className="row form-group text-left mt-4 px-sm-5 px-2">
              <div className="col-12 password-field mb-3">
                <label className>Current Password</label>
                <Input
                  type="password"
                  className="form-control"
                  placeholder="Enter Current Password"
                  value={state?.currentPassword}
                  onChange={(currentPassword) => setState({ ...state, currentPassword })}
                />
                {/* <i className="toggle-password fas fa-eye" /> */}
              </div>
              <div className="col-12 password-field mb-3">
                <label>New Password</label>
                <Input
                  type="password"
                  className="form-control"
                  placeholder="Enter New Password"
                  aria-describedby="emailHelp"
                  value={state?.newPassword}
                  onChange={(newPassword) => setState({ ...state, newPassword })}
                />
                {/* <i className="toggle-password fas fa-eye" /> */}
              </div>
              <div className="col-12 password-field mb-3">
                <label>Confirm Password</label>
                <Input
                  type="password"
                  className="form-control"
                  placeholder="Enter Confirm Password"
                  aria-describedby="emailHelp"
                  value={state?.confirmPassword}
                  onChange={(confirmPassword) => setState({ ...state, confirmPassword })}
                />
                {/* <i className="toggle-password fas fa-eye" /> */}
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4 mb-2">
              <Button loading={isLoading} onClick={handleSubmit} type="button" className="mx-2 btn btn-primary">
                Update
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
