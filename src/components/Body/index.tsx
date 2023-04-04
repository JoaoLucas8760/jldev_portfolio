import React from "react";

import * as S from "./styles";

import FlatIcon from "../../assets/icon.svg";
import WhatsappIcon from "../../assets/whatsapp.svg";
import Image from "next/image";
import Link from "next/link";

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

          <div>
            <S.Role>Front end Developer</S.Role>

            <Link
              style={{ textDecoration: "none" }}
              href={
                "https://api.whatsapp.com/send/?phone=5585996889128&text&type=phone_number&app_absent=0"
              }
            >
              <S.BudgetButton>
                SOLICITE UM ORCAMENTO{" "}
                <Image
                  style={{ marginLeft: "0.8rem" }}
                  src={WhatsappIcon}
                  alt={""}
                  priority
                />
              </S.BudgetButton>
            </Link>
          </div>
        </div>
      </S.Box>
      <Image src={FlatIcon} width="400" height="400" alt={""} priority />
    </S.Container>
  );
}
