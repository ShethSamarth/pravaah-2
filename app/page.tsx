import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { client } from "@/sanity/lib/client"
import About from "@/sections/About"
import Events from "@/sections/Events"
import Hero from "@/sections/Hero"
import { groq } from "next-sanity"

export default async function Home() {
  const generalQuery = groq`*[_type == "general"]`
  const general: General[] = await client.fetch(generalQuery)

  const eventsTFQuery = groq`*[_type == "events" && technical == true && featured == true] {
    ...,
    categories[]->
  }  | order(_createdAt asc)`
  const eventsTF: Events[] = await client.fetch(eventsTFQuery)

  const eventsNTFQuery = groq`*[_type == "events"  && technical == false ] {
    ...,
    categories[]->
  }  | order(_createdAt asc)`
  const eventsNTF: Events[] = await client.fetch(eventsNTFQuery)

  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About data={general} />
        <div className="gradient-03 z-0" />
      </div>
      <div className="relative">
        <Events events={eventsTF} title="Technical Events" />
        <div className="gradient-04 z-0" />
      </div>
      <div className="relative">
        <Events events={eventsNTF} title="Non Technical Events" />
        <div className="gradient-04 z-0" />
      </div>
      <Footer />
    </div>
  )
}
