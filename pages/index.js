import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Content from '../components/Content'
import Jslibrary from '../components/jsLibrary'
export default function Home() {
  return (
    <div>
      <Head>
        <title>KwyptoLand</title>
        <meta name="description" content="" />
        <meta name="viewport" content="user-scalable=yes, width=device-width, initial-scale=1" />
        <link rel="icon" href="img/favicon-16x16.png" />
      </Head>
      <Header />
      <Content />
      <Jslibrary />
    </div>
  )
}
