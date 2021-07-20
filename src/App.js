import { BrowserRouter, Route } from "react-router-dom";
import Sidebar from "../src/components/Sidebar";
import Footer from "../src/components/Footer";

import routes from "./routes";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        {routes.map((route) => (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            component={route.component}
          ></Route>
        ))}
        <Footer />
      </BrowserRouter>
    </>
  );
}
