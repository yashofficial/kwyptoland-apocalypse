import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Jslibrary from '../components/jsLibrary'
export default function Home() {
  return (
    <div>
      <Head>
        <title>KwyptoLand</title>
        <meta name="description" content="" />
        <meta name="viewport" content="user-scalable=yes, width=device-width, initial-scale=1" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" type="text/javascript"></script>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.3.2/jquery-migrate.min.js" type="text/javascript"></script>
        <link rel="icon" href="img/favicon-16x16.png" />
      </Head>
      <Header />
      <Content />
      <Footer />
      <Jslibrary />
    </div>
  )
}
