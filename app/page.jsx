import Image from 'next/image'
import hero from '../assets/hero.svg'
import styles from './page.module.scss'

export default function Home() {
  return (
    <div className="text-black">
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className="flex items-center md:ml-20 md:text-3xl lg:ml-80 lg:text-4xl xl:mb-5 font-bold">
            Travel
            <div className={styles.scroller}>
              <span className={styles.span}>
                green<br />
                healthily<br />
                inexpensively<br />
                comfortably
              </span>
            </div>
          </h1>
          <h1 className="md:ml-20 md:text-3xl lg:ml-80 lg:text-4xl">
            Use <span className={styles.bike}>Bike!</span> 🚲
          </h1>
        </div>
        <Image 
          className="opacity-75"
          src={hero}
          alt="Hero"
          width={500}
          height={100}
          style={{
            width: '100%',
            height: '30vw',
          }} />
      </div>

      <div className="mt-20 mx-5 md:mx-24 lg:,x-56 xl:mx-72 lg:mt-32 leading-relaxed">
        <h1 className="text-2xl font-bold text-center mb-10">
          What is <span className="font-bold text-green italic">Bike!</span>?
        </h1>
        <p className="text-justify mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
          culpa qui officia deserunt mollit anim id est laborum. 
        </p>
        <p className="text-justify mb-4">
          We are now present in 3 cities in Europe: Paris, Amsterdam and Berlin. 
          We do have plans to bring our bikes to many other cities around the world!
        </p>
        <ul className="flex justify-between">
          <li>
            <p className="text-center font-bold text-green">03</p>
            <p>cities</p>
          </li>
          <li>
            <p className="text-center font-bold text-green">4000+</p>
            <p>bikes</p>
          </li>
          <li>
            <p className="text-center font-bold text-green">&gt;9 million km</p>
            <p>travelled by users</p>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center mt-10 mx-5 md:mx-24 lg:mx-72 lg:mt-20 leading-relaxed">
        <h1 className="text-2xl font-bold text-center mb-10">
          Get <span className="font-bold text-green italic">Bike!</span> fares from only 2,5 €/day
        </h1>
        <ul>
          <li>✅ Much cheaper than driving cars</li>
          <li>✅ Environmentally friendly</li>
          <li>✅ Good for your health</li>
          <li>✅ Unlimited daily trips</li>
          <li>✅ And more...</li>
        </ul>
      </div>
    </div>
  )
}
