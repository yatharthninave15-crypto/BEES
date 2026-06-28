import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Send } from 'lucide-react'
import './FAQ.css'

const faqs = [
  {
    question: 'Can I use BEES for endurance activities like cycling or running?',
    answer: 'Absolutely. The combination of rapid-absorbing honey and essential electrolytes (Sodium, Potassium, Magnesium) makes it an ideal fuel for endurance and sustained performance.',
  },
  {
    question: 'Is this product safe for daily use?',
    answer: 'Yes. BEES is formulated with simple, whole-food ingredients like honey and essential electrolytes. It is designed to be a clean, everyday fuel source for your workouts, work, or daily adventures.',
  },
  {
    question: 'How quickly will I feel the effects of BEES?',
    answer: 'Because we use raw Apis dorsata honey, the natural carbohydrates are rapidly absorbed by your body, providing a quick energy boost. You can expect to feel the effects within 15–20 minutes of consumption.',
  },
  {
    question: 'Does this product contain any artificial ingredients?',
    answer: 'Never. BEES is 100% natural, containing no artificial flavors, colors, preservatives, or synthetic fillers.',
  },
]

function FAQItem({ faq, isOpen, onToggle, index }) {
  return (
    <motion.div
      className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <button className="faq-item__trigger" onClick={onToggle} aria-expanded={isOpen}>
        <span className="faq-item__question">{faq.question}</span>
        <motion.div
          className="faq-item__chevron"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="faq-item__answer-wrap"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <p className="faq-item__answer">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openId, setOpenId] = useState(null)
  const [userQuestion, setUserQuestion] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmitQuestion = (e) => {
    e.preventDefault()
    if (userQuestion.trim()) {
      setSubmitted(true)
      setUserQuestion('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section id="faq" className="section section--alt">
      <div className="container">
        <motion.div
          className="faq__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about BEES. Can't find the answer? Ask us below.
          </p>
        </motion.div>

        <div className="faq__content">
          <div className="faq__list">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openId === index}
                onToggle={() => setOpenId(openId === index ? null : index)}
              />
            ))}
          </div>

          <motion.div
            className="faq__ask"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="faq__ask-title">Have a question we didn't cover?</h3>
            <p className="faq__ask-subtitle">Submit your question and we'll get back to you.</p>

            <form className="faq__ask-form" onSubmit={handleSubmitQuestion}>
              <div className="faq__ask-input-wrap">
                <input
                  type="text"
                  placeholder="Type your question..."
                  value={userQuestion}
                  onChange={(e) => setUserQuestion(e.target.value)}
                  className="faq__ask-input"
                  id="faq-question-input"
                />
                <button type="submit" className="faq__ask-btn" aria-label="Submit question">
                  <Send size={18} />
                </button>
              </div>
              <AnimatePresence>
                {submitted && (
                  <motion.p
                    className="faq__ask-success"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    Thanks! We'll get back to you soon.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
