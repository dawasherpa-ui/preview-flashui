'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const logos = [
  {
    name: 'Vercel',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg',
    blackFilter: true,
  },
  {
    name: 'Nextjs',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881475/nextjs_logo_dark_gfkf8m.svg',
    blackFilter: true,
  },
  {
    name: 'Webflow',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg',
  },
  {
    name: 'Airbnb',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg',
  },
  {
    name: 'Tina',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/afqhiygywyphuou6xtxc.svg',
  },
  {
    name: 'Mistral',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg',
  },
]

const DynamicLogoCloud = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex w-full flex-col items-center justify-center"
        >
          <div className="font-medium uppercase mb-6">Sponsored by</div>
          <div className="grid grid-cols-3 gap-x-6 md:grid-cols-5 lg:grid-cols-6">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center"
              >
                <img
                  src={logo.url}
                  className={`h-10 w-28 object-contain ${logo.blackFilter ? 'brightness-0' : ''}`}
                  alt={`${logo.name} logo`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DynamicLogoCloud