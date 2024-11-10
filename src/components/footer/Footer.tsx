import styles from './Footer.module.css'
import {inter, ibmPlexSerif} from "@/font"
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  return (
    <div>
      <section className={`${styles.footer} ${inter.className}`}>
        <div className={styles.fashion}>
          <h1>Fashion.</h1>
          <p className={ibmPlexSerif.className}>SOCIAL MEDIA</p>
          <div className={styles.iconsDiv}>
            <FaFacebookSquare size={40} color='blue'/>
            <FaXTwitter size={40} color='black'/>
            <RiInstagramFill size={40} color='#E1306C'/>
          </div>
        </div>

        <div className={styles.ShopDiv}>
          <h1>SHOP</h1>
          <ul>
            <li>Product</li>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Release</li>
          </ul>
        </div>

        <div className={styles.companyDiv}>
          <h1>COMPANY</h1>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>News</li>
            <li>Support</li>
          </ul>
        </div>

        <div className={styles.submitDiv}>
          <h1>STAY UP TO DATE</h1>

          <div className={styles.inputDiv}>
            <input type="text" placeholder='Enter your email' className={styles.input}/>
            <button>SUBMIT</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer