import About from "@/components/About";
import HeroSection from "@/components/HeroSection";
import MovingCard from "@/components/MovingCard";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import SkillsEducation from "@/components/SkillsEducation";
import Contact from "@/components/Contact";
// import Footer1 from '@/components/Footer1'

const page = () => {
  return (
    <main className="min-h-screen bg-backColor antialiased">
      <div id="home" className="scroll-mt-20">
        <HeroSection  />
      </div>
      <div id="about" className="scroll-mt-20">
        <About />
      </div>
      <div id="projects" className="scroll-mt-20">
        <Projects />
      </div>
      <div id="skillsEducation" className="scroll-mt-20">
        <SkillsEducation />
      </div>
      <div id="movingCard" className="scroll-mt-20">
        <MovingCard />
      </div>
      <div id="contact" className="scroll-mt-20">
        <Contact />
      </div>
      <div id="footer" className="scroll-mt-20">
        <Footer />
      </div>
      {/* <div id="footer1">
        <Footer1 />
      </div>  */}
    </main>
  );
};

export default page;
