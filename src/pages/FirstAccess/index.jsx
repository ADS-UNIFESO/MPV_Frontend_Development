import styles from "./styles.module.css";
import React from "react";

import unifesoData from "assets/json/unifesoData.json";
import MainBanner from "components/banners/Main";
import Login from "components/banners/Login";

export default function FirstAccess({ pageId }) {
  const filteredId = unifesoData.find((data) => data.id === pageId);
  if (!filteredId) {
    return null;
  }

  const { banners, ...filteredWithoutBanners } = filteredId;

  const filteredBanner = (type, background, revertPosition, anchor) => [
    filteredWithoutBanners,
    filteredId.banners.filter((banner) => banner.type === type),
    background,
    revertPosition,
    anchor,
  ];
  return (
    <section className={styles.main}>
      {/* fill in the type (data.json - banners type), background (rgba or false), revertPosition (true or false) and anchor */}
      <Login type={filteredBanner("Login", false, false, "anchorHome")} />
    </section>
  );
}
