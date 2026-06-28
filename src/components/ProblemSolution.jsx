import { useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown, Zap, Droplets, ShieldCheck } from 'lucide-react'
import './ProblemSolution.css'

const items = [
  {
    id: 1,
    icon: <Zap size={20} />,
    problemHeading: 'Synthetic Caffeine Spikes You Up, Then Crashes You Hard',
    solutionHeading: 'Green Tea Caffeine Gives Calm, Steady Energy',
    problem: `Conventional pre-workouts rely on high doses of synthetic caffeine. It hits fast, but as your body metabolizes it, the crash follows just as fast. Studies estimate that caffeine-related side effects like jitters and tremors affect roughly 1 in 4 users — which is exactly why low-stimulant, "no crash" formulas have become one of the fastest-growing categories in sports nutrition. People want energy, not a rollercoaster.`,
    solution: `Our caffeine comes from real green tea, not a lab. Green tea naturally pairs caffeine with L-theanine — an amino acid that clinical research shows works with caffeine to produce calm, focused alertness instead of a jittery buzz. Because the dose is moderate and balanced rather than a mega-stack, it works whether you're stim-sensitive, training in the evening, or brand new to pre-workout — not just for people who can handle a triple-espresso hit.`,
  },
  {
    id: 2,
    icon: <Droplets size={20} />,
    problemHeading: 'Sugary Gels Upset Your Stomach And Your Energy',
    solutionHeading: 'Real Honey Fuels You Without The Crash',
    problem: `Most energy gels lean on refined sugar, maltodextrin, or sugar alcohols (xylitol, sorbitol, erythritol) for quick carbs. These are common culprits behind the bloating, nausea, and "gel gut" that endurance athletes know all too well — and some research links sugar alcohols to longer-term digestive and gut-health issues.`,
    solution: `We use real honey. In a double-blind university cycling study, honey performed on par with commercial sports gels — comparable power output, heart rate, and finish times — while being gentler on digestion for many athletes. That's because honey's natural glucose-fructose blend is absorbed through two separate pathways at once, releasing energy more gradually instead of dumping it all in one spike.`,
  },
  {
    id: 3,
    icon: <ShieldCheck size={20} />,
    problemHeading: '"Natural" Labels Still Hide Synthetic Fillers',
    solutionHeading: '100% Transparent, All-Natural Ingredients',
    problem: `Nearly 8 in 10 consumers say they're concerned about what's actually in their food, and most people now check the ingredient list before they buy anything they'll put in their body before a workout. Yet most pre-workout products are still proprietary blends stacked with synthetic stimulants, artificial sweeteners, and dyes you can't pronounce.`,
    solution: `No proprietary blends. No fillers. No artificial sweeteners or dyes. Just honey, green tea, and the few other natural ingredients it takes to deliver real energy — every one of them something you'd recognize in your own kitchen.`,
  },
]

function AccordionItem({ item, isOpen, onToggle, index }) {
  return (
    <motion.div
      className={`ps-accordion ${isOpen ? 'ps-accordion--open' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button className="ps-accordion__trigger" onClick={onToggle} aria-expanded={isOpen}>
        <div className="ps-accordion__header">
          <div className="ps-accordion__icon-wrap">{item.icon}</div>
          <div className="ps-accordion__titles">
            <span className="ps-accordion__problem-label">The Problem</span>
            <h3 className="ps-accordion__title">{item.problemHeading}</h3>
          </div>
        </div>
        <motion.div
          className="ps-accordion__chevron"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="ps-accordion__body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <div className="ps-accordion__content">
              <div className="ps-accordion__block ps-accordion__block--problem">
                <p>{item.problem}</p>
              </div>
              <div className="ps-accordion__block ps-accordion__block--solution">
                <div className="ps-accordion__solution-label">
                  <span className="ps-accordion__solution-dot" />
                  How BEES solves it
                </div>
                <h4 className="ps-accordion__solution-heading">{item.solutionHeading}</h4>
                <p>{item.solution}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function ProblemSolution() {
  const [openId, setOpenId] = useState(null)
  const ref = useRef(null)

  return (
    <section id="problem" className="section">
      <div className="container" ref={ref}>
        <motion.div
          className="ps__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Why BEES?</span>
          <h2 className="section-title">The Problem With Pre-Workout Energy</h2>
          <p className="section-subtitle">
            Most pre-workouts rely on synthetic ingredients that spike and crash.
            We took a different approach.
          </p>
        </motion.div>

        <div className="ps__list">
          {items.map((item, index) => (
            <AccordionItem
              key={item.id}
              item={item}
              index={index}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
