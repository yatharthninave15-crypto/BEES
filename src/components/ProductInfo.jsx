import { motion } from 'framer-motion'
import './ProductInfo.css'

import honeyImg from '../assets/ingredients/honey.png'
import greenTeaImg from '../assets/ingredients/green-tea.png'
import pinkSaltImg from '../assets/ingredients/pink-salt.png'
import potassiumImg from '../assets/ingredients/potassium.png'
import magnesiumImg from '../assets/ingredients/magnesium.png'

const ingredients = [
  {
    name: 'Raw Wild Forest Honey',
    source: 'Indigenous Apis dorsata (Rock Bee)',
    function: 'Natural, complex carbohydrates for immediate and sustained energy.',
    image: honeyImg,
  },
  {
    name: 'Green Tea Extract',
    source: 'Premium Camellia sinensis',
    function: 'Provides clean, jitter-free caffeine for focus and alertness.',
    image: greenTeaImg,
  },
  {
    name: 'Himalayan Pink Salt',
    source: 'Ancient mineral deposits',
    function: 'Supplies essential sodium for rapid hydration and fluid balance.',
    image: pinkSaltImg,
  },
  {
    name: 'Potassium',
    source: 'Natural mineral sources',
    function: 'Supports optimal muscle contraction and nerve signal transmission.',
    image: potassiumImg,
  },
  {
    name: 'Magnesium',
    source: 'Natural mineral sources',
    function: 'Aids in energy metabolism and helps reduce fatigue during intense activity.',
    image: magnesiumImg,
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

export default function ProductInfo() {
  return (
    <section id="ingredients" className="section section--alt">
      <div className="container">
        <motion.div
          className="pi__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">What's Inside</span>
          <h2 className="section-title">Ingredients</h2>
          <p className="section-subtitle">
            At BEES, we believe in radical transparency. We source the finest elements
            from nature to create a balanced, high-performance fuel that respects your body's needs.
          </p>
        </motion.div>

        <div className="pi__grid">
          {ingredients.map((item, index) => (
            <motion.div
              key={item.name}
              className="pi__card"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-30px' }}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div className="pi__card-image-wrap">
                <img src={item.image} alt={item.name} className="pi__card-image" />
              </div>
              <div className="pi__card-content">
                <h3 className="pi__card-name">{item.name}</h3>
                <span className="pi__card-source">{item.source}</span>
                <p className="pi__card-function">{item.function}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="pi__callout"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4 className="pi__callout-title">Why These Ingredients?</h4>
          <p className="pi__callout-text">
            By combining the raw, enzymatic power of <em>Apis dorsata</em> honey with a
            precise blend of electrolytes — <strong>Sodium, Potassium, and Magnesium</strong> — we
            have created a fuel that doesn't just provide a burst of energy; it supports your
            physiological performance from the inside out. No synthetic fillers, no artificial
            crash — just pure, intentional nutrition.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
