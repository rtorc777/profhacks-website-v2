import React from "react";
import { useTypewriter, Cursor} from 'react-simple-typewriter';
import 'react-simple-typewriter/dist/index'
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    const [test] = useTypewriter({
        words: ['GAMES!', 'FUN!', 'CODING!', 'PRIZES!'],
        loop: 0,
        typeSpeed: 160,
        deleteSpeed: 80
    });

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Rowan IEEE's 
        <br></br>Annual Hackathon <br></br>full of 
        <span> <u>{test}</u></span>
        
        <Cursor />
        
        </h1>
        <br></br>
        <p className={styles.description}>
        <u>Date:</u> March 23-24, 2024
        <br></br>
        <u>Location:</u> 401 North Campus Drive (ENGR Building)
        </p>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSe3HJfoPPmcmg1yitpUBOZODRnbgKf-hdnVA88mb18SbEtUCQ/viewform?vc=0&c=0&w=1&flr=0' target="_blank" className={styles.contactBtn}>
          Register here!
        </a>
      </div>
      <img
        src={getImageUrl("hero/ProfHacks2024Logo (1).png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};