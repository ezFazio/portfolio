import styles from "./profile.module.css"
import ProfileCard from "./profileCard"
import ProfileTechnologies from "./profileTechnologies"


const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.infoPhotoContainer}>
        <ProfileCard />
        <div className={styles.profilePhotoContainer}>
          <img
            className={styles.profilePhoto}
            src="/img/profile-photo.jpg">
          </img>
        </div>
      </div>
      <div className={styles.profileTechContainer}>
        <ProfileTechnologies />
      </div>
    </div>
  )
}

export default Profile