import Image from "next/image";
import Link from "next/link";
const Footer = () => {
    return ( 
        <footer>
           <a> © Vít Smolík 2022</a> <br></br>
            <Image src="/cib-github.svg" width={17} height={17}></Image> Tahle stránka je na <Link legacyBehavior href="https://github.com/Smajlll/vitekWeb"><a>Githubu</a></Link> 
        </footer>
     );
}
 
export default Footer;
