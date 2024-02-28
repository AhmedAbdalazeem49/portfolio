import { ValidationError, useForm } from "@formspree/react";
import Lotti from "lottie-react";
import contactAnimation from "../../animation/contact.json";
import doneAnimation from "../../animation/done.json";
import "./contact.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("xjvnrraq");
  return (
    <section className="contact-us" id="contact">
      <h1 className="title">
        <span className="icon-email"></span> Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>
      <div className="bigBox">
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              autoComplete="off"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label htmlFor="message">Your Message:</label>
            <textarea name="message" required id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
          {state.succeeded && (
            <div className="successMessage">
              <Lotti
                loop={false}
                animationData={doneAnimation}
                className="lotti"
              />
              <span>Your Message has been sent successfully.</span>
            </div>
          )}
        </form>
        <div>
          <Lotti
            animationData={contactAnimation}
            className="contact-animation"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
