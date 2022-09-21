import {DasboardLayout,DetailsLayout,LoginLayout} from "./Layouts"
import {Login,Overview,OverviewDetails} from "./Pages"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function RouteWithLayout({ Layout, Component, ...rest }) {
  return (
    <Layout {...rest}>
      <Component {...rest} />
    </Layout>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route
            path="/"
            element={
              <RouteWithLayout Layout={LoginLayout} Component={Login} />
            }
          />
          <Route
            path="/overview"
            element={
              <RouteWithLayout Layout={DasboardLayout} Component={Overview} />
            }
          />
          <Route
            path="/overview-details"
            element={
              <RouteWithLayout Layout={DetailsLayout} Component={OverviewDetails} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
