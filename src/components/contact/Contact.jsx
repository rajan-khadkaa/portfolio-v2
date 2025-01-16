import React, { useState } from "react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello ${email.split("@")[0]}! \n\n I got your message.`);
  };

  return (
    <section id="contact" className="flex w-full flex-col gap-3 pt-16">
      <h3 className="text-2xl font-semibold text-txt-primary">Contact me</h3>
      <div className="flex flex-col gap-3 w-full ">
        <form
          className="flex flex-col items-start gap-4 w-full"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-1  w-full">
            <label
              className="text-xs font-semibold text-txt-secondary"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="py-2 px-3 text-sm bg-white text-txt-primary rounded-md w-full max-w-[450px] placeholder:text-txt-placeholder border-2 border-bdr-opt outline-none focus:border-txt-highlight"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="johndoe@gmail.com"
              type="email"
            />
          </div>
          <div className="flex w-full  flex-col gap-1">
            <label
              className="text-xs font-semibold text-txt-secondary"
              htmlFor="email"
            >
              Message
            </label>
            <textarea
              value={message}
              className="py-2  px-3 text-sm bg-white text-txt-primary rounded-md w-full max-w-[450px] placeholder:text-txt-placeholder border-2 border-bdr-opt outline-none focus:border-txt-highlight min-h-[100px] max-h-[100px] resize-none"
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Say anything!"
              type="text"
            />
          </div>
          <button
            className="flex gap-2 items-center py-2 px-4 bg-btn-cta rounded-md text-txt-cta text-sm"
            type="submit"
          >
            <span>Send Message</span>
            <PaperAirplaneIcon className="-rotate-45 size-4" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
