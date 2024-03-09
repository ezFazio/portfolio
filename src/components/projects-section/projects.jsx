import styles from "./projects.module.css"
import projects from "@/data/projects/projects.json"

const Projects = () => {

  return (
    <div className={styles.projects}>
      <div className={styles.diagonal}></div>
    <div className={styles.projectsContent}>
      <h1>Projects</h1>
      <div className={styles.boxContainer}>
        {
          projects.map((project, key) => {
            return (
              <div className={styles.boxItem} key={"project-" + project.id + key}>
                <div className={styles.flipBox}>
                  <div className={[styles.flipBoxFront, styles.textCenter].join(' ')} style={{ backgroundImage: "url('" + project.imgFront + "')" }}>
                    <div className={[styles.inner, styles.colorWhite].join(' ')}>
                      <div className={styles.textBackground}>
                        <h3 className={styles.flipBoxHeader}>{project.title}</h3>
                        <p className={styles.frontP}>{project.technologies}</p>
                        <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" className={styles.flipBoxImg} />
                      </div>
                    </div>
                  </div>
                  <div className={[styles.flipBoxBack, styles.textCenter].join(' ')} style={{ backgroundImage: "url('" + project.imgBack + "')" }}>
                    <div className={[styles.inner, styles.colorWhite].join(' ')}>
                      <div className={styles.textBackground}>
                        <h3 className={styles.flipBoxHeader}>Resume</h3>
                        <p className={styles.backP}>{project.backInfo}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      </div>
    </div>
  )
}

export default Projects;