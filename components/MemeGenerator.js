"use client";

import { useRef, useState } from "react";

export default function MemeGenerator() {
  const canvasRef = useRef(null);
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const generateMeme = () => {
    if (!imageFile) return alert("Please upload an image first");
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    const reader = new FileReader();

    reader.onload = e => {
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);

        ctx.font = "40px Impact";
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.textAlign = "center";

        ctx.fillText(topText, canvas.width / 2, 50);
        ctx.strokeText(topText, canvas.width / 2, 50);

        ctx.fillText(bottomText, canvas.width / 2, canvas.height - 20);
        ctx.strokeText(bottomText, canvas.width / 2, canvas.height - 20);
      };
      img.src = e.target.result;
    };

    reader.readAsDataURL(imageFile);
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">🖍️ Meme Generator</h2>
      <input
        type="file"
        accept="image/*"
        onChange={e => setImageFile(e.target.files[0])}
        className="mb-4"
      />
      <div>
        <input
          type="text"
          placeholder="Top Text"
          value={topText}
          onChange={e => setTopText(e.target.value)}
          className="border rounded p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Bottom Text"
          value={bottomText}
          onChange={e => setBottomText(e.target.value)}
          className="border rounded p-2"
        />
        <button onClick={generateMeme} className="ml-2 bg-green-600 text-white px-4 py-2 rounded">
          Generate
        </button>
      </div>
      <canvas ref={canvasRef} width="400" className="mt-4 mx-auto border"></canvas>
    </>
  );
}
