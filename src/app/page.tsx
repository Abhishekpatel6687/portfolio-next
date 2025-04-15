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
      <div id="/">
        <HeroSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skillsEducation">
        <SkillsEducation />
      </div>
      <div id="movingCard">
        <MovingCard />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
      {/* <div id="footer1">
        <Footer1 />
      </div>  */}
    </main>
  );
};

export default page;
