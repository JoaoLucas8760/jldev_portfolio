import React from "react";

import * as S from "./styles";

import FlatIcon from "../../assets/icon.svg";
import Image from "next/image";

export default function Body() {
  return (
    <S.Container suppressHydrationWarning={true}>
      <S.Box>
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <S.TextName>
              Hi, I am <br />
            </S.TextName>

            <S.Name>João Lucas</S.Name>
          </div>

          <S.Role>Front end Developer</S.Role>
        </div>
      </S.Box>
      <Image src={FlatIcon} width="400" height="400" alt={""} priority />
    </S.Container>
  );
}
