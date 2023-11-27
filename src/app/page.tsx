"use client";

import { submit } from "@/actions/contact";
import { FormEvent, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

const Form = () => {
  const [formMessage, formAction] = useFormState(submit, null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  if (formMessage == "success")
    return (
      <>
        <div className="text-lg text-center">
          Thank you for contact the Network X Group. One of our team members
          will be on contact with you shortly
        </div>
      </>
    );

  return (
    <>
      <form className="contact-personal-form a-ajax-form" action={formAction}>
        {formMessage ? <div className="text-red-500">{formMessage}</div> : null}
        <div className="form-group form-group-material a-form-group">
          <label className="label">Full name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-group form-group-material a-form-group">
          <label className="label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group form-group-material a-form-group">
          <label className="label">Company</label>
          <select
            className="form-control"
            name="company"
            onChange={(e) => setCompany(e.target.value)}
            value={company}
            required
          >
            <option value="">&nbsp;</option>
            <option value="network-x">Network X</option>
            <option value="nxd">NxD</option>
            <option value="mettlestate">Mettlestate</option>
            <option value="lucky-hustle">Lucky Hustle</option>
            <option value="strat-farm">The Strat Farm</option>
            <option value="kasi-kulcha">Kasi Kulcha</option>
            <option value="more">More than one...</option>
          </select>
        </div>
        <div className="form-group form-group-material a-form-group">
          <label className="label">Message</label>
          <textarea
            className="form-control"
            name="message"
            cols={30}
            rows={3}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          ></textarea>
        </div>
        {/* <!-- <div className="form-group control-file a-file">
                        <input type="file" name="file_attach[]" multiple />
                        <div className="file-path-wrapper">
                          <i className="lni lni-paperclip text-primary"></i>
                          <input
                            className="file-path form-control"
                            placeholder="Add Attachment(.doc;.pdf)"
                          />
                        </div>
                      </div> -->
                      <!-- <div className="message text-success success-message">
                        Your message is successfully sent...
                      </div>
                      <div className="message text-danger error-message">
                        Sorry something went wrong
                      </div> --> */}
        <div className="control-btn">
          <button className="btn btn-success" type="submit">
            Send message
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
