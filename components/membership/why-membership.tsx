import React from 'react';
import Image from 'next/image';

const WhyMembership = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-black p-6 text-white">
      <h1 className="mb-8 text-center text-5xl font-extrabold tracking-wide">Why Membership?</h1>
      <div className="flex w-full flex-row items-center space-x-8">
        {/* Paragraph on the left */}
        <p className="flex-1 text-lg leading-relaxed text-gray-400">
          As an E-Cell member, you&apos;ll have the unique opportunity to engage in one-on-one or group discussions with accomplished entrepreneurs from various industries. These interactions can take the form of informal chats, Q&A sessions, or structured mentorship meetings. To further enrich your experience, we will arrange seminars featuring successful entrepreneurs who will share their insights and experiences. You&apos;ll gain invaluable knowledge about their journeys, the challenges they faced, and effective strategies for success. This is not just an opportunity to seek advice; it&apos;s a chance to build meaningful connections that can inspire and guide your own entrepreneurial path. Whether you&apos;re seeking guidance on starting your own venture or looking for inspiration, these conversations and seminars will provide a wealth of knowledge and motivation.
        </p>
        {/* Image on the right */}
        <div className="shrink-0">
          <Image
            src="https://i0.wp.com/florencerotary.org/wp-content/uploads/2020/02/Membership.jpg?fit=800%2C600&ssl=1"
            alt="why membership"
            width={500}
            height={300}
            className="rounded-xl" 
          />
        </div>
      </div>
    </div>
  );
};

export default WhyMembership;
