import Profile from '@/components/profile-section/profile'
import styles from "./page.module.css"
import Technologies from '@/components/technologies-section/technologies'
import Projects from '@/components/projects-section/projects'
import Quote from '@/components/quote-section/quote'
import Navbar from '@/components/navbar/navbar'


export default function Home() {
  const sections = [
    { id: 'profile', title: 'Profile' },
    { id: 'projects', title: 'Projects' },
    { id: 'technologies', title: 'Technologies' },
    { id: 'quotes', title: 'Quotes' }
  ];
  return (
    <main className={styles.main}>
      <Navbar sections={sections} />
      <section id="profile">
        <Profile />
      </section>
      <div className={styles.diagonal}></div>
      <section id="projects">
        <Projects />
      </section>
      <section id="technologies">
        <Technologies />
      </section>
      <section id="quotes">
        <Quote />
      </section>
    </main>
  )
}
