export default function Header() {
  return (
    <header className="bg-white shadow py-4 mb-8">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-indigo-600">Zwanski Playground</h1>
        <nav>
          <a href="#upload" className="text-gray-700 hover:text-indigo-600 mx-2">Upload</a>
          <a href="#meme" className="text-gray-700 hover:text-green-600 mx-2">Meme Generator</a>
          <a href="#gallery" className="text-gray-700 hover:text-pink-600 mx-2">Gallery</a>
          <a href="#video" className="text-gray-700 hover:text-red-600 mx-2">Video Editor</a>
          <a href="#webcam" className="text-gray-700 hover:text-yellow-600 mx-2">Webcam Fun</a>
          <a href="#live-detect" className="text-gray-700 hover:text-blue-600 mx-2">Live AI Detect</a>
          <a href="#student-lab" className="text-gray-700 hover:text-teal-600 mx-2">Student Lab</a>
          <a href="#services" className="text-gray-700 hover:text-purple-600 mx-2">ZwanskiTech Services</a>
        </nav>
      </div>
    </header>
  );
}
