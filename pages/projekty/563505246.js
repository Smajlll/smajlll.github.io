import Link from "next/link";
import styles from "../../styles/Projekty.module.css"

const config = () => {
    return ( 
        
        <div>
            <h1>wsl-devdeploy</h1>
            <p className={styles.text}>Účel: Tento repositář je repositář pro můj bash script, který ve WSL 2 dokáže deploynout Dev Enviroment, s tím že stáhne configy a aplikace které jsou potřeba k WebDevu atd.</p>
            <p className={styles.text}>Je tento repositář fork? Ne.</p>
            <Link legacyBehavior href="https://github.com/Smajlll/wsl-devdeploy"><a className={styles.btn}>Odkaz na tento repositář</a></Link>
        </div>
        
     );
}
 
export default config;