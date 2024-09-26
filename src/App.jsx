// App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./component/layout/AppLayout";
import Home from "./pages/Home";
import About from "./pages/page/AboutUS";
import Faq from "./pages/page/Faq";
import Team from "./pages/page/Team";
import TeamDetails from "./pages/page/TeamDetails";
import Testimonial from "./pages/page/Testimonial";
import Services from "./pages/page/Services";
import CommingSoon from "./pages/page/CommingSoon";
import UnderMaintenance from "./pages/page/UnderMaintenance";
import OurMenu1 from "./pages/page/OurMenu1";
import OurMenu2 from "./pages/page/OurMenu2";
import OurMenu3 from "./pages/page/OurMenu3";
import OurMenu4 from "./pages/page/OurMenu4";
import OurMenu5 from "./pages/page/OurMenu5";

function App() {
  return (
    <Router>
      <Routes>
        {/* Wrap pages inside the Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/about-us" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team-details/:id" element={<TeamDetails />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/services" element={<Services />} />
        <Route path="/coming-soon" element={<CommingSoon />} />
        <Route path="/under-maintenance" element={<UnderMaintenance />} />
        <Route path="/our-menu-1" element={<OurMenu1 />} />
        <Route path="/our-menu-2" element={<OurMenu2 />} />
        <Route path="/our-menu-3" element={<OurMenu3 />} />
        <Route path="/our-menu-4" element={<OurMenu4 />} />
        <Route path="/our-menu-5" element={<OurMenu5 />} />
      </Routes>
    </Router>
  );
}

export default App;
