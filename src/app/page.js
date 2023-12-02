import styles from './page.module.css';
import { TopPage } from './TopPage';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <TopPage/>
      </div>
    </main>
  )
}
