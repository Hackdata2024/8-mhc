import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Screens
import Landing from "./screens/Landing.jsx";
import { CrispProvider } from "./components/crisp-provider.jsx";
import AboutUs from "./components/Sections/AboutUs.jsx";
import Blog from "./components/Blog/Blog.jsx";

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Arimo&family=Questrial&display=swap"
          rel="stylesheet"
        />
        <title>Period Pixie</title>
      </Helmet>
      <CrispProvider />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
