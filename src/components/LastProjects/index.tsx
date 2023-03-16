import React from "react";
import Project from "./project";

import * as S from "./styles";

export default function LastProjects() {
  return (
    <S.Container>
      <S.LastProjectsText>
        U l t i m o s &nbsp; p r o j e t o s
      </S.LastProjectsText>

      <S.ProjectsContainer>
        <Project
          title="Dogs"
          tecnology="ReactJS"
          src=""
          linksite={"https://dogsbook-devjl.netlify.app/"}
        />
        <Project
          title="Dogs"
          tecnology="ReactJS"
          src={
            "https://user-images.githubusercontent.com/72713975/210123571-60e135bc-cd40-4d2c-9241-29c95d1acaba.png"
          }
          linksite={"https://dogsbook-devjl.netlify.app/"}
        />
        <Project
          title="Pizzarias toffanetto"
          tecnology="React"
          src={
            "https://raw.githubusercontent.com/everton-dgn/pizzaria_toffanetto/master/screenshots/desktop.jpg"
          }
          linksite={"https://pizzarias-toffanetto.netlify.app/"}
        />
      </S.ProjectsContainer>
    </S.Container>
  );
}
