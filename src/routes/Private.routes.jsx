import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import { getMe } from "../services";
import { useLocationTitle } from "../hooks";
import { userState } from "../store";
import Layout from "../views/layouts";

export default function PrivateRoutes({ children, title, ...rest }) {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);
  const [loading, setLoading] = useState(false);

  const { mutate, isLoading } = useMutation(() => getMe(), {
    retry: false,
    onSuccess: (res) => {
      // console.log("res.dataL: ", res.data);
      setUser(res?.data?.admin);
      setLoading(false);
    },
    onError: (err) => {
      navigate("/login", { replace: true });
      localStorage.clear();
      setLoading(false);
    },
  });

  useLocationTitle(title);
  useEffect(() => {
    setLoading(true);
    if (!user?._id) {
      mutate();
    } else {
      setLoading(false);
      //   if (window.location.pathname === "/") navigate("/dashboard", { replace: true });
    }
  }, [user?._id]);

  if (isLoading || loading)
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#fff",
          marginTop: -56,
        }}
      >
        <img src="images/loginLogo.png" alt="logo" />
      </div>
    );

  return <Layout>{children}</Layout>;
}
