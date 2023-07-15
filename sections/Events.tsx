"use client"

import { motion } from "framer-motion"
import { TitleText, TypingText } from "@/components/CustomText"
import EventCard from "@/components/EventCard"

const Events = () => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <TypingText title="| Events" textStyles="text-center" />
        <TitleText title="Technical Events" textStyles="text-center" />
        <div className="mt-[50px] flex flex-col gap-[30px]">
          <EventCard
            imgUrl="/planet-01.png"
            title="The launch of the Metaverse makes Elon musk ketar-ketir"
            subtitle="Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique."
            index={0}
          />
          <EventCard
            imgUrl="/planet-01.png"
            title="The launch of the Metaverse makes Elon musk ketar-ketir"
            subtitle="Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique."
            index={0}
          />
          <EventCard
            imgUrl="/planet-01.png"
            title="The launch of the Metaverse makes Elon musk ketar-ketir"
            subtitle="Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique."
            index={0}
          />
          <EventCard
            imgUrl="/planet-01.png"
            title="The launch of the Metaverse makes Elon musk ketar-ketir"
            subtitle="Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique."
            index={0}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Events
