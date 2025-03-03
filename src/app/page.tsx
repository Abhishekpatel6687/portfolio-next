import About from '@/components/About'
import HeroSection from '@/components/HeroSection'
import MovingCard from '@/components/MovingCard'
import UpcommingWebinars from '@/components/UpcommingWebinars'
import WhyChooseUS from '@/components/WhyChooseUS'
import Instructors  from '@/components/Instructors'
import Footer from '@/components/Footer'
import SkillsEducation from '@/components/SkillsEducation'

const page = () => {
  return (
    // bg-grid-white/[0.02]
   <main className='min-h-screen bg-backColor antialiased '>
<HeroSection/>
<About/>
<UpcommingWebinars/>
<SkillsEducation/>
<WhyChooseUS/>
<MovingCard/>
<Instructors/>
<Footer/>
   </main>
  )
}

export default page