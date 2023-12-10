import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import FirstAccess from "pages/FirstAccess";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Rola a página para o topo quando a rota muda
  }, [pathname]);

  return null;
}

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path='/home'
            element={<Home pageId='homePage' />}
          >
            <Route
              index
              element={<Home />}
            />
          </Route>
          <Route
            path='/login'
            element={<FirstAccess pageId='loginPage' />}
          />
          {/* <Route
            path='/other'
            element={<Other />}
          /> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
}
