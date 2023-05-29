import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/NavBar/NavBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nome do site</title>
        <meta name="description" content="Descrição do site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/*<Header />*/}
      <Navbar />
      <Footer />
      
    </>
  )
}
