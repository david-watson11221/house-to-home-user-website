import Login from "../views/modules/auth/login";
import ForgetPassword from "../views/modules/auth/forget_password";

export const ROUTES = [
  {
    title: "Login",
    path: "/login",
    type: "public",
    component: Login,
  },
  {
    title: "Password Recovery",
    path: "/forget-password",
    type: "public",
    component: ForgetPassword,
  },
];
