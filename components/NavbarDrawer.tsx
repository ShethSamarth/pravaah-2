"use client"

import { Transition, Dialog } from "@headlessui/react"
import Image from "next/image"
import Link from "next/link"
import { Fragment } from "react"

interface NavbarDrawerProps {
  isOpen: boolean
  onClose: () => void
  routes: {
    href: string
    label: string
    active: boolean
  }[]
}

const NavbarDrawer: React.FC<NavbarDrawerProps> = ({
  isOpen,
  onClose,
  routes,
}) => {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-screen flex-col overflow-y-scroll bg-primary-black py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start">
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            onClick={onClose}
                            type="button"
                            className="rounded-md bg-primary-black text-gray-400 hover:text-gray-500 focus:outline-none"
                          >
                            <span className="sr-only">Close Panel</span>
                            <Image
                              src="/assets/close.svg"
                              width={24}
                              height={24}
                              alt="Close Panel"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="w-full pb-5 pt-5">
                      {routes.map((route) => (
                        <Link
                          key={route.href}
                          href={route.href}
                          className={`flex px-10 py-5 text-lg font-semibold tracking-widest transition-colors hover:text-white
                ${
                  route.active ? "text-white bg-black/50" : "text-neutral-400"
                }`}
                        >
                          {route.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default NavbarDrawer
