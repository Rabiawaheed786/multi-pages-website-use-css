import styles from "./Heading.module.css"

function Heading() {
  return (
    <div className={styles.heading}>
      <h1>Our Product</h1>

      <div className={styles.underline}></div>

      <p>Here you can check our new products with fair price on Fashion.</p>
    </div>
  )
}

export default Heading