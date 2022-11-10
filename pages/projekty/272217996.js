import Link from "next/link";
import styles from "../../styles/Projekty.module.css"

const config = () => {
    return ( 
        
        <div>
            <h1>StickyNotes-with-code</h1>
            <p className={styles.text}>Účel: Tento repositář byl můj první repositář na githubu a zároveň moje první desktop GUI aplikace v C#. Byla to aplikace ve které byl pouze text box a pár tlačítek. Proto stickynotes :D</p>
            <p className={styles.text}>Je tento repositář fork? Ne.</p>
            <Link legacyBehavior href="https://github.com/Smajlll/StickyNotes-with-code"><a className={styles.btn}>Odkaz na tento repositář</a></Link>
        </div>
        
     );
}
 
export default config;