import { motion } from 'framer-motion'
import Head from 'next/head'

const Layout = ({ children, title }) => (
  <motion.article
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35 }}
    className="container section"
  >
    {title ? (
      <Head>
        <title>{title} · Hanno Nguyen</title>
      </Head>
    ) : null}
    {children}
  </motion.article>
)

export default Layout
