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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus</p>
        </div>
    </>
  )
}
