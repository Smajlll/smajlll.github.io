import Link from "next/link";
import styles from "../../styles/Projekty.module.css"

const config = () => {
    return ( 
        
        <div>
            <h1>Google Play Downloader</h1>
            <p className={styles.text}>Účel: Tento repositář je aplikace ke stahování .apk souborů z Google Play.</p>
            <p className={styles.text}>Je tento repositář fork? Ano.</p>
            <Link legacyBehavior href="https://github.com/Smajlll/google-play-downloader/"><a className={styles.btn}>Odkaz na tento repositář</a></Link>
            <Link legacyBehavior href="https://github.com/bluemutedwisdom/google-play-downloader/"><a className={styles.btn}>Odkaz na originální repositář</a></Link>
        </div>
        
     );
}
 
export default config;