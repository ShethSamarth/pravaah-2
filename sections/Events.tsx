"use client"

import { motion } from "framer-motion"
import { TitleText, TypingText } from "@/components/CustomText"
import EventCard from "@/components/EventCard"
import urlFor from "@/sanity/lib/urlFor"

interface EventsProps {
  events: Events[]
  title: string
}

const Events: React.FC<EventsProps> = ({ events, title }) => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <TypingText title="| Events" textStyles="text-center" />
        <TitleText title={title} textStyles="text-center" />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          {events.map((event, index) => (
            <EventCard
              key={event._id}
              imgUrl={urlFor(event.mainImage).url()}
              title={event.title}
              subtitle={event.shortDescription}
              route={event.slug.current}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Events
