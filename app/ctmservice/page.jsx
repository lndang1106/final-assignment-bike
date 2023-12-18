import styles from './page.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import fbIcon from '../../assets/facebook_bl.svg'
import instaIcon from '../../assets/instagram_bl.svg'
import ytIcon from '../../assets/youtube_bl.svg'

export default function HowToUse() {
  return (
    <div className="text-black">
      <div className={styles.scrollText}>
        <h1 className={styles.text}>
          Customer service Customer service Customer service Customer service
        </h1>
        <h1 className={styles.text}>
          Customer service Customer service Customer service Customer service
        </h1>
      </div>

      <form className={styles.form}>
        <fieldset className="flex flex-col">
          <div className={styles.cta}>
            <legend className="text-2xl font-bold text-center pb-3">
              Contact form
            </legend>
            <p>
              Send us suggestions, feedback, complaints, praises, notice of lost properties, 
              questions, or other comments.
            </p>
          </div>
          <div className={styles.fields}>
            <div className={styles.name}>
              <div className={styles.fname}>
                <label htmlFor="fname">
                  First name <span className="font-bold text-red-500">*</span>
                </label>
                <input className={styles.input} type="text" name="fname" required />
              </div>
              <div className={styles.lname}>
                <label htmlFor="lname">
                  Last name <span className="font-bold text-red-500">*</span>
                </label>
                <input className={styles.input} type="text" name="lname" required />
              </div>
            </div>

            <label htmlFor="phone">
              Phone number <span className="font-bold text-red-500">*</span>
            </label>
            <input className={styles.input} type="text" name="phone" required />

            <label htmlFor="email">Email address</label>
            <input className={styles.input} type="email" name="email" />

            <label htmlFor="comment">
              What do you want to tell us? <span className="font-bold text-red-500">*</span>
            </label>
            <textarea className={styles.input} type="text" name="comment" rows="8" required></textarea>
          </div>

          <input className={styles.input} type="submit" value="Submit" />
        </fieldset>
      </form>

      <div className={styles.moreInfo}>
        <h1 className="text-2xl font-bold pb-3">
          or contact us via...
        </h1>
        <p className="font-bold">Our offices in Paris, Amsterdam, and Berlin</p>
        <Link href="#" className="italic">
          See all office locations and opening hours
        </Link>
        <p className="font-bold mt-5 mb-5">
          Our phone number <span className="italic text-green">+33 2 9489 9487</span>
        </p>
        <p className="font-bold mb-5">
          Our email address <span className="italic text-green">info@bike.com</span>
        </p>
        <p className="font-bold">Our social media pages</p>
        <p className="flex gap-3 lg:gap-10 items-center">
          <Image
            src={fbIcon}
            alt="Facebook icon"
            width={30}
            height={30} />
          <Image
            src={instaIcon}
            alt="Instagram icon"
            width={30}
            height={34} />
          <Image
            src={ytIcon}
            alt="Youtube icon"
            width={34}
            height={34} />
        </p>
      </div>
    </div>
  )
}