import styles from "./technologies.module.css"
import TechnologiesList from "./technologiesList";


const Technologies = () => {
  return (
    <div className={styles.technologies}>
      <div className={styles.backgroundImageContainer}>
        <h2>Technologies</h2>
        <img className={styles.backgroundImage} src="/img/technologies.jpg"></img>
      </div>
        <TechnologiesList />
    </div>
  )
}

export default Technologies;