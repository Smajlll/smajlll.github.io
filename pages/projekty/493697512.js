import Link from "next/link";
import styles from "../../styles/Projekty.module.css"

const config = () => {
    return ( 
        
        <div>
            <h1>tuts</h1>
            <p className={styles.text}>Účel: Tento repositář jsem používal a stále i občas používám, když jsem se učil pracovat s Doom Emacs a ORG módem. Dávám do něj tutoriály o věcech co mě zajímali.</p>
            <p className={styles.text}>Je tento repositář fork? Ne.</p>
            <Link legacyBehavior href="https://github.com/Smajlll/tuts"><a className={styles.btn}>Odkaz na tento repositář</a></Link>
        </div>
        
     );
}
 
export default config;