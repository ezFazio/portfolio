import styles from "./technologiesList.module.css"
import technologies from "@/data/technologies/technologies.json"

const TechnologiesList = () => {
  return (
    <div className={styles.technologiesList}>
      {
        technologies.map((technology, key) => {
          return (
            <div className={styles.technologyContainer} id={technology.id + "-technology-section-" + key}>
              <p className={styles.technology}>{technology.name}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default TechnologiesList;