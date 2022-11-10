import Link from "next/link";
import styles from "../../styles/Projekty.module.css"

const config = () => {
    return ( 
        
        <div>
            <h1>htmltestlol</h1>
            <p className={styles.text}>Účel: Tento repositář jsem používal při zkoušení editoru Atom, jako vyzkoušení mých znalostí plain HTML a CSS. Tento projekt již není vyvýjen, protože textový editor Atom byl zrušen. :(</p>
            <p className={styles.text}>Je tento repositář fork? Ne.</p>
            <Link legacyBehavior href="https://github.com/Smajlll/htmltestlol"><a className={styles.btn}>Odkaz na tento repositář</a></Link>
        </div>
        
     );
}
 
export default config;