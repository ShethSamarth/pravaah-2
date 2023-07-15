"use client"

import { motion } from "framer-motion"
import { navVariants } from "@/utils/motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import NavbarDrawer from "@/components/NavbarDrawer"

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const pathname = usePathname()
  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/events",
      label: "Events",
      active: pathname === "/events",
    },
    {
      href: "/about-host",
      label: "About Host",
      active: pathname === "/about-host",
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
  ]

  return (
    <>
      <NavbarDrawer
        isOpen={openDrawer}
        onClose={() => setOpenDrawer(false)}
        routes={routes}
      />
      <motion.header
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className="sm:px-16 px-6 py-8 relative"
      >
        <div className="absolute w-[50%] inset-0 gradient-01" />
        <div className="2xl:max-w-[1280px] w-full mx-auto flex justify-between gap-8">
          <Link
            href="/"
            className="font-extrabold text-[24px] leading-[30.24px] text-white uppercase z-0"
          >
            Pravaah
          </Link>
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-sm font-semibold tracking-widest transition-colors hover:text-white
                ${route.active ? "text-white" : "text-neutral-400"}`}
              >
                {route.label}
              </Link>
            ))}
          </nav>
          <Image
            src="/menu.svg"
            alt="menu"
            className="block md:hidden"
            width={24}
            height={24}
            onClick={() => setOpenDrawer(true)}
          />
        </div>
      </motion.header>
    </>
  )
}

export default Navbar
