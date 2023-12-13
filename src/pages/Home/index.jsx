import styles from "./styles.module.css";
import React from "react";

import unifesoData from "assets/json/unifesoData.json";
import MainBanner from "components/banners/Main";
import InfosBanner from "components/banners/Infos";

export default function Home({ pageId }) {
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
      <MainBanner type={filteredBanner("Main", true, false, "anchorHome")} />    
      <InfosBanner type={filteredBanner("Infos", false, true, "anchorHome")} />   
    </section>
  );  
}
