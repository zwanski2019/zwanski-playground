"use client";

import { createClient } from '@supabase/supabase-js';
import { useEffect } from 'react';

const supabaseUrl = 'https://yeholyfgbqrekhoytrto.supabase.co'; // Replace with your URL
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'; // Replace with your anon key
const supabase = createClient(supabaseUrl, supabaseKey);

export default function UploadWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://upload-widget.cloudinary.com/global/all.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openWidget = () => {
    if (!window.cloudinary) return alert("Cloudinary widget not loaded yet");

    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'dzi1xpa0v',
        uploadPreset: 'zwanski_upload',
        folder: 'zwanski-playground',
        sources: ['local', 'url', 'camera']
      },
      async (error, result) => {
        if (!error && result && result.event === "success") {
          const imageUrl = result.info.secure_url;
          alert("Uploaded! Saved to gallery.");
          await supabase.from('uploads').insert([{ image_url: imageUrl }]);
        }
      }
    );

    widget.open();
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">📤 Cloudinary Image Upload</h2>
      <p className="text-gray-600 mb-4">Upload your images securely to Cloudinary and save to Supabase</p>
      <button onClick={openWidget} className="bg-indigo-600 text-white px-4 py-2 rounded">
        Upload Image
      </button>
    </>
  );
}
