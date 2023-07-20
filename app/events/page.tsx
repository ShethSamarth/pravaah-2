import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { client } from "@/sanity/lib/client"
import Events from "@/sections/Events"
import { groq } from "next-sanity"

export const revalidate = 60

const EventsPage = async () => {
  const eventsTQuery = groq`*[_type == "events" && technical == true] {
    ...,
  }  | order(_createdAt asc)`
  const eventsT: Events[] = await client.fetch(eventsTQuery)

  const eventsNTQuery = groq`*[_type == "events" && technical == false] {
    ...,
  }  | order(_createdAt asc)`
  const eventsNT: Events[] = await client.fetch(eventsNTQuery)

  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <div className="relative">
        <Events events={eventsT} title="Technical Events" />
        <div className="gradient-04 z-0" />
      </div>
      <div className="relative">
        <Events events={eventsNT} title="Non Technical Events" />
        <div className="gradient-04 z-0" />
      </div>
      <Footer />
    </div>
  )
}

export default EventsPage
