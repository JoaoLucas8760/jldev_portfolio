import Body from "@/components/Body";
import Header from "@/components/Header";
import LastProjects from "@/components/LastProjects";
import Services from "@/components/Services";
import React from "react";

export default function Home() {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <Header />
      <Body />
      <Services />
      <LastProjects />
    </div>
  );
}
