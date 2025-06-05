import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-black text-white p-4 flex justify-between items-center">
    <img src="/logo.png" alt="Arkeye Logo" className="h-10" />
    <div className="space-x-4">
      <Link to="/" className="hover:text-teal-400">Home</Link>
      <Link to="/services" className="hover:text-teal-400">Services</Link>
      <Link to="/about" className="hover:text-teal-400">About</Link>
      <Link to="/compliance" className="hover:text-teal-400">Compliance</Link>
      <Link to="/gallery" className="hover:text-teal-400">Gallery</Link>
      <Link to="/contact" className="hover:text-teal-400">Contact</Link>
    </div>
  </nav>
);

const Home = () => (
  <div className="text-white bg-gray-900 min-h-screen p-10">
    <h1 className="text-4xl font-bold mb-4">On-Site Testing & Inspection You Can Trust</h1>
    <p className="text-lg text-gray-300">Visual weld inspections and proof load testing to Australian Standards. Based in Avondale Heights, servicing Victoria.</p>
  </div>
);

const Services = () => (
  <div className="text-white bg-gray-900 min-h-screen p-10">
    <h2 className="text-3xl font-bold mb-4">Services</h2>
    <ul className="list-disc list-inside text-gray-300">
      <li>Visual Weld Inspections (AS 1554.1 & Part 6)</li>
      <li>Proof Load Testing of Anchors & Rebar (AS 5216, AS 3850.1, AS/NZS 5131)</li>
      <li>On-site testing services with calibrated equipment</li>
    </ul>
  </div>
);

const About = () => (
  <div className="text-white bg-gray-900 min-h-screen p-10">
    <h2 className="text-3xl font-bold mb-4">About Arkeye</h2>
    <p className="text-gray-300">With 22 years of experience in weld inspection and 10 years in proof load testing, Arkeye is led by Joe Filipovic, a certified welding supervisor and international welding inspector. NATA accreditation is in progress.</p>
  </div>
);

const Compliance = () => (
  <div className="text-white bg-gray-900 min-h-screen p-10">
    <h2 className="text-3xl font-bold mb-4">Compliance</h2>
    <p className="text-gray-300 mb-2">Equipment: Hydrajaw 2008 (Serial T6572), calibrated until 19/05/2026 by Hydrajaw Pty Ltd.</p>
    <p className="text-gray-300">Working toward ISO/IEC 17020 and ISO/IEC 17025 accreditation with NATA.</p>
  </div>
);

const Gallery = () => (
  <div className="text-white bg-gray-900 min-h-screen p-10">
    <h2 className="text-3xl font-bold mb-4">Gallery</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[...Array(9).keys()].map(i => (
        <img key={i} src={`/gallery/img${i+1}.jpeg`} alt={`Gallery ${i+1}`} className="rounded-lg shadow-md" />
      ))}
    </div>
  </div>
);

const Contact = () => (
  <div className="text-white bg-gray-900 min-h-screen p-10">
    <h2 className="text-3xl font-bold mb-4">Contact</h2>
    <p className="text-gray-300">Email: joe@arkeye.com.au</p>
    <p className="text-gray-300">Phone: 0404 042 071</p>
    <p className="text-gray-300">Address: 16 Barbara Crescent, Avondale Heights, VIC 3034</p>
  </div>
);

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
