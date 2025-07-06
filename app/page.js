export default function Home() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1 className="text-4xl font-bold text-indigo-600">Zwanski Playground</h1>
      <p className="mt-4 text-gray-700">Your full-feature playground is working! 🎉</p>
    </div>
  );
}

import Header from '../components/Header';
import Footer from '../components/Footer';
import UploadWidget from '../components/UploadWidget';
import Gallery from '../components/Gallery';
import MemeGenerator from '../components/MemeGenerator';
import Webcam from '../components/Webcam';
import LiveDetect from '../components/LiveDetect';
import StudentLab from '../components/StudentLab';
import Services from '../components/Services';

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-4">
        <section id="upload" className="py-12 border-t text-center">
          <UploadWidget />
        </section>
        <section id="gallery" className="py-12 border-t text-center">
          <Gallery />
        </section>
        <section id="meme" className="py-12 border-t text-center">
          <MemeGenerator />
        </section>
        <section id="webcam" className="py-12 border-t text-center">
          <Webcam />
        </section>
        <section id="live-detect" className="py-12 border-t text-center">
          <LiveDetect />
        </section>
        <section id="student-lab" className="py-12 border-t text-center">
          <StudentLab />
        </section>
        <section id="services" className="py-12 border-t text-center">
          <Services />
        </section>
      </main>
      <Footer />
    </>
  );
}
