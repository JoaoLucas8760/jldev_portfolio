import Link from "next/link";
import React from "react";

import * as S from "./styles";

export default function Header() {
  return (
    <S.Container suppressHydrationWarning={true}>
      <S.TextName>JL Dev</S.TextName>

      <S.ButtonContainer>
        <Link
          style={{ textDecoration: "none" }}
          href="https://api.whatsapp.com/send/?phone=5585996889128&text&type=phone_number&app_absent=0"
        >
          <S.Button>Faça um orçamento</S.Button>
        </Link>
        <S.Button>Serviços</S.Button>
        <S.Button>Ultimos projetos</S.Button>
      </S.ButtonContainer>
    </S.Container>
  );
}
