import styles from './page.module.scss'

const daily = {
  type: "Daily",
  prices: [
    "Regular bikes only: 2,5 €/day",
    "All bikes: 4 €/day"
  ],
  pros: [
    "Bikes available for rent 24/7",
    "Affordable fares",
    "Easy, fast and accessible",
    "Suitable for tourists",
    "Unlimited trips in 24 hours"
  ]
}

const monthly = {
  type: "Monthly",
  prices: [
    "Regular bikes only: 33 €/month",
    "All bikes: 43 €/month"
  ],
  pros: [
    "Bikes available for rent 24/7",
    "Save more than 60%",
    "Easy, fast and accessible",
    "Suitable for daily commuting",
    "Unlimited daily trips"
  ]
}

// Don't forget curly brackets {} around the params
const FareType = ({type, prices, pros}) => {
  return (
    <div className={styles.fareType}>
      <div className={styles.mainInfo}>
        <h1 className="text-2xl font-bold text-center pb-3">{type}</h1>
        <div className="w-max">
          {prices.map((price, index) => <p key={index}>{price}</p>)}
        </div>
      </div>
      <ul className={styles.list}>
        {pros.map((pro, index) => <li key={index}>✅ {pro}</li>)}
      </ul>
      <button className={styles.button}>Buy</button>
    </div>
  )
}

export default function HowToUse() {
  return (
    <div className="text-black">
      <div className={styles.scrollText}>
        <h1 className={styles.text}>
          Fares Fares Fares Fares Fares Fares Fares Fares Fares
        </h1>
        <h1 className={styles.text}>
          Fares Fares Fares Fares Fares Fares Fares Fares Fares
        </h1>
      </div>

      <div className={styles.fareTypes}>
        <FareType
          type={daily.type} 
          prices={daily.prices} 
          pros={daily.pros} />
        <FareType 
          type={monthly.type}
          prices={monthly.prices}
          pros={monthly.pros} />
      </div>
    </div>
  )
}