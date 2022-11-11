import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

const About = () => {
    return (
        <>
            <Head>
                <title>Vítek | O mně</title>
            </Head>
            <div>
                <h1 className={styles.title}>O Mně</h1>
                <p className={styles.text}>Ahoj, jmenuji se Vítek, ale hodně lidí mi říká Smajl, rád hraji hry a programuji. Mé oblíbené hry jsou Minecraft, shapezio a Valorant. Rád programuji v C#, C++ a Pythonu, také se učím programovat weby, tím pádem HTML, CSS a JavaScript. Programování se věnuji už od roku 2017, kdy jsem začínal s C# a Visual Studiem ve kterém do teď jsou Windows Forms, které jsem použil při programování v roce 2017. Jeden z mých prvních projektů se mi dokonce podařilo archivovat v roce 2020 na <Link legacyBehavior href="https://github.com/Smajlll/StickyNotes-with-code"><a className={styles.text}>Github</a></Link>, takže se na něj můžete podívat, nyní je ale archivován.</p>
            </div>
        </>
    );
}

export default About;