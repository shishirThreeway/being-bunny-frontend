import styles from "./Navbar.module.scss";
import { Logo } from "../";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { icons } from "../../assets";
import { IconButton } from "../";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../utils/context";

const { instagram, twitter, discord, redirect } = icons;
const navLinks = [
  {
    name: "Home",
    to: "/",
  },
  // {
  //   name: "OG",
  //   to: "/og",
  // },

  {
    name: "Roadmap",
    to: "/roadmap",
  },
  {
    name: "Team",
    to: "/team",
  },
  {
    name: "Engine Room",
    to: "/team",
  },
];

const socials = [
  // {
  //   name: "Instagram",
  //   icon: instagram,
  //   href: "https://www.youtube.com/",
  // },
  {
    name: "Discord",
    icon: discord,
    href: "https://discord.gg/SbSm92ZMEr",
  },
  {
    name: "Twitter",
    icon: twitter,
    href: "https://twitter.com/Being_BunnyNFT",
  },
];

const Navbar = ({ isFirstTime }) => {
  const navigate = useNavigate();
  const {
    slideNo,
    setSlideNo,
    translationWiseSlideNo,
    horizontalSliderRef,
    setCurrentTranslation,
  } = useContext(GlobalContext);
  function handleClick(index) {
    const newTranslation = translationWiseSlideNo[index];
    horizontalSliderRef.current.style.transform = `translate(${newTranslation}vw,0)`;
    setCurrentTranslation(newTranslation);
    setSlideNo(index + 1);
  }
  return (
    <nav className={styles.container}>
      <div className={styles.backgroundColor}></div>
      <div
        style={
          isFirstTime ? { backdropFilter: "none", background: "unset" } : {}
        }
        className={styles.maxWidthContainer}
      >
        <div
          style={{
            cursor: "pointer",
          }}
          onClick={() => handleClick(0)}
          className={styles.logo}
        >
          <Logo />
          <h3 style={{ color: "var(--clr-primary)" }}>BEING BUNNY</h3>
        </div>
        {isFirstTime || (
          <div className={styles.navLinks}>
            {navLinks.map((link, index) => (
              <p
                end
                onClick={index == 3 ? () => {} : () => handleClick(index)}
                className={clsx(
                  index == 3 && styles.engineRoom,
                  styles.navLink,
                  index == slideNo - 1 && index !== 3
                    ? styles.active
                    : styles.inactive
                )}
              >
                {link.name}
              </p>
            ))}
          </div>
        )}
        {isFirstTime || (
          <a href="https://being-bunny-nft-mint.netlify.app/" target="blank">
            <button className={styles.mintingButton}>Mint</button>
          </a>
        )}
        {isFirstTime || (
          <div className={styles.social}>
            {socials.map((social, index) => (
              <IconButton
                key={index}
                icon={social?.icon}
                href={social?.href}
                target="blank"
              />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
