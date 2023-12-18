import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import loginIcon from '../assets/login.svg'
import fbIcon from '../assets/facebook.svg'
import instaIcon from '../assets/instagram.svg'
import ytIcon from '../assets/youtube.svg'
import ggStoreIcon from '../assets/google.svg'
import apStoreIcon from '../assets/apple.svg'
import './globals.scss'
import styles from './layout.module.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bike!',
  description: 'Web Visualization\'s final assignment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header and navbar */}
        <header className={styles.header}>
          <h1 className="text-4xl font-bold italic">
            <Link href="/">Bike!</Link>
          </h1>
          
          <div className={styles.icons}>
            <nav className="max-[767px]:hidden font-bold space-x-2">
              <ul className={styles.menu}>
                <Link href="/" className="border-r-2 px-1.5 lg:px-10 hover:bg-green"><li>🏠</li></Link>
                <Link href="/howtouse" className="border-r-2 px-1.5 lg:px-10 hover:bg-green">
                  <li>How to use <span className="italic">Bike!</span></li>
                </Link>
                <Link href="/fares" className="border-r-2 px-1.5 lg:px-10 hover:bg-green"><li>Fares</li></Link>
                <Link href="/ctmservice" className="lg:border-r-2 px-1.5 lg:px-10 hover:bg-green"><li>Customer service</li></Link>
              </ul>
            </nav>
            <Image 
              src={loginIcon} 
              alt="Login"
              width={40}
              height={40} />
          </div>
        </header>

        <nav className="md:hidden text-sm text-white font-bold bg-green space-x-2">
          <ul className={styles.menu}>
            <Link href="/" className="border-r-2 px-1.5 hover:bg-orange"><li>🏠</li></Link>
            <Link href="/howtouse" className="border-r-2 px-1.5 hover:bg-orange">
              <li>How to use <span className="italic">Bike!</span></li>
            </Link>
            <Link href="/fares" className="border-r-2 px-1.5 hover:bg-orange"><li>Fares</li></Link>
            <Link href="/ctmservice" className="px-1.5 hover:bg-orange"><li>Customer service</li></Link>
          </ul>
        </nav>

        {/* Body */}
        <div>{children}</div>

        {/* Footer */}
        <footer className={styles.footer}>
          <h1 className="text-3xl text-white font-bold italic">Bike!</h1>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print, 
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <div className={styles.footNav}>
            <ul className="mr-5 mb-5 lg:mr-20 leading-loose">
              <li><Link href="/">Home</Link></li>
              <li>
                <Link href="/howtouse">How to use <span className="font-bold italic">Bike!</span></Link>
              </li>
              <li><Link href="/fares">Fares</Link></li>
              <li><Link href="/ctmservice">Customer service</Link></li>
            </ul>
            <ul className="mr-5 pl-5 lg:mr-20 lg:pl-20 leading-loose">
              <li className="font-bold">Contact us</li>
              <li>+33 2 9489 9487</li>
              <li>info@bike.com</li>
              <li className="flex gap-3 lg:gap-10 items-center">
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
              </li>
            </ul>
            <ul className="md:pl-5 lg:pl-20 leading-loose">
              <li className="font-bold">Download <span className="italic">Bike!</span> app</li>
              <li className="flex gap-3 lg:gap-10 items-center">
                <Image
                  src={ggStoreIcon}
                  alt="Google Play Store icon"
                  width={30}
                  height={30} />
                <Image
                  src={apStoreIcon}
                  alt="Apple App Store icon"
                  width={30}
                  height={30} />
              </li>
            </ul>
          </div>
          <p className="text-center text-white/50 text-sm">© 2023. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
