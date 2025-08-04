import { useState } from "react";
import "./index.css";
import { TelaBoot } from "./components/telaboot";
import { TelaInicial } from "./components/telainicial";
import { Desktop } from "./components/desktop";
import { AboutMe } from "./components/aboutme";

function App() {
  const [tela, setTela] = useState("boot");

  if (tela === "boot") {
    return <TelaBoot aoLigar={() => setTela("principal")} />;
  }

  if (tela === "principal") {
    return (
      <TelaInicial
        voltarParaBoot={() => setTela("boot")}
        irParaDesktop={() => setTela("desktop")}
      />
    );
  }

  if (tela === "desktop") {
    return (
      <Desktop
        voltarParaBoot={() => setTela("boot")}
        abrirAboutMe={() => setTela("aboutMe")}
      />
    );
  }

  if (tela === "aboutMe") {
    return <AboutMe voltarParaDesktop={() => setTela("desktop")} voltarParaBoot={() => setTela("boot")}/>;
  }

  return null;
}

export default App;
