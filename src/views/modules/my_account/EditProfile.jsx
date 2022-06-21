import React, { useState } from "react";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Country, City } from "country-state-city";

import { updateProfile } from "../../../services";
import { userState } from "../../../store";

import Input from "../../components/form_elements/Input";
import ImagePicker from "../../components/form_elements/ImagePicker";
import InputPhone from "../../components/form_elements/InputPhone";
import Button from "../../components/form_elements/Button";
import Success from "../../components/alerts/Success.Alert";
import Error from "../../components/alerts/Error.Alert";
import Spinner from "../../components/loaders/Spinner";

export default function EditProfile() {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);
  const countries = Country.getAllCountries();
  const [cities, setCities] = useState([]);
  const [loadingCities, setLaodingCities] = useState(false);
  const [state, setState] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    phoneNumber: {
      countryCode: user?.phoneNumber?.countryCode || "",
      dialCode: user?.phoneNumber?.dialCode || "",
      number: user?.phoneNumber?.number || "",
    },
    profileImage: user?.profileImage || "",
    address: user?.address || "",
    zipCode: user?.zipCode || "",
    city: user?.city || "",
    country: user?.country || "",
  });

  const { mutate, isLoading } = useMutation((data) => updateProfile(data, user?._id), {
    onSuccess: (res) => {
      Success(res?.data?.message);
    },
    onError: (err) => {
      Error(err?.response?.data?.message);
    },
  });

  const handleChangeCountry = (e) => {
    setLaodingCities(true);
    let code = e.target.value.split("?")[0];
    let country = e.target.value.split("?")[1];
    setState({ ...state, country });
    setCities(City.getCitiesOfCountry(code));
    setTimeout(() => {
      setLaodingCities(false);
    }, 1500);
  };

  const handleUpdateProfile = () => {
    const form_data = new FormData();
    form_data.append("firstName", state.firstName);
    form_data.append("lastName", state.lastName);
    form_data.append("phoneNumber", JSON.stringify(state.phoneNumber));
    form_data.append("address", state.address);
    form_data.append("zipCode", state.zipCode);
    form_data.append("country", state.country);
    form_data.append("city", state.city);
    if (state?.profileImage) form_data.append("profileImage", state.profileImage);
    mutate(form_data);
  };

  return (
    <section className="secaddcard paddingtb">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="d-block d-md-flex justify-content-between mb-5 align-items-center">
              <h3 className="h_57 black mb-0">
                <i onClick={() => navigate(-1)} className="far fa-long-arrow-left pr-md-4 pr-0" /> Edit
                Profile
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
                          <Input
                            type="text"
                            placeholder="Mark"
                            className="mb-md-0 mb-2"
                            value={state?.firstName}
                            onChange={(firstName) => setState({ ...state, firstName })}
                          />
                        </div>
                      </div>
                      <div className="row mb-md-3 mb-0 align-items-baseline">
                        <div className="col-md-4">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-body font-weight-bold">
                            Last Name
                          </h5>
                        </div>
                        <div className="col-md-8">
                          <input
                            type="text"
                            placeholder="Carson"
                            className="mb-md-0 mb-2"
                            value={state?.lastName}
                            onChange={(lastName) => setState({ ...state, lastName })}
                          />
                        </div>
                      </div>
                      <div className="row mb-md-3 mb-0 align-items-baseline">
                        <div className="col-md-4">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-body font-weight-bold">
                            Phone No
                          </h5>
                        </div>
                        <div className="col-md-8">
                          <InputPhone
                            placeholder="Enter Phone Number"
                            country={state?.phoneNumber?.dialCode}
                            value={state?.phoneNumber?.number}
                            onChange={(dialCode, countryCode, number) => {
                              setState({ ...state, phoneNumber: { dialCode, countryCode, number } });
                            }}
                          />
                          <br />
                        </div>
                      </div>
                      <div className="row mb-md-3 mb-0 align-items-baseline">
                        <div className="col-md-4">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-body font-weight-bold">
                            Country
                          </h5>
                        </div>
                        <div className="col-md-8">
                          <select onChange={(e) => handleChangeCountry(e)}>
                            <option value={state?.country}>{state?.country}</option>
                            {countries?.map((val, i) => (
                              <option key={i} value={`${val.isoCode}?${val.name}`}>
                                {val.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="row mb-md-3 mb-0 align-items-baseline">
                        <div className="col-md-4">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-body font-weight-bold">City</h5>
                        </div>
                        <div className="col-md-8">
                          {loadingCities ? (
                            <Spinner />
                          ) : (
                            <select onChange={(e) => setState({ ...state, city: e.target.value })}>
                              <option value={state?.city}>{state?.city}</option>
                              {cities?.map((val, i) => (
                                <option key={i} value={val.name}>
                                  {val.name}
                                </option>
                              ))}
                            </select>
                          )}
                        </div>
                      </div>
                      <div className="row mb-md-3 mb-0 align-items-baseline">
                        <div className="col-md-4">
                          <h5 className="h_20 mb-md-0 mb-2 baijamjuree text-body font-weight-bold">
                            Address
                          </h5>
                        </div>
                        <div className="col-md-8">
                          <Input
                            type="text"
                            placeholder="Mark"
                            className="mb-md-0 mb-2"
                            value={state?.address}
                            onChange={(address) => setState({ ...state, address })}
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
                          <Input
                            type="text"
                            className="mb-md-0 mb-2"
                            value={state?.zipCode}
                            onChange={(zipCode) => setState({ ...state, zipCode })}
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <Button
                            type="button"
                            className="btn_orange d-block px-5 py-3"
                            loading={isLoading}
                            onClick={handleUpdateProfile}
                          >
                            UPDATE <img src="assets/images/arrow_right_white.png" alt="" />
                          </Button>
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
