import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import About from "@/sections/About"
import Events from "@/sections/Events"
import Hero from "@/sections/Hero"
import NTEvents from "@/sections/NTEvents"

export default function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
      </div>
      <div className="relative">
        <Events />
        <div className="gradient-04 z-0" />
      </div>
      <div className="relative">
        <NTEvents />
        <div className="gradient-04 z-0" />
      </div>
      <Footer />
    </div>
  )
}
