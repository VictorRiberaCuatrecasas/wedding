import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./MainNavigation.module.scss";
import HamburgerMenu from "../navbar/HamburgerMenu";
import LocaleSelector from "../navbar/LocaleSelector";

export default function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isTopScrollPos, setIsTopScrollPos] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsNavbarVisible(
        prevScrollPos > currentScrollPos || currentScrollPos < 10
      );
      setPrevScrollPos(currentScrollPos);
      window.pageYOffset === 0 ? setIsTopScrollPos(true) : setIsTopScrollPos(false)
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isNavbarVisible ? "" : styles.hidden}  ${isTopScrollPos && styles.topScroll}`}>
      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ""}`}>
        <li>
          <Link href="/test1">Test1</Link>
        </li>
        <li>
          <Link href="/test2">Test2</Link>
        </li>
        <li>
          <Link href="/test3">Test3</Link>
        </li>
      </ul>
      <LocaleSelector />
      <HamburgerMenu handleMenu={handleMenuClick} />
    </nav>
  );
}
