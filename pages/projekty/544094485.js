import Link from "next/link";
import styles from "../../styles/Projekty.module.css"

const config = () => {
    return ( 
        
        <div>
            <h1>onygteeeest</h1>
            <p className={styles.text}>Účel: Tento repositář jsem používal když jsem se snažil naučit mého bratra používat Github, u tohoto repositáře to bylo používání PullRequestů.</p>
            <p className={styles.text}>Je tento repositář fork? Ano.</p>
            <Link legacyBehavior href="https://github.com/Smajlll/onygteeeest"><a className={styles.btn}>Odkaz na tento repositář</a></Link>
            <Link legacyBehavior href="https://github.com/OndrSma/onygteeeest"><a className={styles.btn}>Odkaz na originální repositář</a></Link>
        </div>
        
     );
}
 
export default config;