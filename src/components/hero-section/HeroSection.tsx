import Image from 'next/image';
import { italiana, instrumentSans } from '@/font';
import styles from './HeroSection.module.css'

function HeroSection() {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <h1 className={italiana.className}>Discover And <br />Find Your <br />Own Fashion</h1>

          <p className={instrumentSans.className}>Explore our curated collection of stylish <br />clothing and accessories trailed to your <br />unique taste</p>

          <button className={instrumentSans.className}>EXPLORE NOW</button>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.heroRightImgBackground}>
            <Image src={"/myImage/mainImage.png"} alt='men picture' width={266} height={599}></Image>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection