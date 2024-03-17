import Profile from '@/components/profile-section/profile'
import styles from "./page.module.css"
import Technologies from '@/components/technologies-section/technologies'
import Projects from '@/components/projects-section/projects'
import Quote from '@/components/quote-section/quote'


export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <Profile/>
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Technologies/>
      </section>
      <section>
        <Quote />
      </section>
    </main>
  )
}
