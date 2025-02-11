import About from '@/components/About'
import HeroSection from '@/components/HeroSection'
import MovingCard from '@/components/MovingCard'
import UpcommingWebinars from '@/components/UpcommingWebinars'
import WhyChooseUS from '@/components/WhyChooseUS'
import Instructors  from '@/components/Instructors'
import Footer from '@/components/Footer'

const page = () => {
  return (
    // bg-grid-white/[0.02]
   <main className='min-h-screen bg-backColor antialiased '>
<HeroSection/>
<About/>
<WhyChooseUS/>
<MovingCard/>
<UpcommingWebinars/>
<Instructors/>
<Footer/>
   </main>
  )
}

export default page