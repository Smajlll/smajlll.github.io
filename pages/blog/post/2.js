import styles from '/styles/Home.module.css'
import Head from 'next/head';
import Link from 'next/link';

const post2 = () => {
    return (
    <> 
        <Head>
            <title>Vítek | Next.JS Deployment</title>
        </Head>
        <div>
        <h1 className={styles.title}>Next.JS Deployment</h1>
        <p className={styles.text}>Ahoj, tady zas a znova Vítek, dneska se tady chci rozepsat o tom jak jsem deploynul NExt.JS aplikaci (tento web) za použití Githubu a Vercelu. </p><br></br>
        <h2 className={styles.blog_podnadpis}>Před tím než začnem</h2>
        <p className={styles.text}>Takže, před tím než začneme, budeme potřebovat zaregistrovat se na pár stránkách, takže pojďme na to.</p>
        <Link legacyBehavior href="https://github.com" ><a>1. Github</a></Link><a className={styles.text}> - Pro ty co neví co je Github, tak je to git server, můžete zde mít repositáře, a můžete díky němu používat Git Version Controll. Je to užitečná stránka, tak se zaregistrujte :D.</a><br></br>
        <Link legacyBehavior href="https://vercel.app" ><a>2. Vercel</a></Link><a className={styles.text}> - Tvůrce NExt.JS, tato stránka vám také umožní deploynout svoje NExt.JS aplikace (weby). Takže jej použijeme</a><br></br>
        <Link legacyBehavior href="https://www.freenom.com" ><a>3. Freenom</a></Link><a className={styles.text}> - TOTO NENÍ NUTNÉ, ale, tato stránka vám umožní si vydat vlastní doménu zdarma až na 12 měsíců, od nich mám doménu "www.smoliicek.tk".</a><br></br>
        <p className={styles.text}>Když máme toto připraveno tak musíme vytvořit naší NExt.JS app, to uděláme pomocí</p>
        <p className={styles.codesnip}>npx create-next-app</p>
        <p className={styles.text}>Zvolíme jestli chceme použít TS a zvolíme název našeho projektu.</p>
        <h2 className={styles.blog_podnadpis}>Github repositář</h2>
        <p className={styles.text}>Poté co máme vytvořenou naši NExt.js aplikaci a uděláme úpravy které chceme deploynout (UPOZORNĚNÍ - tohle není next.js tutoriál, najděte si něco na YT). Před tím než toto ale uděláme, musíme dostat náš kód na github. Takže pojďme na to!</p>
        <p className={styles.text}>Takže poté co si vytvoříme repositár na Githubu na <Link legacyBehavior href="https://github.com/new"><a>https://github.com/new</a></Link> tak do něj můžeme pushnout náš kód. Spustíme tedy proto příkaz</p>
        <p className={styles.codesnip}>git add . && git commit -m "SemSiNapišteCokolivAleNezapomeňteŽeTotoBudeVidětNaGithubu" && git push <odkaz na vaše github repo> main</odkaz></p>
        <h2 className={styles.blog_podnadpis}>Vercel Deployment</h2>
        <p className={styles.text}>Poté co toto uděláme, přejdeme na <Link legacyBehavior href="https://vercel.com/"><a>https://vercel.com/</a></Link> a zaregistrujeme se přez Github. Poté se dostaneme na náš dashboard, klikneme na continue with github a můžeme Vercelu dát přístup k našemu repositáři s naším webem. Autorizujeme Vercel bota k našemu repositáři, poté si zvolíme název našeho projektu, tento název bude použit i pro naší *.vercel.app doménu. Nakonec klikneme na tlačítko Deploy.</p>
        <h2 className={styles.blog_podnadpis}>Freenom doména</h2>
        <p className={styles.text}>Pokud chceme zdarma doménu od Freenom, musíme přejít na <Link legacyBehavior href="https://freenom.com"><a>https://freenom.com</a></Link> a do pole "Find new FREE domain" napíšeme "CoChceteJakoDomenu".tk. Pokud je dostupná tak jí můžeme až na 12 měsíců "koupit" zdarma. Proto to udělejte, ověřte svůj email a dokončete nákup. Poté přejdeme na <Link legacyBehavior href="https://my.freenom.com"><a>https://my.freenom.com</a></Link>, přihlásíme se a vpravo nahoře klikneme na "services" a tam "My domains". U naší domény klikneme na "Manage domain". Klikneme na "Managment tools" a tam na nameservers. Zvolíme že chceme použít custom nameserver.</p>
        <p className={styles.text}>Do Nameserver 1 zadáme:</p>
        <p className={styles.codesnip}>NS1.VERCEL-DNS.COM</p>
        <p className={styles.text}>A do Nameserver 2 zadáme:</p>
        <p className={styles.codesnip}>NS2.VERCEL-DNS.COM</p>
        <p className={styles.text}>Poté už stačí kliknout na change nameservers.</p>
        <h2 className={styles.blog_podnadpis}>Přidání domény do Vercelu</h2>
        <p className={styles.text}>Pro používání domény s naší NExt.js stránkou se přihlásíme se do Vercelu pomocí Githubu a zvolíme naší stránku. Dále klikneme na "View Domains" a do textového pole zadáme naši doménu, klikneme na Add a ve vyskakovacím okénku znovu klikneme na Add. Vercel nyní zkontroluje jestli používáme jejich name servery/DNS records. Pokud vám Vercel řekne, že máte špatnou konfiguraci, zkuste se znovu kouknout na Freenom a nebo prostě chvíli počkat. Dále už nám Vercel vygeneruje SSL certifikát pro naší doménu a máme hotovo! Náše stránka nyní používá naší doménu.</p>
        <h2 className={styles.blog_podnadpis}>Zakončení</h2>
        <p className={styles.text}>Nyní již máme deploynutou naši stránku na Vercelu s naší vlastní doménou. Pár věcí si je ale třeba zapamatovat, vaše vercel stránka bude reflektovat to, co máte ve své "main" branch ve vašem github repu. Proto netestované commity doporučuji dávat na vedlejší branch, nebo jako já prostě jeďte YOLO a pushujte rovnou do main branch. Zároveň, Vercel bot který byl přidán do vašeho github repa bude u každého pullrequestu/pushe testovat vaší stránku a ukáže vám pokud se stránka buildne správně, tak na to dávejte pozor. </p> 
        <p className={styles.text}>Díky za přečtení tohoto dlouhého blog postu, ✌️</p>
        </div>
    </>
     );
}
 
export default post2;