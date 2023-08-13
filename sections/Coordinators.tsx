"use client"

import { motion } from "framer-motion"
import { TitleText, TypingText } from "@/components/CustomText"
import urlFor from "@/sanity/lib/urlFor"
import CoordinatorCard from "@/components/CoordinatorCard"

interface CoordinatorsProps {
  coordinators: Coordinator[]
  title: string
}

const Coordinators: React.FC<CoordinatorsProps> = ({ coordinators, title }) => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 py-12 relative z-10">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <TitleText title={title} textStyles="text-center" />
        <div className="mt-[50px] gap-[30px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto">
          {coordinators.map((coordinator, index) => (
            <CoordinatorCard
              key={coordinator._id}
              image={urlFor(coordinator.image).url()}
              name={coordinator.name}
              description={coordinator.description}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Coordinators
