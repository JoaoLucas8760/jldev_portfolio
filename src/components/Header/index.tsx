import Link from "next/link";
import React from "react";

import * as S from "./styles";

export default function Header() {
  return (
    <S.Container suppressHydrationWarning={true}>
      <S.TextName>JL Dev</S.TextName>

      <div style={{ display: "flex", gap: "1.4rem", alignItems: "center" }}>
        <Link href="https://api.whatsapp.com/send/?phone=5585996889128&text&type=phone_number&app_absent=0">
          <S.Button>Faça um orçamento</S.Button>
        </Link>
        <S.Button>Serviços</S.Button>
        <S.Button>Ultimos projetos</S.Button>
      </div>
    </S.Container>
  );
}
