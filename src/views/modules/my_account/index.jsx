import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { userState } from "../../../store";

export default function Profile() {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();

  return (
    <section className="secaddcard paddingtb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="d-block d-md-flex justify-content-between mb-5 align-items-center">
              <h3 className="h_57 black mb-0">PROFILE</h3>
            </div>
          </div>
          <div className="col-md-12">
            <div className="profile_main">
              <div className="d-flex profile_top justify-content-between mb-5">
                <div className="profile_tboxl">
                  <img src="assets/images/profile_tboxl.png" alt="profile_tboxl" />
                </div>
                <div className="profile_tboxr">
                  <button className="btn_orange d-block" onClick={() => navigate("/edit-profile")}>
                    Edit <img src="assets/images/arrow_right_white.png" alt="" />
                  </button>
                  <Link to="/change-password" className="h_14 text-darkblue font-weight-bold">
                    <u>Change Password</u>
                  </Link>
                </div>
              </div>
              <div className="profile_bott">
                <div className="row">
                  <div className="col-md-6">
                    <div className="profile_bboxl">
                      <div className="row mb-md-5 mb-0">
                        <div className="col-md-4">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-body font-weight-bold">
                            First Name
                          </h5>
                        </div>
                        <div className="col-md-8">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-secondary">{user?.firstName}</h5>
                        </div>
                      </div>
                      <div className="row mb-md-5 mb-0">
                        <div className="col-md-4">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-body font-weight-bold">
                            Last Name
                          </h5>
                        </div>
                        <div className="col-md-8">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-secondary">{user?.lastName}</h5>
                        </div>
                      </div>
                      <div className="row mb-md-5 mb-0">
                        <div className="col-md-4">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-body font-weight-bold">
                            Phone No
                          </h5>
                        </div>
                        <div className="col-md-8">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-secondary">
                            {user?.phoneNumber?.number}
                          </h5>
                        </div>
                      </div>
                      <div className="row mb-md-5 mb-0">
                        <div className="col-md-4">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-body font-weight-bold">
                            Email Address
                          </h5>
                        </div>
                        <div className="col-md-8">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-secondary">{user?.email}</h5>
                        </div>
                      </div>
                      <div className="row mb-md-5 mb-0">
                        <div className="col-md-4">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-body font-weight-bold">
                            Country
                          </h5>
                        </div>
                        <div className="col-md-8">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-secondary">{user?.country}</h5>
                        </div>
                      </div>
                      <div className="row mb-md-5 mb-0">
                        <div className="col-md-4">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-body font-weight-bold">City</h5>
                        </div>
                        <div className="col-md-8">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-secondary">{user?.city}</h5>
                        </div>
                      </div>
                      <div className="row mb-md-5 mb-0">
                        <div className="col-md-4">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-body font-weight-bold">
                            Address
                          </h5>
                        </div>
                        <div className="col-md-8">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-secondary">{user?.address}</h5>
                        </div>
                      </div>
                      <div className="row mb-md-5 mb-0">
                        <div className="col-md-4">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-body font-weight-bold">
                            Zip Code
                          </h5>
                        </div>
                        <div className="col-md-8">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-secondary">{user?.zipCode}</h5>
                        </div>
                      </div>
                    </div>
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
