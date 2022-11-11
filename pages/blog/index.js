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
        <Link legacyBehavior href='../blog/post/1'><a className={styles.blogtitle}>Jen začátek...</a></Link>
         <p className={styles.blogpost}>Ahoj, tady Vítek a první blog post, jsem rád, že jste se rozhodli přidat se se mnou na tuhle cestu. Tahle cesta bude o tom všem co se snažím naučit, co umím, co dělám...</p>
        </div>
        <div className={styles.allposts}>
          <Link legacyBehavior href="blog/post"><a>Všechny posty</a></Link>
        </div>
    </>
  )
}
