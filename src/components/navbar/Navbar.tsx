"use client";
import React from "react";
import { TiThMenu } from "react-icons/ti";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [open, setOpen] = React.useState<boolean>(false);

  const showFunc = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className={styles.nav}>
        <h1>Fashion.</h1>

        <AnimatePresence>
        {open == true ? (
          <motion.div className={`${styles.linksDiv} ${styles.adjust}`} 
            key={"menu"}
            initial={{height: 0, opacity: 0}}
            animate={{height: "350px", opacity: 1}}
            exit={{height: 0, opacity: 0}}
            transition={{duration: 0.4}}
            >
            <ul>
              <li>
                <Link href="/" style={{ color: "#365567", fontWeight: "600" }}>
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/shop">SHOP</Link>
              </li>
              <li>
                <Link href="/">FEATURES</Link>
              </li>
              <li>
                <Link href="/">CONTACT</Link>
              </li>
            </ul>

            <button>LOGIN</button>
          </motion.div>
          
        ) : (
          <div className={`${styles.linksDiv}`}>
            <ul>
              <li>
                <Link href="/" style={{ color: "#365567", fontWeight: "600" }}>
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/shop">SHOP</Link>
              </li>
              <li>
                <Link href="/">FEATURES</Link>
              </li>
              <li>
                <Link href="/">CONTACT</Link>
              </li>
            </ul>

            <button>LOGIN</button>
          </div>
        )}
      </AnimatePresence>

        <TiThMenu size={35} className={styles.menu} onClick={showFunc} />
      </nav>
    </>
  );
}

export default Navbar;
