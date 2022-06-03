import { Routes, Route } from "react-router-dom";

import { ROUTES } from "./config";
import PrivateRoute from "./Private.routes";

const AppRoutes = () => (
  <Routes>
    {ROUTES.map((route, index) =>
      route.type === "private" ? (
        <Route
          key={index}
          path={route.path}
          element={
            <PrivateRoute title={route.title}>
              <route.component />
            </PrivateRoute>
          }
        />
      ) : (
        <Route key={index} path={route.path} element={<route.component />} />
      )
    )}
  </Routes>
);

export default AppRoutes;
