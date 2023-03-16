import Image from "next/image";
import React from "react";

import LinkIcon from "../../../assets/link.svg";

import * as S from "./styles";

export default function Project() {
  return (
    <S.Container>
      <Image
        style={{
          borderRadius: "0.5rem",
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          opacity: "60%",
        }}
        src={
          "https://user-images.githubusercontent.com/72713975/210123571-60e135bc-cd40-4d2c-9241-29c95d1acaba.png"
        }
        width="300"
        height="160"
        alt=""
      />

      <S.InfoBox>
        <S.ProjectTitle>Dogs</S.ProjectTitle>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <S.TecnologyText>React</S.TecnologyText>

          <Image src={LinkIcon} alt="" />
        </div>
      </S.InfoBox>
    </S.Container>
  );
}
