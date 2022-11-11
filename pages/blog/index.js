import Head from 'next/head'
import Image from 'next/image'
import Navbar from '/comps/navbar'
import Footer from '/comps/footer'
import styles from '/styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (

  <>
    <Head>
      <title>Vítek | Blog</title>
    </Head>
    <div className={styles.title}>
        <h1>Blog</h1>
      </div><div className={styles.blogpost}>
         
        </div>
    </>
  )
}
