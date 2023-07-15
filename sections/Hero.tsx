"use client"

import { motion } from "framer-motion"
import { slideIn, staggerContainer, textVariant } from "@/utils/motion"
import Image from "next/image"

const Hero = () => {
  return (
    <section className="sm:py-16 xs:py-8 py-12 sm:pl-16 pl-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="2xl:max-w-[1280px] w-full mx-auto flex flex-col"
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1
            variants={textVariant(1.1)}
            className="font-extrabold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white"
          >
            Pravaah
          </motion.h1>
          <motion.h1
            variants={textVariant(1.1)}
            className="font-bold lg:text-[40px] md:text-[30px] sm:text-[20px] text-[15px] lg:mb-6 md:mb-8 sm:mb-7 mb-8 uppercase text-white"
          >
            A Technology Fest By AMTICS - UTU
          </motion.h1>
        </div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <div className="absolute w-full lg:h-[300px] md:h-[250px] sm:h-[200px] h-[150px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

          <Image
            src="/cover.png"
            alt="hero_cover"
            width={1500}
            height={1500}
            className="w-full lg:h-[300px] md:h-[250px] sm:h-[200px] h-[150px] object-cover rounded-tl-[140px] z-10 relative"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
