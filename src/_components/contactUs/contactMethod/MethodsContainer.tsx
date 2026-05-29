"use client";

import { useState } from "react";
import Calendar from "./Calendar";
import ContactForm from "./Form/Form";
import CallOrMail from "./CallOrMail";

const MethodsContainer = () => {
  const [bookCall, setBookCall] = useState(false);
  const [fillForm, setFillForm] = useState(false);

  if (bookCall) {
    return <Calendar setBookCall={setBookCall} />;
  }
  if (fillForm) {
    return <ContactForm setFillForm={setFillForm} />;
  }

  return <CallOrMail setBookCall={setBookCall} setFillForm={setFillForm} />;
};

export default MethodsContainer;
