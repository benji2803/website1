// Contact.js - Contact Form
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form name="contact" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>Name: <input type="text" name="name" required /></label>
        </p>
        <p>
          <label>Email: <input type="email" name="email" required /></label>
        </p>
        <p>
          <label>Message: <textarea name="message" required></textarea></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </section>
  );
};

export default Contact;
