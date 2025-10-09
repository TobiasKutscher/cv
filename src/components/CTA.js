import React from 'react';
import CoolCTAButton from '../components/CoolCTAButton'

const ContactCTA = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white text-black">
      <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
      <p className="text-lg text-gray-600 mb-6 text-center max-w-2xl">
        Want to chat? Just shoot me a dm with a direct question on Linkedin and I'll respond whenever I can.
      </p>
      <CoolCTAButton />
    </div>
  );
};

export default ContactCTA;