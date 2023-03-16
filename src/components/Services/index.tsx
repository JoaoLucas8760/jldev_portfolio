import React from "react";
import * as S from "./styles";

import GlobeIcon from "../../assets/globe.svg";
import InstagramIcon from "../../assets/instagram.svg";
import CrownIcon from "../../assets/crown.svg";
import Image from "next/image";

export default function Services() {
  return (
    <S.Container>
      <S.ServiceText> S e r v i ç o s </S.ServiceText>

      <S.ServicesContainer>
        <S.BoxService>
          <S.IconBox>
            <Image
              style={{ background: "none" }}
              src={GlobeIcon}
              alt={""}
              quality={100}
            />
          </S.IconBox>
          <S.TitleService>Desenvolvimento web</S.TitleService>

          <S.SubTitleService>
            Criação e manutenção de websites que solucionam problemas do seu
            negócio e oferecem uma experiência melhor para seus clientes.
          </S.SubTitleService>
        </S.BoxService>
        <S.BoxService>
          <S.IconBox>
            <Image
              style={{ background: "none" }}
              src={InstagramIcon}
              alt={""}
              quality={100}
            />
          </S.IconBox>
          <S.TitleService>Social Media</S.TitleService>

          <S.SubTitleService>
            Gerenciamento de redes sociais, criando conteúdo e estratégias de
            comunicação efetivas para a sua empresa e aumentando sua presença
            online.
          </S.SubTitleService>
        </S.BoxService>
        <S.BoxService>
          <S.IconBox>
            <Image
              style={{ background: "none" }}
              src={CrownIcon}
              alt={""}
              quality={100}
            />
          </S.IconBox>
          <S.TitleService>UI/UX Design</S.TitleService>

          <S.SubTitleService>
            Criação interfaces de usuário, Projeção de Logomarcas, banners e
            outros elementos de design que proporcione uma experiência de
            usuário excepcional.
          </S.SubTitleService>
        </S.BoxService>
      </S.ServicesContainer>
    </S.Container>
  );
}
