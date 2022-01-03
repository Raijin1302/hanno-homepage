import Head from 'next/head'
import dynamic from 'next/dynamic'
import Navbar from '../navbar'
import Footer from '../footer'
import { Box, Container } from '@chakra-ui/react'

const LazyDevMan = dynamic(() => import('../dev-man'), {
  ssr: false
})
const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={4}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Hanno Nguyen's - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {/* <DevMan /> */}
        <LazyDevMan />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
