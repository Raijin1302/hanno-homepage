import { AnimatePresence } from 'framer-motion'
import ProgressBar from '@badrap/bar-of-progress'
import Router from 'next/router'
import Layout from '../components/layouts/main'
import { TooltipProvider } from '../components/ui/tooltip'
import '../styles/globals.css'

const progress = new ProgressBar({
  size: 3,
  color: '#171717',
  className: 'z-50',
  delay: 200
})

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', progress.finish)
Router.events.on('routeChangeError', progress.finish)

const Website = ({ Component, pageProps, router }) => {
  return (
    <TooltipProvider delayDuration={120}>
      <Layout router={router}>
        <AnimatePresence mode="wait" initial>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </TooltipProvider>
  )
}

export default Website
