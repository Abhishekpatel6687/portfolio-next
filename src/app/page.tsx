import FeaturedCourses from '@/components/FeaturedCourses'
import HeroSection from '@/components/HeroSection'
import MovingCard from '@/components/MovingCard'
import UpcommingWebinars from '@/components/UpcommingWebinars'
import WhyChooseUS from '@/components/WhyChooseUS'
import Instructors  from '@/components/Instructors'
import Footer from '@/components/Footer'

const page = () => {
  return (
   <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
<HeroSection/>
<FeaturedCourses/>
<WhyChooseUS/>
<MovingCard/>
<UpcommingWebinars/>
<Instructors/>
<Footer/>
   </main>
  )
}

export default page