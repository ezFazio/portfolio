import styles from "./quoteCard.module.css"


const QuoteCard = ({ text, autor }) => {
  return (
    <div className={styles.quoteCard}>
      <p>{text}</p>
      <h2>{autor}</h2>
    </div>
  )
}

export default QuoteCard;