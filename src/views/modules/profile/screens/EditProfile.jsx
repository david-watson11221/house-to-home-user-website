import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";

import { userState } from "../../../../recoil";
import { updateProfile } from "../../../../services/user";
import { MEDIA_URL } from "../../../../services/config/baseUrl.config";
import ImageSelector from "../components/ImageSelector";
import Input from "../../../components/form_elements/Input";
import InputPhone from "../../../components/form_elements/InputPhone";
import Button from "../../../components/form_elements/Button";
import Success from "../../../components/alerts/Success.Alert";
import Error from "../../../components/alerts/Error.Alert";

export default function EditProfile() {
  const user = useRecoilValue(userState);
  const [state, setState] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.auth?.email,
    countryCode: user?.phoneNumber?.countryCode,
    phoneNumber: user?.phoneNumber?.number,
    profileImage: user?.profileImage || null,
  });

  useEffect(() => {
    if (user?._id) {
      setState({
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.auth?.email,
        countryCode: user?.phoneNumber?.countryCode,
        phoneNumber: user?.phoneNumber?.number,
        profileImage: user?.profileImage || null,
      });
    }
  }, [user]);

  const { mutate: _updateProfile, isLoading } = useMutation(
    (data) => updateProfile(data, user?._id),
    {
      retry: false,
      onSuccess: (res) => {
        Success(res?.data?.message);
        window.$("#modalEditProfile").modal("hide");
      },
      onError: (err) => {
        // console.log(err);
        Error(err?.response?.data?.message);
      },
    }
  );

  const handleUpdateProfile = () => {
    const form_data = new FormData();
    form_data.append("firstName", state.firstName);
    form_data.append("lastName", state.lastName);
    form_data.append("countryCode", state.countryCode);
    form_data.append("phoneNumber", state.phoneNumber);
    if (state?.profileImage) form_data.append("profileImage", state.profileImage);
    _updateProfile(form_data);
  };

  return (
    <div
      className="modal fade common-modal"
      id="modalEditProfile"
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
            <figure className="text-center position-relative">
              <ImageSelector
                value={state?.profileImage}
                onChange={(profileImage) => setState({ ...state, profileImage })}
              />
              {/* <img src="assets/images/placeholder-gray.png" />
              <input type="file" id="imgupload" style={{ display: "none" }} />
              <button id="OpenImgUpload" className="change-image">
                <i className="fas fa-camera" />
              </button> */}
            </figure>
            <Link
              to="#"
              data-dismiss="modal"
              aria-label="Close"
              data-toggle="modal"
              data-target="#modalChangePassword"
              className="gray-txt d-block mt-1"
            >
              Change Password
            </Link>
            <div className="row form-group text-left mt-3 px-sm-5 px-2">
              <div className="col-12 mb-3">
                <label className>First Name</label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  value={state?.firstName}
                  onChange={(firstName) => setState({ ...state, firstName })}
                />
              </div>
              <div className="col-12 mb-3">
                <label className>Last Name</label>
                <Input
                  type="text"
                  className="form-control"
                  placeholder="Enter Last Name"
                  value={state?.lastName}
                  onChange={(lastName) => setState({ ...state, lastName })}
                />
              </div>
              <div className="col-12 mb-3">
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
              </div>
              <div className="col-12 mb-3 px-4">
                <h4 className="font-20">Email Address</h4>
                <p className="gray-txt">{user?.auth?.email}</p>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4 mb-2">
              <Button
                loading={isLoading}
                onClick={handleUpdateProfile}
                className="mx-2 btn btn-primary"
              >
                Update
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
