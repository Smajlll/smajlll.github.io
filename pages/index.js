import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/navbar'
import Footer from '../comps/footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vítek | Domovská Stránka</title>
      </Head>
    <div>
        <h1 className={styles.name}>Vít Smolík</h1>
          <p className={styles.text}>Vítej Poutníku, dovol abych se představil.</p>
          <p className={styles.text}>Jmenuji se Vítek, ale hodně lidí ke mně referuje jako Smajl, zajímám se o programování, psaní webů a hraní her.</p>
            <Link legacyBehavior href="/ome">
              <a className={styles.btn}>Dozvědět se o mně víc</a>
            </Link>
            <Link legacyBehavior href="/projekty">
              <a className={styles.btn}>Moje projekty</a>
            </Link>

    </div>
  </>
      
  )
}
