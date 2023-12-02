import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    //   const form = useRef();
    emailjs
      .sendForm(
        "service_xcc4z5n",
        "template_ivcgn4s",
        form.current,
        "RLiXZxumSv8MADA-D"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="max-w-[500px] mx-auto p-3">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 ">
        <label>Name</label>
        <input type="text" name="from_name" className="text-zinc-700" />
        <label>Email</label>
        <input type="email" name="user_email" className="text-zinc-700" />
        <label>Message</label>
        <textarea name="message" className="text-zinc-700" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
