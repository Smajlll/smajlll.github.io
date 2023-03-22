import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

const About = () => {
    return (
        <>
            <Head>
                <title>Vítek | GPG Klíč</title>
            </Head>
            <div>
                <h1 className={styles.title}>Můj GPG Klíč</h1>
                <p className={styles.codesnip}>-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEZBtEghYJKwYBBAHaRw8BAQdADq2MZLBpUzMOdesym4WMjBu3xPy/6G3Hnkpy
lq3I2we0KlbilJzFn3QgU21vbOKUnMWfayA8dml0LnNtb2xpazJAZ21haWwuY29t
PoiTBBMWCgA7FiEE5YS9R9TnmEM4uxq7tTyUe4iCWKQFAmQbRIICGwMFCwkIBwIC
IgIGFQoJCAsCBBYCAwECHgcCF4AACgkQtTyUe4iCWKSupgEAmcI1ad4udDsmsHMR
3mYPab4pTMYHj2mAXYse9E9epRwBAK2BAeCFPTQWp0zq+GRQdmvR0X10KjcV53yj
yHPulCQHuDgEZBtEghIKKwYBBAGXVQEFAQEHQD/vCrZoHUApdoeFNaCBpSSTN0Ii
BYEyg7/4TO/P71xUAwEIB4h4BBgWCgAgFiEE5YS9R9TnmEM4uxq7tTyUe4iCWKQF
AmQbRIICGwwACgkQtTyUe4iCWKRUUgEAyncX1YEv7MuZPy/4laJVYSqgqBxrJVJK
i7qV+oS6I3gBAKoEWc9p6lYsKa1Q6zkUnslZAdkaAXlKCFLy4iGXNk0G
=noIn
-----END PGP PUBLIC KEY BLOCK-----</p>
            </div>
        </>
    );
}

export default About;