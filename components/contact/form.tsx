import axios from "axios";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const Form = () => {
  const [submit, setSubmit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(false);

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission

    // Your existing logic for handling form submission goes here
    setSubmit(!submit);
    setName("");
    setEmail("");
    setMessage("");

    // Display a success notification
    setModal(true);

    try {
      const formData = new FormData(event.currentTarget);
      await axios.post(
        "https://docs.google.com/forms/d/e/1FAIpQLScrj1aCe0gyu4rK3Jf7DgUMxfxvrh2r4ZhXG1abP3bJPmEhgQ/formResponse",
        formData
      );

      // Handle successful response if needed
    } catch (error: any) {
      console.error("Error:", error.message);
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
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  return (
    <div className="px-5 md:px-28 mt-20">
      <div className="flex flex-col bg-[#1b1b1b] px-5 md:px-32 py-5 rounded-lg">
        <h1 className="text-center font-bold header  text-[30px]  opacity-100 text-white">
          Get in touch with us
        </h1>
        <form className="flex flex-col" method="post" onSubmit={submitForm}>
          <span className="mt-5 mb-2">Name</span>
          <input
            className="rounded-md bg-transparent border border-gray-500 focus:border-gray-300 outline-none transition duration-300 p-3 "
            onChange={handleNameChange}
            id="name"
            required
            type="text"
            value={name}
          ></input>
          <span className="mt-5 mb-2">Email</span>
          <input
            className="rounded-md bg-transparent border border-gray-500 focus:border-gray-300 outline-none transition duration-300 p-3"
            onChange={handleEmailChange}
            id="email"
            type="email"
            required
            value={email}
          ></input>
          <span className="mt-5 mb-2">Message</span>
          <textarea
            className="rounded-md bg-transparent border border-gray-500 focus:border-gray-300 outline-none transition duration-300 p-3"
            onChange={handleMessageChange}
            value={message}
            id="message"
            required
          ></textarea>
          <button className="mt-10 bg-white text-black rounded-md p-3 w-full ">
            Submit
          </button>
        </form>
        {modal ? (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModal(false)}
              className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
            >
              <motion.div
                initial={{ scale: 0, rotate: "12.5deg" }}
                animate={{ scale: 1, rotate: "0deg" }}
                exit={{ scale: 0, rotate: "0deg" }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gradient-to-br from-[#1b1b1b] to-[#1b1b1b] text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
              >
                <FiCheckCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
                <div className="relative z-10">
                  <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-[#1b1b1b] grid place-items-center mx-auto">
                    <FiCheckCircle />
                  </div>
                  <h3 className="text-3xl font-bold text-center mb-2">
                    Message Sent Succesfully
                  </h3>
                  <p className="text-center mb-6">
                    We will reply back via mail in 1-2 business days!
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setModal(false)}
                      className="bg-white hover:opacity-90 transition-opacity text-[#1b1b1b] font-semibold w-full py-2 rounded"
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
