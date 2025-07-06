"use client";

import { useState } from "react";

export default function LiveDetect() {
  const [text, setText] = useState("");

  const handleDetect = () => {
    // This is a placeholder for live AI detection
    alert("Live AI detection feature coming soon!");
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">🤖 Live AI Detection</h2>
      <textarea
        className="w-full p-2 border rounded mb-4"
        rows={6}
        placeholder="Paste text here..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        onClick={handleDetect}
        className="bg-purple-600 text-white px-4 py-2 rounded"
      >
        Detect
      </button>
    </>
  );
}
