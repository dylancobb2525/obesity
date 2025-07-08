'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function VideoIntroduction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} id="video-introduction" className="py-8 lg:py-12 bg-white">
      <div className="max-w-full mx-auto px-4 lg:px-8">
        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image Section - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="w-full h-[300px] lg:h-[350px] flex items-center justify-center" style={{ border: 'none', outline: 'none', boxShadow: 'none' }}>
              <img
                src="/scale.png"
                alt="Obesity Education"
                className="max-w-full max-h-full object-contain"
                style={{ 
                  border: 'none', 
                  outline: 'none', 
                  boxShadow: 'none',
                  margin: 0,
                  padding: 0,
                  display: 'block'
                }}
              />
            </div>
          </motion.div>

          {/* Text Content - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[300px] lg:h-[350px] flex flex-col justify-between"
          >
            {/* Header - Aligned with top of video */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight text-center">
                Your Comprehensive Hub for Excellence in Obesity Education
              </h2>
            </div>

            {/* Middle Content */}
            <div>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                Through expert interviews, case discussions, expert panels, and patient perspectives, leading
                global experts deliver the latest evidence-based guidance and real-world experiences for
                practicing clinicians. Join our growing community of endocrinologists, cardiologists,
                nephrologists and primary care providers by engaging with the educational content in this
                learning center and sharing it with your healthcare team.
              </p>
            </div>

            {/* Call to Action - Aligned with bottom of video */}
            <div className="text-center">
              <p className="text-lg lg:text-xl font-bold text-black leading-tight">
                Together, we can advance the standard of obesity care worldwide!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 