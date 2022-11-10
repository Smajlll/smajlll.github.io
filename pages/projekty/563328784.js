import Link from "next/link";
import styles from "../../styles/Projekty.module.css"

const config = () => {
    return ( 
        
        <div>
            <h1>Config</h1>
            <p className={styles.text}>Účel: Tento repositář slouží pro ukládání mých konfiguračních souborů, také některé mé scripty šahají právě do tohoto repositáře, pro stažení konfiguračních souborů.</p>
            <p className={styles.text}>Je tento repositář fork? Ne.</p>
            <Link legacyBehavior href="https://github.com/Smajll/config/"><a className={styles.btn}>Odkaz na tento repositář</a></Link>
        </div>
        
     );
}
 
export default config;