"use client";
import { motion } from 'framer-motion';
import Image from 'next/image'; // Import the Image component

const StorySect1 = () => {
  return (
    <section className="bg-black py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Image
              src="/assets/GB/abid.png" // Replace with your image path
              alt="Person story"
              className="rounded-lg shadow-lg"
              layout="responsive" // Optional: Adjust as needed
              width={500} // Set your desired width
              height={300} // Set your desired height
            />
            <p className="absolute bottom-4 left-4 text-xs text-white">
              From the desk of [name] <br />
              The E-Cell, MJCET <br />
              February 2024
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold leading-tight md:text-4xl">
              `The way to get started is to quit talking and begin doing.` – Walt Disney
            </h2>
            <br />
            <p className="text-sm leading-relaxed">
              <strong>Entrepreneurs, listen up!</strong><br />
              In the heart of Mufakkam Jah College of Engineering and Technology lies a vibrant hub for aspiring innovators.
            </p>
            <p className="text-sm leading-relaxed">
              A space where dreams ignite and ideas flourish...<br />
              Where you can turn your passion into profit!
            </p>
            <p className="text-sm leading-relaxed">
              Join our Entrepreneurship Cell—a gateway to unparalleled opportunities.<br />
              Connect with like-minded peers, seasoned mentors, and access resources to launch your journey.
            </p>
            <p className="text-sm leading-relaxed">
              Ready to transform your ideas into reality? 
            </p>
            <div>
              <button className="rounded-lg bg-blue-600 px-8 py-3 font-bold text-white shadow-md transition duration-300">
                YES! GIVE ME ACCESS NOW
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySect1;
