import styles from "@/components/Header/Header.module.css";
import IconVercel from "../../../public/icons/Vercel.svg";
import IconHome from "../../../public/icons/Home.svg";
import IconFacebook from "../../../public/icons/face.svg";
import IconInstagram from "../../../public/icons/insta.svg";
import IconTwitter from "../../../public/icons/twitter.svg";
import IconRegister from "../../../public/icons/Register.svg";
import { Button } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const socialMediaLinks = [
    {
      icon: <IconFacebook />,
      link: "https://www.facebook.com/BillGates/",
    },
    {
      icon: <IconInstagram />,
      link: "https://www.instagram.com/thisisbillgates/",
    },
    {
      icon: <IconTwitter />,
      link: "https://twitter.com/BillGates",
    },
  ];

  const links = socialMediaLinks.map(({ icon, link }) => {
    return (
      <>
        <li key={link}>
          <Link href={link} target="_blank">
            {icon}
          </Link>
        </li>
      </>
    );
  });

  const [showMenu, setShowMenu] = useState(false);

  const handleOpenMenu = () => setShowMenu(true);
  const handleCloseMenu = () => setShowMenu(false);

  return (
    <>
      <header className={styles.headerMediaQ}>
        <IconVercel onClick={handleOpenMenu} />
        <h2>Vercel</h2>
      </header>
      <aside className={`${styles.wrapper} ${showMenu && styles.showSidebar}`}>
        <header className={styles.header}>
          <IconVercel onClick={handleCloseMenu} />
          <h1>Vercel</h1>
        </header>
        <section>
          <ul className={styles.links}>
            <li>
              <Button variant="outlined" className={styles.btn} href="/">
                <IconHome />
                Inicio
              </Button>
            </li>
            <li>
              <Button
                variant="outlined"
                className={styles.btn}
                href="/inventary"
              >
                <IconRegister />
                Inventario
              </Button>
            </li>
          </ul>
        </section>
        <footer>
          <small>&copy; 2023 Vercel, Inc.</small>
          <ul className={styles.socialMediaFooter}>{links}</ul>
        </footer>
      </aside>
    </>
  );
};

export default Header;
