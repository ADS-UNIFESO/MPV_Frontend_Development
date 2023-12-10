import styles from "./styles.module.css";
import React from "react";
import backgroundImage from "assets/images/firstAcessBackground.png";
import tempLogoCard from "assets/images/tempLogo.svg";

const UserCard = ({ children }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageBox2}>
        <img
          src={tempLogoCard}
          alt='Logo Card'
        />
        <h4>{children}</h4>
      </div>
      <h3>{">"}</h3>
    </div>
  );
};

export default function Login({ type }) {
  // eslint-disable-next-line
  const [filteredId, filteredBanner, background, revertPosition, anchor] = type;
  return (
    <>
      {filteredBanner.map((banner) => (
        <section className={styles.page}>
          <image
            className={styles.imageBox}
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className={styles.content}>
            <div className={styles.welcome}>
              <h3>Bem-vindo ao Painel de Publicações Acadêmicas</h3>
              <p>Por favor, faça o login para continuar o seu acesso.</p>
            </div>

            <div className={styles.cards}>
              <UserCard children={"Entrar como colaborador"} />
              <UserCard children={"Entrar como visitante"} />
            </div>

            <a
              className={styles.a}
              href='/'
            >
              Quero ser colaborador
            </a>
          </div>
        </section>
      ))}
    </>
  );
}
