import styles from "./socials.module.css"
import socialNetworks from "@/data/shared/socialNetworks.json"
import Link from "next/link"

const Socials = (section) => {

  return (
    <div className={styles.socials}>
      {
        socialNetworks.map((element, key) => (
          <Link
            href={element.url}
            key={"link-socials-" + element.id + "-" + key}
          >
            <div
              className={styles.socialContainer}
              key={"socials-" + element.id + "-" + key}
            >
              <img
                className={styles.socialImage}
                src={element.img}
                alt={element.id}
                key={"socials-img-" + element.id + "-" + key}
              />
            </div>
          </Link>
      ))
      }
    </div>
  )
}

export default Socials