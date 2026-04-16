import Head from 'next/head'
import Navbar from '../navbar'
import Footer from '../footer'

const Main = ({ children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Hanno Nguyen - Front-end Developer" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Hanno Nguyen · Portfolio</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Main
