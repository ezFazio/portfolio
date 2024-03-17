import Socials from "../shared/socials"
import styles from "./profileCard.module.css"
import ProfileInfo from "./profileInfo"
import Introduction from "./introduction"


const ProfileCard = () => {
  return (
    <div className={styles.profileCard}>
      <Introduction />
      <ProfileInfo />
      <Socials />
      <button className={styles.downloadButton}>
        Download CV
      </button>
    </div>
  )
}

export default ProfileCard