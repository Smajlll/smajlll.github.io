import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/mc-skin.jpg" width={80} height={80}/>
            </div>
                <Link legacyBehavior href="/"><a className={styles.navtext}>Domovská stránka </a></Link>
               <Link legacyBehavior href="/ome"><a className={styles.navtext}>O mně </a></Link>
                <Link legacyBehavior href="/projekty"><a className={styles.navtext}>Projekty </a></Link>
                <Link legacyBehavior href="/blog"><a className={styles.navtext}>Můj Blog </a></Link>
                <Link legacyBehavior href="/public/pgpkey.txt"><a className={styles.navtext}>Můj GPG Klíč </a></Link>
        </nav>
     );
}
 
export default Navbar;