"use client"

import { motion } from "framer-motion"
import { fadeIn } from "@/utils/motion"
import Image from "next/image"

interface CoordinatorCardProps {
  image: string
  name: string
  description: string
  index: number
}

const CoordinatorCard: React.FC<CoordinatorCardProps> = ({
  image,
  name,
  description,
  index,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 1)}>
      <div className="gap-4">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="w-[270px] h-[250px] rounded-[32px] object-cover"
        />
        <h4 className="font-semibold text-2xl lg:text-4xl text-white mt-2">
          {name}
        </h4>
        <p className="mt-3 font-normal lg:text-xl text-sm text-secondary-white">
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export default CoordinatorCard
