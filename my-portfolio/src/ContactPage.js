import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000/ContactPage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    // <div className="Contactformcont">
    <form onSubmit={handleSubmit} className="Contactformcont">
      
        <div>
        <label htmlFor="name">Name:</label>
        <input name="name" type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input name="email" type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" required />
      </div>
      
      <button type="submit">{status}</button>
      
    </form>
    // </div>
  );
};

export default ContactPage;
