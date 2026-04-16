import { motion } from 'framer-motion'

const SectionWrapper = ({ id, title, className = '', children, delay = 0 }) => {
  return (
    <motion.section
      id={id}
      initial={{ y: 12, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, delay }}
      className={className}
    >
      {title ? <p className="section-title">{title}</p> : null}
      {children}
    </motion.section>
  )
}

export default SectionWrapper
