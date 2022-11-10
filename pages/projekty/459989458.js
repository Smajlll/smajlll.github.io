import Link from "next/link";
import styles from "../../styles/Projekty.module.css"

const config = () => {
    return ( 
        
        <div>
            <h1>Smajlll</h1>
            <p className={styles.text}>Účel: Tento repositář používám, abych mohl mít README.md na svéh github profilu.</p>
            <p className={styles.text}>Je tento repositář fork? Ne.</p>
            <Link legacyBehavior href="https://github.com/Smajlll/Smajlll"><a className={styles.btn}>Odkaz na tento repositář</a></Link>
        </div>
        
     );
}
 
export default config;