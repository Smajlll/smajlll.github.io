import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/mc-skin.jpg" width={80} height={80}/>
            </div>
                <Link legacyBehavior href="/"><a>Domovská stránka </a></Link>
               <Link legacyBehavior href="/ome"><a>O mně </a></Link>
                <Link legacyBehavior href="/projekty"><a>Projekty </a></Link>
                <Link legacyBehavior href="/blog"><a>Můj Blog </a></Link>
        </nav>
     );
}
 
export default Navbar;