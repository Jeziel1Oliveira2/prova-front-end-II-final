import { useState } from "react";
import { NomesSimpsons, INFO_SIMPSONS } from "./constants";
//import styles from "./styles.module.css";
import * as styles from "./styled";

const Bio = () => {
  const [bioActive, setBioActive] = useState(INFO_SIMPSONS[NomesSimpsons.BART]);

  const onClick: (nome: NomesSimpsons) => void = (nome) =>
    setBioActive(INFO_SIMPSONS[nome]);

  const criarBotoes = () => {
    return Object.keys(INFO_SIMPSONS).map((nome: string) => (
      <styles.btnProp
        key={nome as string}
        onClick={() => onClick(nome as NomesSimpsons)}
        active={
          bioActive.id === nome
            ? true 
            : false
        }
      >
        {nome}
      </styles.btnProp>
    ));
  };

  return (
    <styles.container>
      <styles.buttons>
        {criarBotoes()}
      </styles.buttons>
      <div>
        <div>
          <styles.image 
          src={bioActive.image}
          alt={bioActive.nome}
          />
        </div>
        <div>
          <styles.name>{bioActive.nome}</styles.name>
          <styles.description>{bioActive.description}</styles.description>
        </div>
      </div>
    </styles.container>
  );
};

export default Bio;
