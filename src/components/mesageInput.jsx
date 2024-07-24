import React from "react";

const MessageInput = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor="message"
      >
        Message
      </label>
      <textarea
        id="message"
        value={value}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="Your Message"
        rows="5"
      />
    </div>
  );
};

export default MessageInput;
