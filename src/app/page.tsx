import FeaturedCourses from '@/components/FeaturedCourses'
import HeroSection from '@/components/HeroSection'
import MovingCard from '@/components/MovingCard'
import WhyChooseUS from '@/components/WhyChooseUS'

const page = () => {
  return (
   <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]'>
<HeroSection/>
<FeaturedCourses/>
<WhyChooseUS/>
<MovingCard/>
   </main>
  )
}

export default page