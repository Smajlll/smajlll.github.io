import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)
    }, [])
    

    return ( 
        <>
        <Head>
            <title>Vítek | 404</title>
        </Head>
            <div className="not-found">
                <h1>Jejda....</h1>
                <h2>Tahle stránka nebyla nalezena.</h2>
                <p>Zkus se vrátit zpět <Link legacyBehavior href="/"><a>na domovskou stránku.</a></Link></p>
            </div>
        </>
     );
}
 
export default NotFound;