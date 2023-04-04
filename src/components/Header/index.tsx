import Link from "next/link";
import React from "react";

import * as S from "./styles";

export default function Header() {
  return (
    <div>
      <S.Container suppressHydrationWarning={true}>
        <S.TextName>JL Dev</S.TextName>

        <S.ButtonContainer>
          <Link
            style={{ textDecoration: "none" }}
            href="https://api.whatsapp.com/send/?phone=5585996889128&text&type=phone_number&app_absent=0"
          >
            <S.Button>FACA UM ORCAMENTO</S.Button>
          </Link>
          <S.Button>SERVICOS</S.Button>
          <S.Button>ULTIMOS PROJETOS</S.Button>
        </S.ButtonContainer>
      </S.Container>
    </div>
  );
}
