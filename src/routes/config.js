import Signup from "../views/modules/auth/signup";
import Login from "../views/modules/auth/login";
import ForgetPassword from "../views/modules/auth/forget_password";
import VerifyCode from "../views/modules/auth/forget_password/VerifyCode";
import ResetPassword from "../views/modules/auth/forget_password/ResetPassword";
import Home from "../views/modules/home";

import Profile from "../views/modules/my_account";
import EditProfile from "../views/modules/my_account/EditProfile";
import ChangePassword from "../views/modules/my_account/ChangePassword";
import ContactUs from "../views/modules/contact_us";

export const ROUTES = [
  {
    title: "Sign Up",
    path: "/sign-up",
    type: "public",
    component: Signup,
  },
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
  {
    title: "Password Recovery",
    path: "/forget-password/code",
    type: "public",
    component: VerifyCode,
  },
  {
    title: "Password Recovery",
    path: "/reset-password",
    type: "public",
    component: ResetPassword,
  },
  {
    title: "Home",
    path: "/",
    type: "public",
    component: Home,
  },

  // MY Account

  {
    title: "My Profile",
    path: "/profile",
    type: "private",
    component: Profile,
  },
  {
    title: "Edit Profile",
    path: "/edit-profile",
    type: "private",
    component: EditProfile,
  },
  {
    title: "Change Password",
    path: "/change-password",
    type: "private",
    component: ChangePassword,
  },

  {
    title: "Contact Us",
    path: "/contact-us",
    type: "private",
    component: ContactUs,
  },
];
