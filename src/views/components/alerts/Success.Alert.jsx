// import React from "react";
import Swal from "sweetalert2";

const Success = (message) =>
  Swal.fire({
    icon: "success",
    title: "SUCCESS",
    text: `${message ? message : "Completed"}`,
    showConfirmButton: false,
    timer: 1000,
  });

export default Success;
