import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

import { supabase } from "@/lib/supabase/client";

const Form = () => {
  const [submit, setSubmit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(false);

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmit(!submit);
    setName("");
    setEmail("");
    setPhoneno("");
    setMessage("");

    // Display a success notification
    setModal(true);

    //Submit data to supabase
    try {
      const { error } = await supabase.from("contact-form").insert({
        name: name,
        email: email,
        phoneno: phoneno,
        message: message,
      });
      console.log(error);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setMessage(event.target.value);
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handlePhoneno = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneno(event.target.value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div className="mt-28  px-5 md:px-48">
      <div className="flex flex-col rounded-3xl bg-[#0b5db0] px-10 py-20 md:px-48">
        <h1 className="text-center text-[30px]  font-bold  text-white opacity-100">
          Get in touch with us
        </h1>
        <form className="flex flex-col" method="post" onSubmit={submitForm}>
          <span className="mb-2 mt-5">Name</span>
          <input
            className="rounded-md border border-[#538ec8] bg-transparent p-3 outline-none transition duration-300 focus:border-gray-300 "
            onChange={handleNameChange}
            id="name"
            required
            type="text"
            value={name}
          ></input>
          <span className="mb-2 mt-5">Email</span>
          <input
            className="rounded-md border border-[#538ec8] bg-transparent p-3 outline-none transition duration-300 focus:border-gray-300"
            onChange={handleEmailChange}
            id="email"
            type="email"
            required
            value={email}
          ></input>
          <span className="mb-2 mt-5">Phone number</span>
          <input
            className="rounded-md border border-[#538ec8] bg-transparent p-3 outline-none transition duration-300 focus:border-gray-300 "
            onChange={handlePhoneno}
            id="phoneno"
            type="text"
            value={phoneno}
          ></input>
          <span className="mb-2 mt-5">Message</span>
          <textarea
            className="rounded-md border border-[#538ec8] bg-transparent p-3 outline-none transition duration-300 focus:border-gray-300"
            onChange={handleMessageChange}
            value={message}
            id="message"
            required
          ></textarea>
          <button
            type="submit"
            className="mt-10 w-full rounded-md bg-white p-3 text-black"
          >
            Submit
          </button>
        </form>
        {modal ? (
          <AnimatePresence mode="popLayout" presenceAffectsLayout>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModal(false)}
              className="fixed inset-0 z-50 grid cursor-pointer place-items-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur"
            >
              <motion.div
                initial={{ scale: 0, rotate: "12.5deg" }}
                animate={{ scale: 1, rotate: "0deg" }}
                exit={{ scale: 0, rotate: "0deg" }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-lg cursor-default overflow-hidden rounded-lg bg-gradient-to-br from-[#0b5db0] to-[#538ec8] p-6 text-white shadow-xl"
              >
                <FiCheckCircle className="absolute -left-24 -top-24 z-0 rotate-12 text-[250px] text-white/10" />
                <div className="relative z-10">
                  <div className="mx-auto mb-2 grid h-16 w-16 place-items-center rounded-full bg-white text-3xl text-[#0b5db0]">
                    <FiCheckCircle />
                  </div>
                  <h3 className="mb-2 text-center text-3xl font-bold">
                    Message Sent Succesfully
                  </h3>
                  <p className="mb-6 text-center">
                    We will reply back via mail in 1-2 business days!
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setModal(false)}
                      className="w-full rounded bg-white py-2 font-semibold text-[#1b1b1b] transition-opacity hover:opacity-90"
                    >
                      Understood!
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Form;
