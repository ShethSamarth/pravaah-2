"use client"

import { motion } from "framer-motion"
import { TitleText } from "@/components/CustomText"
import { fadeIn } from "@/utils/motion"
import { RichTextComponents } from "./RichTextComponents"
import { PortableText } from "@portabletext/react"

interface FloatingTextProps {
  data: About
}

const FloatingText: React.FC<FloatingTextProps> = ({ data }) => {
  return (
    <section className="sm:p-16 xs:p-8 px-6 relative z-10 text-white">
      <div className="gradient-02 z-0" />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex justify-center items-center flex-col"
      >
        <TitleText title={data.title} textStyles="text-center" />

        <motion.article
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="px-10 md:pt-14 text-secondary-white"
        >
          <PortableText value={data.body} components={RichTextComponents} />
        </motion.article>
      </motion.div>
    </section>
  )
}

export default FloatingText
