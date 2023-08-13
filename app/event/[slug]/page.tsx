import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import { RichTextComponents } from "@/components/RichTextComponents"
import { client } from "@/sanity/lib/client"
import urlFor from "@/sanity/lib/urlFor"
import { PortableText } from "@portabletext/react"
import { groq } from "next-sanity"
import Image from "next/image"

export const revalidate = 60

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const query = groq`
    *[_type == "events"]
    {
      slug
    }
  `
  const slugs: Events[] = await client.fetch(query)
  const slugRoutes = slugs.map((slug) => slug.slug.current)

  return slugRoutes.map((slug) => ({
    slug,
  }))
}

const EventPage = async ({ params: { slug } }: Props) => {
  const query = groq`
        *[_type == "events" && slug.current == $slug][0]
        {
            ...,
        }
    `

  const event: Events = await client.fetch(query, { slug })

  return (
    <div className="bg-primary-black overflow-hidden text-white">
      <Navbar />
      <div className="relative">
        <main className="max-w-7xl mx-auto py-20">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <Image
              src={urlFor(event.mainImage).url()}
              width={1000}
              height={1000}
              alt={event.title}
              className="w-[250px] h-[250px] md:w-[270px] md:h-[270px] lg:w-96 lg:h-96 mx-auto rounded-[32px] object-cover"
            />
            <div className="mx-auto py-5 md:py-3 lg:py-0 px-7">
              <h2 className="text-4xl lg:text-6xl font-extrabold text-center md:text-left">
                {event.title}
              </h2>
              <p className="py-5 text-base md:text-lg">
                {event.longDescription}
              </p>
            </div>
          </div>
          <article className="px-10 md:pt-14">
            <PortableText value={event.body} components={RichTextComponents} />
          </article>
        </main>
        <div className="gradient-04 z-0" />
      </div>
      <Footer />
    </div>
  )
}

export default EventPage
