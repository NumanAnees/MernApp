import React from "react";
import Card from "./card";
const contact = () => {
  return (
    <>
      <div className="cards">
        <div className="card-demo">
          <Card name="phone" data="03310310444" />
        </div>
        <div className="card-demo">
          <Card name="email" data="demo@gmail.com"></Card>
        </div>
        <div className="card-demo">
          <Card name="work" data="web dev"></Card>
        </div>
      </div>
      <div className="container">
        <form id="contact" action="" method="post">
          <h3>Contact Form</h3>
          <h4>Contact us for custom quote</h4>
          <fieldset>
            <input
              placeholder="Your name"
              type="text"
              tabindex="1"
              required
              autofocus
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Email Address"
              type="email"
              tabindex="2"
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Phone Number (optional)"
              type="tel"
              tabindex="3"
              required
            />
          </fieldset>
          <fieldset>
            <input
              placeholder="Your Web Site (optional)"
              type="url"
              tabindex="4"
              required
            />
          </fieldset>
          <fieldset>
            <textarea
              placeholder="Type your message here...."
              tabindex="5"
              required
            ></textarea>
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default contact;
