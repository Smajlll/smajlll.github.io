import Link from "next/link";
import styles from "../../styles/Projekty.module.css"

const config = () => {
    return ( 
        
        <div>
            <h1>JCommands</h1>
            <p className={styles.text}>Účel: Java knihovna, pro jednodužší používání JDA.</p>
            <p className={styles.text}>Je tento repositář fork? Ano.</p>
            <Link legacyBehavior href="https://github.com/Smajlll/JCommands/"><a className={styles.btn}>Odkaz na tento repositář</a></Link>
            <Link legacyBehavior href="https://github.com/KoblizekXD/JCommands"><a className={styles.btn}>Odkaz na originální repositář</a></Link>
        </div>
        
     );
}
 
export default config;