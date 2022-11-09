import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])
    

    return ( 
    <div className="not-found">
        <h1>Jejda....</h1>
        <h2>Tahle stránka nebyla nalezena.</h2>
        <p>Zkus se vrátit zpět <Link legacyBehavior href="/"><a>na domovskou stránku.</a></Link></p>
    </div>
     );
}
 
export default NotFound;