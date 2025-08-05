import { useState } from "react";
import "./index.css";
import { TelaBoot } from "./components/telaboot";
import { TelaInicial } from "./components/telainicial";
import { Desktop } from "./components/desktop";
import { AboutMe } from "./components/aboutme";
import { TopGames } from "./components/topgames";
import { MyRecentWork } from "./components/recentwork";

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
        topGames={() => setTela("topGames")}
        MyRecentWork={() => setTela("MyRecentWork")}
      />
    );
  }

  if (tela === "aboutMe") {
    return (
      <AboutMe
        voltarParaDesktop={() => setTela("desktop")}
        voltarParaBoot={() => setTela("boot")}
        topGames={() => setTela("topGames")}
        MyRecentWork={() => setTela("MyRecentWork")}
      />
    );
  }

  if (tela === "topGames") {
    return (
      <TopGames
        voltarParaDesktop={() => setTela("desktop")}
        voltarParaBoot={() => setTela("boot")}
        abrirAboutMe={() => setTela("aboutMe")}
        MyRecentWork={() => setTela("MyRecentWork")}
      />
    );
  }
  if (tela === "MyRecentWork") {
    return (
      <MyRecentWork
        voltarParaDesktop={() => setTela("desktop")}
        voltarParaBoot={() => setTela("boot")}
        topGames={() => setTela("topGames")}
        abrirAboutMe={() => setTela("aboutMe")}
      />
    );
  }

  return null;
}

export default App;
