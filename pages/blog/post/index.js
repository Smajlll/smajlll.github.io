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
      <title>Vítek | Všechny blog posty</title>
    </Head>
    <div className={styles.title}>
        <h1>Všechny blog posty</h1>
      </div><div>
      <Link legacyBehavior href='../blog/post/4'><a className={styles.blogtitle}>Spouštění QEMU ve WSL</a></Link>
         <p className={styles.blogpost}>Ahoj Ahoj, tady zase a znova Vítek. Dneska jsem si za úkol dal jednoduše, spustit pomocí QEMU VM Počitač ve WSL</p>
      <Link legacyBehavior href='../blog/post/3'><a className={styles.blogtitle}>Spouštění ChromeOS Flex v QEMU</a></Link>
         <p className={styles.blogpost}>Ahoj, tady zas a znova Vítek. Dneska jsem se pokusil a dokonce se mi i povedlo spustit Google ChromeOS Flex v QEMU na svém Arch Linuxu :D</p>
      <Link legacyBehavior href='../blog/post/2'><a className={styles.blogtitle}>Next.JS Deployment</a></Link>
         <p className={styles.blogpost}>Ahoj, tady zas a znova Vítek, dneska se tady chci rozepsat o tom jak jsem deploynul NExt.JS aplikaci (tento web) za použití Githubu a Vercelu...</p>
        <Link legacyBehavior href='../1'><a className={styles.blogtitle}>Jen začátek...</a></Link>
         <p className={styles.blogpost}>Ahoj, tady Vítek a první blog post, jsem rád, že jste se rozhodli přidat se se mnou na tuhle cestu. Tahle cesta bude o tom všem co se snažím naučit, co umím, co dělám...</p>
        </div>
    </>
  )
}