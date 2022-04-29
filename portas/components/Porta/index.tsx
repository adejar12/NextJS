import React from "react";
import styles from "../../styles/Porta.module.css";
import PortaModel from "../../model/portaModel";

interface PortaProps {
  porta: PortaModel;
}

// import { Container } from './styles';

function Porta(props: PortaProps) {
  const { porta } = props;

  const portaSelecionada = porta.selecionada ? styles.selecionada : "";

  return (
    <div className={styles.area}>
      <div className={`${styles.estrutura}  ${portaSelecionada}`}>
        <div className={styles.porta}>
          <div className={styles.numero}>{porta.numero}</div>
          <div className={styles.macaneta}></div>
        </div>
      </div>
      <div className={styles.chao}></div>
    </div>
  );
}

export default Porta;
