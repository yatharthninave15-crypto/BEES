import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import './ComparisonTable.css'

const rows = [
  {
    feature: 'Primary Fuel',
    bees: 'Raw Wild Forest Honey',
    competitor: 'Refined Sugars / High Fructose Corn Syrup',
  },
  {
    feature: 'Caffeine Source',
    bees: 'Natural Green Tea',
    competitor: 'Synthetic / Anhydrous Caffeine',
  },
  {
    feature: 'Energy Effect',
    bees: 'Sustained & Smooth',
    competitor: 'Rapid Spike & "Crash"',
  },
  {
    feature: 'Hydration',
    bees: 'Natural Electrolytes (Pink Salt, Mg, K)',
    competitor: 'Artificial Additives / Often Dehydrating',
  },
  {
    feature: 'Purity',
    bees: '100% Natural / Raw',
    competitor: 'Artificial Flavors, Colors, & Preservatives',
  },
  {
    feature: 'Digestibility',
    bees: 'Gentle on the gut',
    competitor: 'Can cause bloating or acidity',
  },
]

export default function ComparisonTable() {
  return (
    <section id="comparison" className="section">
      <div className="container">
        <motion.div
          className="ct__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">How We Compare</span>
          <h2 className="section-title">BEES vs. Standard Energy Drinks</h2>
          <p className="section-subtitle">
            See how BEES stacks up against conventional pre-workout options.
          </p>
        </motion.div>

        <motion.div
          className="ct__table-wrap"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {/* Column headers */}
          <div className="ct__row ct__row--header">
            <div className="ct__cell ct__cell--feature">Feature</div>
            <div className="ct__cell ct__cell--bees">
              <span className="ct__brand-badge">BEES</span>
            </div>
            <div className="ct__cell ct__cell--competitor">Standard Energy Drinks</div>
          </div>

          {/* Data rows */}
          {rows.map((row, index) => (
            <motion.div
              key={row.feature}
              className="ct__row"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="ct__cell ct__cell--feature">{row.feature}</div>
              <div className="ct__cell ct__cell--bees">
                <span className="ct__check-icon"><Check size={16} /></span>
                {row.bees}
              </div>
              <div className="ct__cell ct__cell--competitor">
                <span className="ct__x-icon"><X size={16} /></span>
                {row.competitor}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
