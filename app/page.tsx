import LoadingScreen from "@/components/ui/LoadingScreen";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Certifications from "@/components/sections/Certifications";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="relative min-h-screen bg-[#0a0a0f] overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
