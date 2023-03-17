import React from "react";
import Project from "./project";

import * as S from "./styles";

const data = [
  {
    title: "Pizzarias toffanetto",
    tecnology: "React",
    src: "https://raw.githubusercontent.com/everton-dgn/pizzaria_toffanetto/master/screenshots/desktop.jpg",
    linksite: "https://pizzarias-toffanetto.netlify.app/",
  },
];

export default function LastProjects() {
  return (
    <S.Container>
      <S.LastProjectsText>
        U l t i m o s &nbsp; p r o j e t o s
      </S.LastProjectsText>

      <S.ProjectsContainer>
        {data.map((item) => {
          return (
            <Project
              linksite={item.linksite}
              title={item.title}
              src={item.src}
              key={item.linksite}
              tecnology={item.tecnology}
            />
          );
        })}
      </S.ProjectsContainer>
    </S.Container>
  );
}
