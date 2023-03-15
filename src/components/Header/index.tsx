import React from "react";

import * as S from "./styles";

export default function Header() {
  return (
    <S.Container>
      <S.TextName>JL Dev</S.TextName>

      <div style={{ display: "flex", gap: "1.4rem" }}>
        <S.Button>Faça um orçamento</S.Button>
        <S.Button>Ultimos projetos</S.Button>
        <S.Button>Contacte-me</S.Button>
      </div>
    </S.Container>
  );
}
