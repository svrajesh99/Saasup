import "./App.css";
import { Fragment } from "react";
import { StyleGuide } from "./Pages/StyleGuide";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { AboutUs } from "./Pages/AboutUs";
import { FeaturesPage } from "./Pages/FeaturesPage";
import { IntegrationPage } from "./Pages/IntegrationPage";
import { IntegrationSinglePage } from "./Pages/IntegrationSinglePage";
import { BlogPage } from "./Pages/BlogPage";
import { BlogSingle } from "./Pages/BlogSingle";
import { PricePage } from "./Pages/PricePage";
import { PriceSingle } from "./Pages/PriceSingle";
import { Careers } from "./Pages/Careers";
import { CareerSingle } from "./Pages/CareerSingle";
import { ContactUs } from "./Pages/ContactUs";
import { PasswordPage } from "./Pages/PasswordPage";
import { Changelog } from "./Pages/Changelog";
import { LicensePage } from "./Pages/LicensePage";
import { Error404 } from "./Pages/Error404";
import { Helmet } from "react-helmet";

function App() {
  return (
    <Fragment>
      <Helmet>
        <title>SaaSup</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet consectetur adipiscing elit interdum ullamcorper sed pharetra sene."
        />
        <meta name="keywords" content="Lorem ipsum dolor" />
      </Helmet>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/style-guide" element={<StyleGuide />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/integration" element={<IntegrationPage />} />
        <Route path="/integration-single" element={<IntegrationSinglePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog-single" element={<BlogSingle />} />
        <Route path="/price" element={<PricePage />} />
        <Route path="/price-single" element={<PriceSingle />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/career-single" element={<CareerSingle />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/error-404" element={<Error404 />} />
        <Route path="/license" element={<LicensePage />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/password" element={<PasswordPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
