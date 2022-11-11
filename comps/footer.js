import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Home.module.css'

const Footer = () => {
    return ( 
        <footer>
           <a className={styles.footertext}> © Vít Smolík 2022</a> <br></br>
            <Image src="/cib-github.svg" width={17} height={17}></Image> Tahle stránka je na <Link legacyBehavior href="https://github.com/Smajlll/vitekWeb"><a className={styles.footerlink}>Githubu</a></Link><br></br> 
        </footer>
     );
}
 
export default Footer;
