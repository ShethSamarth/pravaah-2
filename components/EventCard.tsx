"use client"

import { motion } from "framer-motion"
import { fadeIn } from "@/utils/motion"
import Image from "next/image"
import Link from "next/link"

interface EventCardProps {
  imgUrl: string
  title: string
  subtitle: string
  index: number
}

const EventCard: React.FC<EventCardProps> = ({
  imgUrl,
  title,
  subtitle,
  index,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 1)}>
      <Link
        href="/event/event-name"
        className="flex md:flex-row flex-col gap-4"
      >
        <Image
          src={imgUrl}
          alt="planet-01"
          width={500}
          height={500}
          className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
        />
        <div className="w-full flex justify-between items-center">
          <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
            <h4 className="font-normal lg:text-[42px] text-[26px] text-white">
              {title}
            </h4>
            <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
              {subtitle}
            </p>
          </div>

          <div className="lg:flex hidden items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent border-[1px] border-white">
            <Image
              src="/arrow.svg"
              alt="arrow"
              width={100}
              height={100}
              className="w-[40%] h-[40%] object-contain"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default EventCard
