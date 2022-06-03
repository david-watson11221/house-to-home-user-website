import React from "react";
import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App";
import "react-datepicker/dist/react-datepicker.css";
import "./index.css";

export const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Router basename="/house-to-home/user">
          <App />
        </Router>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
