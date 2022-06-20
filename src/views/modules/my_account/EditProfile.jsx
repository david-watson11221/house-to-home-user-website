import React, { useState } from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { updateProfile } from "../../../services";
import { userState } from "../../../store";

import Input from "../../components/form_elements/Input";
import ImagePicker from "../../components/form_elements/ImagePicker";
import Button from "../../components/form_elements/Button";
import Success from "../../components/alerts/Success.Alert";
import Error from "../../components/alerts/Error.Alert";

export default function EditProfile() {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();

  const [state, setState] = useState({});

  const { mutate, isLoading } = useMutation(() => updateProfile(), {
    onSuccess: (res) => {
      Success(res?.data?.message);
    },
    onError: (err) => {
      Error(err?.response?.data?.message);
    },
  });

  return (
    <section className="secaddcard paddingtb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="d-block d-md-flex justify-content-between mb-5 align-items-center">
              <h3 className="h_57 black mb-0">
                <i onclick="history.go(-1)" className="far fa-long-arrow-left pr-md-4 pr-0" /> Edit Profile
              </h3>
            </div>
          </div>
          <div className="col-md-12">
            <div className="profile_main">
              <div className="d-flex profile_top justify-content-between mb-5">
                <ImagePicker
                  value={state?.profileImage}
                  onChange={(profileImage) => setState({ ...state, profileImage })}
                />
                <div className="profile_tboxr">
                  <Link to="/change-password" className="h_14 text-darkblue font-weight-bold">
                    <u>Change Password</u>
                  </Link>
                </div>
              </div>
              <div className="profile_bott">
                <div className="row">
                  <div className="col-md-6">
                    <form className="profile_bboxl">
                      <div className="row mb-md-3 mb-0 align-items-baseline">
                        <div className="col-md-4">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-body font-weight-bold">
                            First Name
                          </h5>
                        </div>
                        <div className="col-md-8">
                          <input type="text" name placeholder="Mark" className="mb-md-0 mb-2" />
                        </div>
                      </div>
                      <div className="row mb-md-3 mb-0 align-items-baseline">
                        <div className="col-md-4">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-body font-weight-bold">
                            Last Name
                          </h5>
                        </div>
                        <div className="col-md-8">
                          <input type="text" name placeholder="Carson" className="mb-md-0 mb-2" />
                        </div>
                      </div>
                      <div className="row mb-md-3 mb-0 align-items-baseline">
                        <div className="col-md-4">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-body font-weight-bold">
                            Phone No
                          </h5>
                        </div>
                        <div className="col-md-8">
                          <input type="text" name placeholder={12337234} className="mb-md-0 mb-2" />
                        </div>
                      </div>
                      <div className="row mb-md-3 mb-0 align-items-baseline">
                        <div className="col-md-4">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-body font-weight-bold">
                            Email Address
                          </h5>
                        </div>
                        <div className="col-md-8">
                          <input type="email" name placeholder="test@testing.com" className="mb-md-0 mb-2" />
                        </div>
                      </div>
                      <div className="row mb-md-3 mb-0 align-items-baseline">
                        <div className="col-md-4">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-body font-weight-bold">
                            Country
                          </h5>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            name
                            placeholder="Lorem Ipsum Dolor Sit Amet"
                            className="mb-md-0 mb-2"
                          />
                        </div>
                      </div>
                      <div className="row mb-md-3 mb-0 align-items-baseline">
                        <div className="col-md-4">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-body font-weight-bold">City</h5>
                        </div>
                        <div className="col-md-8">
                          <input type="text" name placeholder="Lorem Ipsum" className="mb-md-0 mb-2" />
                        </div>
                      </div>
                      <div className="row mb-md-3 mb-0 align-items-baseline">
                        <div className="col-md-4">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-body font-weight-bold">
                            Address
                          </h5>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            name
                            placeholder="Lorem Ipsum Dolor Sit Amet"
                            className="mb-md-0 mb-2"
                          />
                        </div>
                      </div>
                      <div className="row mb-md-5 mb-0 align-items-baseline">
                        <div className="col-md-4">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-body font-weight-bold">
                            Zip Code
                          </h5>
                        </div>
                        <div className="col-md-8">
                          <input type="text" className="mb-md-0 mb-2" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <button
                            className="btn_orange d-block px-5 py-3"
                            type="button"
                            onclick="location.href='change_password.php'"
                          >
                            UPDATE <img src="assets/images/arrow_right_white.png" alt="" />
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-6">
                    <div className="profile_bboxr">
                      <div id="profile"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
