import Link from "next/link";
import styles from "../../styles/Projekty.module.css"

const config = () => {
    return ( 
        
        <div>
            <h1>LinuxChallenge</h1>
            <p className={styles.text}>Účel: Tento repositář jsem používal když jsem se snažil naučit mého bratra používat GNU/Linux a příkazy v něm.</p>
            <p className={styles.text}>Je tento repositář fork? Ne.</p>
            <Link legacyBehavior href="https://github.com/Smajlll/LinuxChallenge"><a className={styles.btn}>Odkaz na tento repositář</a></Link>
        </div>
        
     );
}
 
export default config;