import React from "react";
import { useMutation } from "react-query";

import { submitFeedback } from "../../../services";
import Input from "../../components/form_elements/Input";
import Button from "../../components/form_elements/Button";
import Success from "../../components/alerts/Success.Alert";
import Error from "../../components/alerts/Error.Alert";
import { useState } from "react";

export default function ContactUs() {
  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { mutate, isLoading } = useMutation(() => submitFeedback({ ...state, userType: "User" }), {
    onSuccess: (res) => {
      Success(res?.data?.message);
      setState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    },
    onError: (err) => {
      Error(err?.response?.data?.message);
    },
  });

  return (
    <section className="seccontact py-md-5 py-3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form>
              <div className="row">
                <div className="col-md-12">
                  <div className="finspired_top heading_main text-md-center text-left mb-md-5 mb-1">
                    <h3 className="h_57 mb-md-3 mb-1">Contact Us</h3>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <Input
                    type="text"
                    placeholder="Name*"
                    value={state?.name}
                    onChange={(name) => setState({ ...state, name })}
                  />
                </div>
                <div className="col-md-6">
                  <Input
                    type="email"
                    placeholder="Email*"
                    value={state?.email}
                    onChange={(email) => setState({ ...state, email })}
                  />
                </div>
                <div className="col-md-12">
                  <Input
                    type="text"
                    placeholder="Subject*"
                    value={state?.subject}
                    onChange={(subject) => setState({ ...state, subject })}
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    placeholder="Message*"
                    value={state?.message}
                    onChange={(e) => setState({ ...state, message: e.target.value })}
                  />
                </div>
                <div className="col-md-12 text-center">
                  <Button loading={isLoading} onClick={mutate} className="btn_orange">
                    SEND <img src="assets/images/arrow_right_white.png" alt="" />
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
