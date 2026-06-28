import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle, Users } from 'lucide-react'
import './Waitlist.css'

const activities = [
  'Gym',
  'Running',
  'Cycling',
  'Football',
  'Cricket',
  'CrossFit',
  'Hiking',
  'Other',
]

export default function Waitlist() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
    activity: '',
    otherActivity: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleActivitySelect = (activity) => {
    setForm({ ...form, activity, otherActivity: activity === 'Other' ? form.otherActivity : '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    const payload = {
      name: form.name,
      email: form.email,
      age: form.age,
      activity: form.activity === 'Other' ? form.otherActivity : form.activity,
    }

    try {
      const res = await fetch('https://formspree.io/f/mojowzvj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', age: '', activity: '', otherActivity: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="waitlist" className="section section--dark">
      <div className="container">
        <div className="wl__layout">
          {/* Left info */}
          <motion.div
            className="wl__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">Early Access</span>
            <h2 className="section-title">Join the Waitlist</h2>

            <div className="wl__badges">
              <div className="wl__badge">
                <span className="wl__badge-icon"><Users size={16} /></span>
                Currently being tested by early fitness enthusiasts.
              </div>
              <div className="wl__badge wl__badge--highlight">
                Join 200+ people on the waitlist to get early access when available.
              </div>
            </div>

            <div className="wl__trust">
              <div className="wl__trust-avatars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="wl__trust-avatar" style={{ '--i': i }}>
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="wl__trust-text">200+ people are waiting</span>
            </div>
          </motion.div>

          {/* Right form */}
          <motion.div
            className="wl__form-wrap"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  className="wl__success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <CheckCircle size={48} />
                  <h3>You're on the list!</h3>
                  <p>We'll notify you as soon as BEES is available. Stay tuned.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  className="wl__form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="wl__field">
                    <label htmlFor="wl-name" className="wl__label">Name</label>
                    <input
                      type="text"
                      id="wl-name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="wl__input"
                    />
                  </div>

                  <div className="wl__field">
                    <label htmlFor="wl-email" className="wl__label">Email</label>
                    <input
                      type="email"
                      id="wl-email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="wl__input"
                    />
                  </div>

                  <div className="wl__field">
                    <label htmlFor="wl-age" className="wl__label">Age</label>
                    <input
                      type="number"
                      id="wl-age"
                      name="age"
                      value={form.age}
                      onChange={handleChange}
                      required
                      placeholder="25"
                      min="13"
                      max="99"
                      className="wl__input"
                    />
                  </div>

                  <div className="wl__field">
                    <span className="wl__label">Primary Activity</span>
                    <div className="wl__activity-grid">
                      {activities.map((act) => (
                        <button
                          key={act}
                          type="button"
                          className={`wl__activity-btn ${form.activity === act ? 'wl__activity-btn--active' : ''}`}
                          onClick={() => handleActivitySelect(act)}
                        >
                          {act}
                        </button>
                      ))}
                    </div>
                    <AnimatePresence>
                      {form.activity === 'Other' && (
                        <motion.input
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: 'auto', opacity: 1, marginTop: 12 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          type="text"
                          name="otherActivity"
                          value={form.otherActivity}
                          onChange={handleChange}
                          placeholder="Please specify your activity"
                          className="wl__input"
                          required
                        />
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    type="submit"
                    className="btn btn--white wl__submit"
                    disabled={status === 'loading' || !form.activity}
                  >
                    {status === 'loading' ? 'Joining...' : 'Join the Waitlist'}
                    <ArrowRight size={16} />
                  </button>

                  {status === 'error' && (
                    <p className="wl__error">Something went wrong. Please try again.</p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
