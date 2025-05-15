import styles from "./Logo.module.scss"

export const Logo = () => {

  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src="logo.png" alt="" />
    </div>
  )
}