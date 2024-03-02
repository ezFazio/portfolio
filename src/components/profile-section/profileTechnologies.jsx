import styles from "./profileTechnologies.module.css"
import portfolioTechnologies from "@/data/profile/portfolioTechnologies.json"

const ProfileTechnologies = () => {

  return (
    <div className={styles.profileTech}>
      <h2 className={styles.profileTechTitle}>This site was made with</h2>
      <div className={styles.techsContainer}>
        {
          portfolioTechnologies.map((element, key) => (//key={"link-socials-" + element.id + "-" + key}
            <div
              className={styles.profileTechContainer}
              key={"profileTechnologies-" + element.id + "-" + key}
            >
              <img
                className={styles.profileTechImage}
                src={element.img}
                alt={element.id}
                key={"profileTechnologies-img-" + element.id + "-" + key}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProfileTechnologies