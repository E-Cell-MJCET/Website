"use client";
import React, {useEffect} from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  // Redirect after 6-7 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('https://forms.gle/sbysJDPsDXdwKjxE7'); // Change to your desired path
    }, 2500); 

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [router]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="space-y-4 rounded-lg p-6 text-center text-white">
        <h1 className="text-4xl font-extrabold tracking-wide sm:text-5xl lg:text-6xl">
          Ready to join the Action ?
        </h1>
        <p className="text-lg sm:text-xl">
          Your spot at Beyond the Bench is loading up!
        </p>
        <div className="mt-6 animate-pulse">
          <span className="text-2xl">⏳</span>
        </div>
      </div>
    </div>
  );
};

export default Page;
