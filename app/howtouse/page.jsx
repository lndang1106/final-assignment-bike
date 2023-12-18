import styles from './page.module.scss'
import Image from 'next/image'
import heroImg from '../../assets/overpass.jpg'

export default function HowToUse() {
  return (
    <div className="text-black">
      <div className={styles.scrollText}>
        <h1 className={styles.text}>
          How to use <span className="italic">Bike!</span> How to use <span className="italic">Bike!</span> How to use <span className="italic">Bike!</span>
        </h1>
        <h1 className={styles.text}>
          How to use <span className="italic">Bike!</span> How to use <span className="italic">Bike!</span> How to use <span className="italic">Bike!</span>
        </h1>
      </div>

      <div className="mx-5 md:mx-24 lg:mx-32 xl:mx-72 leading-relaxed">
        <h1 className="text-2xl font-bold text-center mb-10">
          Steps you can follow
        </h1>
        <div className="text-justify mb-4 lg:mb-20 lg:flex lg:items-center">
          <p className="text-8xl text-center lg:text-7xl lg:mr-20">🔓</p><br />
          <p className="text-center">1. Unlock</p>
          <p className="lg:ml-20">Suspendisse ultrices gravida dictum fusce ut. Ipsum consequat nisl vel pretium lectus. 
          Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Est ante in nibh 
          mauris cursus mattis molestie a.</p>
        </div>
        <div className="text-justify mb-4 lg:mb-20 lg:flex lg:items-center">
          <p className="text-8xl text-center lg:text-7xl lg:mr-20">🚵</p><br/>
          <p className="text-center lg:px-2">2. Ride</p>
          <p className="lg:ml-20">Semper auctor neque vitae tempus. Malesuada pellentesque elit eget gravida cum sociis natoque.</p>
        </div>
        <div className="text-justify lg:flex lg:items-center">
          <p className="text-8xl text-center lg:text-7xl lg:mr-20">🥰</p><br/>
          <p className="text-center">3. Return</p>
          <p className="lg:ml-20">Congue eu consequat ac felis donec et odio. Facilisis sed odio morbi quis commodo odio aenean. 
          Vitae tortor condimentum lacinia quis vel. Dictum varius duis at consectetur lorem.</p>
        </div>
      </div>
    </div>
  )
}