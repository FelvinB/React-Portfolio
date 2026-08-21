import "@/styles/global.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from "@/pages/Serv";
import Articles from "@/pages/Art";
import Works from "@/pages/Works";
import Contact from "@/pages/Contact";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Services" element={<Services />} />
      <Route path="/Articles" element={<Articles />} />
      <Route path="/Works" element={<Works />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
)