import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import './OurStory.css'

export default function OurStory() {
  return (
    <section id="story" className="section section--dark">
      <div className="container">
        <div className="story__layout">
          <motion.div
            className="story__content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">Our Story</span>
            <h2 className="section-title">Born From a Simple Frustration</h2>

            <div className="story__body">
              <p className="story__text">
                It started with a moment of frustration in the gym. When I began taking fitness
                seriously, I went looking for a pre-workout that actually matched my values —
                something natural, something honest, something I could trust putting into my body
                every single day.
              </p>
              <p className="story__text">
                But everywhere I looked, the shelves were lined with the same thing: brightly
                colored powders filled with synthetic stimulants, artificial sweeteners, and
                ingredient lists that read more like chemistry experiments than food. It didn't
                sit right.
              </p>
              <p className="story__text story__text--highlight">
                I wanted something simple. Something that didn't need a lab to create —
                because nature had already made it. That's the moment BEES was born.
              </p>
              <p className="story__text">
                A convenient, ready-to-use honey gel that gives you real, sustained energy from
                ingredients you can actually pronounce. No crash. No mystery blends. Just nature,
                packed and ready for your next workout.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="story__visual"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="story__icon-block">
              <div className="story__icon-circle">
                <Heart size={48} strokeWidth={1.5} />
              </div>
              <span className="story__icon-label">Made with intention,<br />not from a factory.</span>
            </div>
            <div className="story__stats">
              <div className="story__stat">
                <span className="story__stat-number">100%</span>
                <span className="story__stat-label">Natural Ingredients</span>
              </div>
              <div className="story__stat">
                <span className="story__stat-number">0</span>
                <span className="story__stat-label">Artificial Additives</span>
              </div>
              <div className="story__stat">
                <span className="story__stat-number">5</span>
                <span className="story__stat-label">Simple Ingredients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
