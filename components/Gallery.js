"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://yeholyfgbqrekhoytrto.supabase.co'; // Replace with your URL
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'; // Replace with your anon key
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const { data, error } = await supabase
        .from("uploads")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error) setImages(data);
    }
    fetchImages();
  }, []);

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">🖼️ Zwanski Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {images.map(({ image_url, id }) => (
          <img
            key={id}
            src={image_url}
            alt="Uploaded"
            className="w-full h-auto rounded shadow"
          />
        ))}
      </div>
    </>
  );
}
