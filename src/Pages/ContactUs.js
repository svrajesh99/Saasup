import React, { Fragment } from "react";
import { ContactForm } from "../Components/ContactUs/ContactForm";
import { FreqQuestions } from "../Components/ContactUs/FreqQuestions";
import { Footer } from "../Layouts/Footer";

export const ContactUs = () => {
  return (
    <Fragment>
      <ContactForm />
      <FreqQuestions />
      <Footer />
    </Fragment>
  );
};
