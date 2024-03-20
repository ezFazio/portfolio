'use client'
import styles from "./quote.module.css"
import QuoteCard from "./quoteCard"
import quotes from "@/data/quotes/quotes.json"
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Quote = () => {
  const responsive = {
    all: {
      breakpoint: { max: 99999, min: 0 },
      items: 1
    }
  };
  return (
    <div className={styles.quote}>
      <img
        className={[styles.quoteMark, styles.quoteMarkStart].join(' ')}
        src={"/img/quote-marks.svg"}
        alt={"Quotemark start"}
        key={"quotemark-start"}
      />
      <Carousel responsive={responsive} sliderClass={styles.quotesSlider} autoPlay={true} autoPlaySpeed={5000} arrows={false} showDots={false} infinite={true} styles={{width: "100%"}}>
        {
          quotes.map((quote) => {
            return (
              <QuoteCard text={quote.text} autor={quote.autor} key={quote.id} id={quote.id} />
            )
          })
        }
      </Carousel>
      <img
        className={[styles.quoteMark, styles.quoteMarkEnd].join(' ')}
        src={"/img/quote-marks.svg"}
        alt={"Quotemark end"}
        key={"quotemark-en"}
      />
    </div>
  )
}

export default Quote;