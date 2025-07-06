<<<<<<< HEAD
# zwanski-playground
A free AI-powered playground built with Cloudinary, TensorFlow, Supabase, and more – for students, creators, and ZwanskiTech fans to explore OCR, object detection, QR code generation, webcam tools, and more.
=======
# Zwanski Playground

Welcome to **Zwanski Playground** — a free, fun, and interactive web playground built with Cloudinary, Supabase, Tailwind CSS, and TensorFlow.js for AI-powered features.

---

## Features

### ✅ Image Upload & Gallery
- Upload images easily using **Cloudinary's upload widget**
- Images are saved securely to **Cloudinary** and metadata saved to **Supabase**
- Real-time gallery displaying recent community uploads

### ✅ AI & Computer Vision
- Live object & body part detection using **TensorFlow.js COCO-SSD**
- OCR (image-to-text) using **Tesseract.js**
- QR code generation for any text input

### ✅ Fun & Educational
- Webcam support for selfies and filters (planned)
- Student Lab section for interactive learning tools (planned)
- Voice-to-text and other AI-powered utilities (planned)

---

## Tech Stack

- **Cloudinary**: Media storage and manipulation
- **Supabase**: Backend database & real-time storage
- **Tailwind CSS**: Styling and responsive UI
- **TensorFlow.js**: AI and object detection
- **Tesseract.js**: OCR (optical character recognition)
- **QRCode.js**: QR code generation
- **Vercel**: Hosting & deployment

---

## Setup & Deployment

1. Clone this repository
2. Create a free [Supabase](https://supabase.com) project
3. Create a table `uploads` with columns:
   - `id` (UUID, primary key)
   - `image_url` (text)
   - `created_at` (timestamp, default `now()`)
4. Enable Row Level Security with insert/select policies for `uploads`
5. Update `index.html` with your Supabase project URL and anon key
6. Deploy on Vercel or any static hosting platform
7. Connect your custom domain via DNS (Amazon Route 53 example provided)

---

## Future Plans

- **User Authentication** with Supabase Auth for upload ownership
- **Comments & Likes** on uploaded images
- Full **Next.js + Tailwind + Supabase** app for scalability
- Add **voice-to-text** and **webcam filters**
- Student accounts and project saving functionality
- API integration for services like IMEI checks and device unlock

---

## Contributing

Feel free to submit issues and pull requests!  
This project is open-source and welcomes contributions.

---

## License

This project is licensed under the MIT License.

---

Made with ❤️ by [Zwanski.org](https://zwanski.org)
>>>>>>> 35433a8 (Initial commit with Cloudinary and Supabase integration)
