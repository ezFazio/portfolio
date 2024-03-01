import styles from "./profileInfo.module.css"

const ProfileInfo = () => {
  return (
    <div className={styles.profileInfo}>
      <h1 className={styles.title}>Ezequiel Fazio</h1>
      <p className={styles.info}>FRONTEND DEVELOPER</p>
    </div>
  )
}

export default ProfileInfo