import styles from "./profile.module.css"
import ProfileCard from "./profileCard"


const Profile = () => {
    return (
      <div className={styles.profile}>
        <ProfileCard />
      </div>
    )
  }
  
  export default Profile