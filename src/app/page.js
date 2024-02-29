import Profile from '@/components/profile'
import styles from "./page.module.css"
import Technologies from '@/components/technologies'


export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <Profile/>
      </section>
      <section className={styles.backgroundDiagonal}>
        <div className={styles.diagonal}></div>
      </section>
      <section>
        <Technologies/>
      </section>
    </main>
  )
}
