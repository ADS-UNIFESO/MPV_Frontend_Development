import styles from "./styles.module.css";
import React from "react";

export default function InfosBanner({ type }) {
  // eslint-disable-next-line
  const [filteredId, filteredBanner, background, revertPosition, anchor] = type;
  return (
    <>
      {filteredBanner.map((banner) => (
        <section
          className={styles.main}
          id={anchor}
        >
          <div className={styles.content}>
            <h2>Notícias do mês</h2>
            {banner.items.map((props) => (
              <div className={styles.cards}>
                <div className={styles.imageBox}>
                  <img
                    src={props.image}
                    alt=''
                  />
                </div>
                <div className={styles.text}>
                  <div className={styles.infos}>
                    <h3 className={styles.theme}>{props.title}</h3>
                    <p className={styles.paragraph}>{props.paragraph}</p>
                  </div>
                  <p className={styles.date}>{props.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
