import Image from "next/image";
import Link from "next/link";
import React from "react";

import LinkIcon from "../../../assets/link.svg";

import * as S from "./styles";

interface props {
  src: string;
  tecnology: string;
  title: string;
  linksite: string;
}

export default function Project({ src, tecnology, title, linksite }: props) {
  return (
    <S.Container>
      <Image
        style={{
          borderRadius: "0.5rem",
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          opacity: "60%",
        }}
        src={src}
        width="300"
        height="160"
        alt=""
      />

      <S.InfoBox>
        <S.ProjectTitle>{title}</S.ProjectTitle>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <S.TecnologyText>{tecnology}</S.TecnologyText>

          <Link href={linksite}>
            <Image src={LinkIcon} alt="" />
          </Link>
        </div>
      </S.InfoBox>
    </S.Container>
  );
}
