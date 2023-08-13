import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { client } from "@/sanity/lib/client"
import Coordinators from "@/sections/Coordinators"
import { groq } from "next-sanity"

export const revalidate = 60

const CoordinatorsPage = async () => {
  const coordinatorsQuery = groq`*[_type == "coordinators"] | order(_createdAt asc)`
  const coordinators: Coordinator[] = await client.fetch(coordinatorsQuery)

  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <div className="relative">
        <Coordinators title="Coordinators" coordinators={coordinators} />
        <div className="gradient-04 z-0" />
      </div>
      <Footer />
    </div>
  )
}

export default CoordinatorsPage
