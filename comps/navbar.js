import Link from 'next/link'

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>List</h1>
            </div>
                <Link legacyBehavior href="/"><a>Domovská stránka </a></Link>
               <Link legacyBehavior href="/about"><a>O mně </a></Link>
                <Link legacyBehavior href="/projekty"><a>Projekty </a></Link>
                <Link legacyBehavior href="/blog"><a>Můj Blog </a></Link>
        </nav>
     );
}
 
export default Navbar;