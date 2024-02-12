import React from 'react'
import styles from "./Pictures.module.css";
import { getImageUrl } from "../../utils";
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export const Pictures = () => {
    const fadeImages = [
        getImageUrl("pictures/img1.jpg"),
        getImageUrl("pictures/img2.jpg"),
        getImageUrl("pictures/img3.jpg"),
        getImageUrl("pictures/img4.jpg"),
        getImageUrl("pictures/img5.jpg"),
      ];
  return (
    <section className={styles.container} id="pictures">
      <h2 className={styles.title}>-Pictures from last year-</h2>
      <br></br>
      <div className="slide-container">
      <Fade>
        <div className={styles.fade}>
          <img src={fadeImages[0]} />
        </div>
        <div className={styles.fade}>
          <img src={fadeImages[1]} />
        </div>
        <div className={styles.fade}>
          <img src={fadeImages[2]} />
        </div>
        <div className={styles.fade}>
          <img src={fadeImages[3]} />
        </div>
        <div className={styles.fade}>
          <img src={fadeImages[4]} />
        </div>
      </Fade>

    </div>
    </section>
  )
}
