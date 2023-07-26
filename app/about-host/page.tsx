import FloatingText from "@/components/FloatingText"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"
import Image from "next/image"
import Link from "next/link"

const AboutHost = async () => {
  const aboutsQuery = groq`*[_type == "about"]  | order(_createdAt asc)`
  const abouts: About[] = await client.fetch(aboutsQuery)

  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <div className="relative">
        <Link href="https://www.utu.ac.in/AMTICS/index.html" target="_blank">
          <Image
            src="/assets/amtics_logo.png"
            width={1000}
            height={1000}
            className="w-80 h-80 object-contain mx-auto"
            alt="AMTICS Logo"
          />
        </Link>
        <div className="gradient-04 z-0" />
      </div>
      {abouts.map((about) => (
        <div key={about._id} className="relative">
          <FloatingText data={about} />
          <div className="gradient-03 z-0" />
        </div>
      ))}

      <Footer />
    </div>
  )
}

export default AboutHost
