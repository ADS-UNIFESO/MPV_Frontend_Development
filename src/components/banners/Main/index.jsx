import styles from "./styles.module.css";
import React from "react";

export default function MainBanner({ type }) {
  // eslint-disable-next-line
  const [filteredId, filteredBanner, background, revertPosition, anchor] = type;
  return (
    <>
      {filteredBanner.map((banner) => (
        <section
          style={
            !background && banner.background
              ? {
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner.background})`,
                  backgroundSize: "cover",
                }
              : background
              ? { backgroundColor: background }
              : undefined
          }
          className={styles.main}
          id={anchor}
        ></section>
      ))}
    </>
  );
}
