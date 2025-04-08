
import About from '@/components/About'
import HeroSection from '@/components/HeroSection'
import MovingCard from '@/components/MovingCard'
import UpcommingWebinars from '@/components/UpcommingWebinars'
import Instructors  from '@/components/Instructors'
import SkillsEducation from '@/components/SkillsEducation'
import Contact from '@/components/Contact'
// import WhyChooseUS from '@/components/WhyChooseUS'
// import Footer from '@/components/Footer'


const page = () => {
  return (
    // bg-grid-white/[0.02]
   <main className='min-h-screen bg-backColor antialiased '>
    <div id="/">
        <HeroSection />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="upcommingWebinars">
        <UpcommingWebinars />
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
      <div id="instructors">
        <Instructors />
      </div>
      {/* <div id="whyChooseUS">
        <WhyChooseUS />
      </div>
      <div id="footer">
        <Footer />
      </div> */}

   </main>
  )
}

export default page
