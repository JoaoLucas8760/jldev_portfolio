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
        <Project />
        <Project />
      </S.ProjectsContainer>
    </S.Container>
  );
}
