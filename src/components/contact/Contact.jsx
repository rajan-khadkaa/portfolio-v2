import React, { useState, useRef } from "react";
import {
  PaperAirplaneIcon,
  ClipboardIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline";
import emailjs from "@emailjs/browser";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const form = useRef();

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const replyTemplateId = import.meta.env.VITE_REPLY_TEMPLATE_ID;

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`Hello ${email.split("@")[0]}! \n\n I got your message.`);
    // const sendEmail = () => {};
    if (!email.trim()) return alert("Invalid email");
    if (!message.trim()) return alert("Please enter your message");

    emailjs
      .sendForm(serviceId, templateId, form.current, { publicKey: publicKey })
      .then(
        () => {
          alert("Message sent!");
        },
        (error) => {
          console.log("Error: ", error.text);
          alert("Something went wrong. Send again.");
        }
      )
      .then(
        emailjs
          .sendForm(serviceId, replyTemplateId, form.current, {
            publicKey: publicKey,
          })
          .then(
            () => {
              console.log("Replied to user as well.");
              setEmail("");
              setMessage("");
            },
            (error) => {
              console.log("Error replying back.", error.text);
            }
          )
      );
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("rajankhadkaa0809@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <section id="contact" className="flex w-full flex-col gap-3 pt-16">
      <h3 className="text-2xl font-semibold text-txt-primary">Contact me</h3>
      <div className="flex flex-col gap-3 w-full ">
        <form
          ref={form}
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
              name="user_email"
              onChange={(event) => setEmail(event.target.value)}
              placeholder="youremail@gmail.com"
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
              name="message"
              className="py-2  px-3 text-sm bg-white text-txt-primary rounded-md w-full max-w-[450px] placeholder:text-txt-placeholder border-2 border-bdr-opt outline-none focus:border-txt-highlight min-h-[100px] max-h-[100px] resize-none"
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Say anything!"
              type="text"
            />
          </div>
          <div className="flex h-full gap-2 items-center">
            <button
              className="flex gap-2 items-center py-[10px] px-4 bg-btn-cta rounded-md text-txt-cta text-sm hover:bg-[#144bc2] hover:border-[#144bc2]"
              type="submit"
            >
              <span>Send Message</span>
              <PaperAirplaneIcon className="-rotate-45 size-4" />
            </button>
            <span className="w-[1px] h-[20px] bg-txt-placeholder"></span>
            <button
              className={`flex gap-2 items-center py-[10px] px-4 rounded-md text-sm ${
                copied
                  ? "bg-[#2463eb] bg-opacity-20 text-btn-cta"
                  : "bg-btn-opt text-txt-secondary hover:text-btn-cta"
              }`}
              type="button"
              onClick={handleCopy}
            >
              <span>{`${copied ? "Email Copied!" : "Copy My Email"} `}</span>
              {copied ? (
                <DocumentCheckIcon className="size-4" />
              ) : (
                <ClipboardIcon className="size-4" />
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
