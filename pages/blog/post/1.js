import styles from '/styles/Home.module.css'
import Head from 'next/head';

const post1 = () => {
    return (
    <> 
        <Head>
            <title>Vítek | Jen začátek...</title>
        </Head>
        <div>
        <h1 className={styles.title}>Jen začátek...</h1>
        <p>Ahoj, tady Vítek a první blog post, jsem rád, že jste se rozhodli přidat se se mnou na tuhle cestu. Tahle cesta bude o tom všem co se snažím naučit, co umím, co dělám a co učím. Můj cíl je, aby jste mohli pokračovat se mnou, s tím že oba budeme na stejné notě, se stejným softwarem a našimi vlastními zkušenostmi. Tenhle blog bude taková má dokumentace této cesty, ale taky se s tím budu učit jeden z mých cílu, umět vyvýjet weby. Díky za přečtení, zase příště,✌️.</p>
        </div>
    </>
     );
}
 
export default post1;