import axios from "axios";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const BYOBForm = () => {
  const [submit, setSubmit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(false);

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmit(!submit);
    setName("");
    setEmail("");
    setMessage("");

    // Display a success notification
    setModal(true);

    try {
      const formData = new FormData(event.currentTarget);
      await axios.post(
        "https://docs.google.com/forms/d/e/1FAIpQLSclwYY82omVPakn095Sp5MRviBvA6uNENA1TIoyoFdUB4ZkGg/formResponse",
        formData,
      );

      // Handle successful response if needed
    } catch (error: any) {
      console.error("Error:", error.message);
    }
  };

  const handleMessageChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setMessage(event.target.value);
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  return (
    <div className="mt-28  px-5 md:px-48">
      <div className="border-card-dark flex flex-col rounded-3xl border px-10 py-20 md:px-48">
        <h1 className="header text-center text-[30px]  font-bold  text-white opacity-100">
          Submit your task
        </h1>
        <div
          className="absolute inset-20 mx-auto h-80 max-w-md blur-[118px] sm:h-72"
          style={{
            background:
              "linear-gradient(152.92deg, rgba(255, 0, 0, 0.2) 0%, #3e7137 20%, rgba(0, 255, 0, 0.2) 20%)",
          }}
        ></div>
        <form
          className="flex flex-col"
          method="post"
          onSubmit={submitForm}
          action="https://docs.google.com/forms/d/e/1FAIpQLSclwYY82omVPakn095Sp5MRviBvA6uNENA1TIoyoFdUB4ZkGg/formResponse"
        >
          <span className="header mb-2 mt-5">Name</span>
          <input
            className="border-card-dark rounded-md border bg-transparent p-3 outline-none transition duration-300 focus:border-gray-300 "
            onChange={handleNameChange}
            id="name"
            required
            name="entry.1716257811"
            type="text"
            value={name}
          ></input>
          <span className="header mb-2 mt-5">Phone Number</span>
          <input
            className="border-card-dark rounded-md border bg-transparent p-3 outline-none transition duration-300 focus:border-gray-300"
            onChange={handleEmailChange}
            id="email"
            type="text"
            required
            name="entry.1069938384"
            value={email}
          ></input>
          <span className="header mb-2 mt-5">Website Link</span>
          <textarea
            className="border-card-dark rounded-md border bg-transparent p-3 outline-none transition duration-300 focus:border-gray-300"
            onChange={handleMessageChange}
            value={message}
            name="entry.763171444"
            id="message"
            required
          ></textarea>
          <button
            type="submit"
            className="header mt-10 w-full rounded-md bg-white p-3 text-black"
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
                className="relative w-full max-w-lg cursor-default overflow-hidden rounded-lg bg-gradient-to-br from-[#132114] to-[#3e7137] p-6 text-white shadow-xl"
              >
                <FiCheckCircle className="absolute -left-24 -top-24 z-0 rotate-12 text-[250px] text-white/10" />
                <div className="relative z-10">
                  <div className="mx-auto mb-2 grid h-16 w-16 place-items-center rounded-full bg-white text-3xl text-[#3e7137]">
                    <FiCheckCircle />
                  </div>
                  <h3 className="mb-2 text-center text-3xl font-bold">
                    Your task has been submitted!
                  </h3>
                  <p className="mb-6 text-center">
                    You will get to know results soon! :)
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

export default BYOBForm;
