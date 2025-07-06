"use client";

import { useEffect, useRef } from "react";

export default function Webcam() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    async function startWebcam() {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    }
    startWebcam();
  }, []);

  const captureWebcam = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">📸 Webcam Fun</h2>
      <video ref={videoRef} autoPlay playsInline className="mx-auto border" />
      <button onClick={captureWebcam} className="block mx-auto my-4 bg-blue-600 text-white px-4 py-2 rounded">
        Capture
      </button>
      <canvas ref={canvasRef} width="640" height="480" className="mx-auto border" />
    </>
  );
}
