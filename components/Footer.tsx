"use client"

import { motion } from "framer-motion"
import { footerVariants } from "../utils/motion"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className="sm:px-16 px-6 py-8 relative"
    >
      <div className="footer-gradient" />
      <div className="2xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8">
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            Enter the Pravaah
          </h4>
          <Link
            href="/events"
            className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
          >
            <Image
              width={24}
              height={24}
              src="/assets/headset.svg"
              alt="headset"
            />
            <span className="font-normal text-[16px] text-white">Register</span>
          </Link>
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="font-extrabold text-[24px] text-white uppercase">
              Pravaah
            </h4>
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © 2021 - 2023 Pravaah. All rights reserved.
            </p>

            <div className="flex gap-4">
              <Link href="https://www.twitter.com/" target="_blank">
                <Image
                  src="/social/twitter.svg"
                  alt="Twitter"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://www.linkedin.com/" target="_blank">
                <Image
                  src="/social/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://www.instagram.com/" target="_blank">
                <Image
                  src="/social/instagram.svg"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </Link>
              <Link href="https://www.facebook.com/" target="_blank">
                <Image
                  src="/social/facebook.svg"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer
