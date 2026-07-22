import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import SinglePost from "./pages/SinglePost";

/**
 * Main Application Component
 * 
 * Sets up the routing configuration for the entire application using react-router-dom.
 * Wraps all pages within a common Layout component which includes the Navbar and Footer.
 */
function App() {
  return (
    <>
      <Routes>
        {/* 
          The Layout component acts as a wrapper for all child routes. 
          It renders the shared Navbar, Footer, and handles global animations.
        */}
        <Route path="/" element={<Layout />}>
          {/* Index route renders the Home page at the root path "/" */}
          <Route index element={<Home />} />
          
          {/* Main section routes */}
          <Route path="about" element={<About />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="services" element={<Services />} />
          
          {/* Individual blog post route */}
          <Route path="single-post" element={<SinglePost />} />
        </Route>
      </Routes>
      <Analytics />
    </>
  );
}

export default App;
