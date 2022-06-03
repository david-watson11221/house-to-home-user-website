import React from "react";
import { useRecoilValue } from "recoil";

import { userState } from "../../../../recoil";
import { MEDIA_URL } from "../../../../services/config/baseUrl.config";

export default function Profile() {
  const user = useRecoilValue(userState);

  return (
    <div
      className="modal fade common-modal"
      id="modalProfile"
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
            <img
              src={user?.profileImage ? `${MEDIA_URL}${user?.profileImage}` : "assets/images/placeholder-gray.png"}
            />
            <a
              data-dismiss="modal"
              aria-label="Close"
              data-toggle="modal"
              data-target="#modalChangePassword"
              className="gray-txt d-block mt-1"
            >
              Change Password
            </a>
            <div className="d-flex justify-content-between my-4 px-sm-5 px-2">
              <div className="text-left">
                <h4 className="font-20">First Name</h4>
                <p className="gray-txt">{user?.firstName}</p>
              </div>
              <div className="text-left">
                <h4 className="font-20">Last Name</h4>
                <p className="gray-txt">{user?.lastName}</p>
              </div>
            </div>
            <div className="d-flex justify-content-between my-4 px-sm-5 px-2">
              <div className="text-left">
                <h4 className="font-20">Email Address</h4>
                <p className="gray-txt">{user?.auth?.email}</p>
              </div>
              <div className="text-left">
                <h4 className="font-20">Phone Number</h4>
                <p className="gray-txt">{`${user?.phoneNumber?.countryCode}${user?.phoneNumber?.number}`}</p>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-4 mb-2">
              <button
                type="button"
                data-dismiss="modal"
                aria-label="Close"
                data-toggle="modal"
                data-target="#modalEditProfile"
                className="mx-2 btn btn-primary"
              >
                Edit Profle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
