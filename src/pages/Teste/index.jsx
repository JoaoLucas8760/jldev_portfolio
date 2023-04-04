import { useEffect } from "react";

function Teste() {
  useEffect(() => {
    const setVolume = async () => {
      try {
        await window.require("loudness").setVolume(28);
      } catch (error) {
        console.error(error);
      }
    };
    setVolume();
  }, []);

  return <div>Ajustando volume...</div>;
}

export default Teste;
