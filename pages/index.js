import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Jslibrary from '../components/jsLibrary'
import jQuery from 'jquery'
import * as $ from 'jquery'
export default function Home() {
  return (
    <div>
      <Head>
        <title>KwyptoLand</title>
        <meta name="description" content="" />
        <meta name="viewport" content="user-scalable=yes, width=device-width, initial-scale=1" />
        <link rel="icon" href="img/favicon-16x16.png" />
        <link rel="https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/slicknav.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>
      </Head>
      <Header />
      <Content />
      <Footer />
      <Jslibrary />
    </div>
  )
}
