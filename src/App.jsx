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
      </Routes>
    </Router>
  );
}

export default App;
