import Link from 'next/link';
import styles from '../../styles/Projekty.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://api.github.com/users/smajlll/repos');
    const data = await res.json();
  
    return {
      props: { repos: data }
    }
  }
  
  const repos = ({ repos }) => {
  
    return (
      <div>
        <h1 className={styles.title}>Všechny moje Github repositáře</h1>
        {repos.map(repo => (
          <Link legacyBehavior href={'/projekty/' + repo.id}key={repo.id}>
            <a className={styles.single}>
              <h3>{ repo.name }</h3>
            </a>
          </Link>
        ))}
      </div>
    );
  }
   
  export default repos;