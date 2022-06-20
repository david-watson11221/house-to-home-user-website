import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { Country, City } from "country-state-city";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { signup, getMe } from "../../../../services/auth";
import { userState } from "../../../../store";
import InputPhone from "../../../components/form_elements/InputPhone";
import Input from "../../../components/form_elements/Input";
import Button from "../../../components/form_elements/Button";
import Success from "../../../components/alerts/Success.Alert";
import Warning from "../../../components/alerts/Warning.Alert";
import Error from "../../../components/alerts/Error.Alert";
import SignupIcon from "../../../components/icons/svgs/Signup.Icon";
import Spinner from "../../../components/loaders/Spinner";

export default function Signup() {
  const Token = localStorage.getItem("JSON_WEB_TOKEN");
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: {
      countryCode: "",
      dialCode: "",
      number: "",
    },
    confirmPassword: "",
    address: "",
    zipCode: "",
    city: "",
    country: "",
  });
  const countries = Country.getAllCountries();
  const [cities, setCities] = useState([]);
  const [loadingCities, setLaodingCities] = useState(false);
  const [user, setUser] = useRecoilState(userState);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  const handleChangeCountry = (e) => {
    setLaodingCities(true);
    let code = e.target.value.split("?")[0];
    let country = e.target.value.split("?")[1];
    setState({ ...state, country });
    setCities(City.getCitiesOfCountry(code));
    setTimeout(() => {
      setLaodingCities(false);
    }, 15000);
  };

  const handleSignup = () => {
    if (state?.password !== state?.confirmPassword) {
      Warning("Password does not match");
    } else {
      mutate();
    }
  };

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
        <div className="row">
          <div className="col-md-12">
            <div className="finspired_top heading_main text-left mb-md-5 mb-1">
              <h3 className="h_57 mb-md-3 mb-1">Sign Up</h3>
              <p className="h_20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <form>
              <div className="row mb-md-5 mb-0">
                <div className="col-md-6">
                  <Input
                    type="text"
                    value={state?.firstName}
                    onChange={(firstName) => setState({ ...state, firstName })}
                    placeholder="Enter First Name*"
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    type="text"
                    value={state?.lastName}
                    onChange={(lastName) => setState({ ...state, lastName })}
                    placeholder="Enter Last Name*"
                  />
                </div>
                <div className="col-md-12">
                  <Input
                    type="email"
                    name
                    placeholder="Enter Email Address*"
                    value={state?.email}
                    onChange={(email) => setState({ ...state, email })}
                  />
                </div>
                <div className="col-md-12">
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
                <div className="col-md-6">
                  <select onChange={(e) => handleChangeCountry(e)}>
                    <option value="">Select Country</option>
                    {countries?.map((val, i) => (
                      <option key={i} value={`${val.isoCode}?${val.name}`}>
                        {val.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-6">
                  {loadingCities ? (
                    <Spinner />
                  ) : (
                    <select onChange={(e) => setState({ ...state, city: e.target.value })}>
                      <option value="">Select City</option>
                      {cities?.map((val, i) => (
                        <option key={i} value={val.name}>
                          {val.name}
                        </option>
                      ))}
                    </select>
                  )}
                </div>

                <div className="col-md-6">
                  <Input
                    type="text"
                    value={state?.address}
                    onChange={(address) => setState({ ...state, address })}
                    placeholder="Enter Address*"
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    type="number"
                    placeholder="Enter Zip Code"
                    value={state?.zipCode}
                    onChange={(zipCode) => setState({ ...state, zipCode })}
                  />
                </div>
                <div className="col-md-6">
                  <div className="paschan">
                    <Input
                      type="password"
                      value={state?.password}
                      onChange={(password) => setState({ ...state, password })}
                      placeholder="Enter Password*"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="paschan">
                    <Input
                      placeholder="Confirm Password*"
                      type="password"
                      value={state?.confirmPassword}
                      onChange={(confirmPassword) => setState({ ...state, confirmPassword })}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="button">
                    <Button className="btn_orange h_18 px-4" loading={isLoading} onClick={handleSignup}>
                      SIGN UP <img src="assets/images/arrow_right_white.png" alt="" />
                    </Button>
                    <p className="h_20 text-gray">
                      Don't have an account?{" "}
                      <Link to="/login" className="text-darkblue h_20">
                        <u>Sign In</u>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-4">
            <div className="signup_right">
              <div id="signup-login">{/* <SignupIcon /> */}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
