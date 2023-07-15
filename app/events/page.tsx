import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Events from "@/sections/Events"
import NTEvents from "@/sections/NTEvents"

const EventsPage = () => {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
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

export default EventsPage
