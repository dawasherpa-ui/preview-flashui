'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'

// ... testimonials array remains unchanged ...
const testimonials = [
    {
      id: 1,
      text: "The product exceeded my expectations. It's intuitive, powerful, and has significantly improved my workflow.",
      author: "Ansub Khan",
      role: "Software Engineer",
      image: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/t2awrrfzdvmg1chnzyfr.svg",
    },
    {
      id: 2,
      text: "I've tried many similar tools, but this one stands out. The attention to detail and user experience is unmatched.",
      author: "Lex Collins",
      role: "UX Designer",
      image: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/pmblusboe7vkw8vxdknx.svg",
    },
    {
      id: 3,
      text: "This solution has transformed how we approach our projects. It's now an indispensable part of our toolkit.",
      author: "Alex Jones",
      role: "Project Manager",
      image: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276558/logos/tyos2ayezryjskox3wzs.svg",
    },
    {
      id: 4,
      text: "The support team is fantastic. They've been incredibly responsive and helpful throughout our onboarding process.",
      author: "John Doe",
      role: "CTO",
      image: "https://res.cloudinary.com/dfhp33ufc/image/upload/v1715276560/logos/nymiivu48d5lywhf9rpf.svg",
    },
  ]
const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 7000)
    return () => clearInterval(intervalId)
  }, [])

  const variants = {
    enter: (direction: number) => ({ 
      x: direction > 0 ? '100%' : '-100%', 
      opacity: 0 
    }),
    center: { 
      x: 0, 
      opacity: 1 
    },
    exit: (direction: number) => ({ 
      x: direction < 0 ? '100%' : '-100%', 
      opacity: 0 
    }),
  }

  const direction = 1

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
          What Our Clients Say
        </h2>
        <div className="relative overflow-hidden" style={{ height: '280px' }}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentTestimonial}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0 w-full"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 h-full">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].author}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="ml-4">
                    <p className="font-semibold text-base text-gray-900 dark:text-gray-100">
                      {testimonials[currentTestimonial].author}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonials[currentTestimonial].role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-base italic line-clamp-4">
                &quot;{testimonials[currentTestimonial].text}&quot;
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex justify-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`mx-1 h-3 w-3 rounded-full ${
                index === currentTestimonial
                  ? 'bg-blue-600'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialCarousel