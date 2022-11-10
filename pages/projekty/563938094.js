import Link from "next/link";
import styles from "../../styles/Projekty.module.css"

const config = () => {
    return ( 
        
        <div>
            <h1>vitekWeb</h1>
            <p className={styles.text}>Účel: Tento repositář je repositář tohoto werbu, protože tento web je opensouce. Tento web je naprogramován v JavaScriptu s frameworkem NextJS.</p>
            <p className={styles.text}>Je tento repositář fork? Ne.</p>
            <Link legacyBehavior href="https://github.com/Smajlll/vitekWeb"><a className={styles.btn}>Odkaz na tento repositář</a></Link>
        </div>
        
     );
}
 
export default config;