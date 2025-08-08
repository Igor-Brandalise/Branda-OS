import { useState } from "react";
import "./index.css";
import { TelaBoot } from "./components/telaboot";
import { TelaInicial } from "./components/telainicial";
import { Desktop } from "./components/desktop";
import { AboutMe } from "./components/aboutme";
import { TopGames } from "./components/topgames";
import { MyRecentWork } from "./components/recentwork";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const [tela, setTela] = useState("boot");

  if (tela === "boot") {
    return (
      <>
        <TelaBoot aoLigar={() => setTela("principal")} />
        <SpeedInsights />
      </>
    );
  }

  if (tela === "principal") {
    return (
      <>
        <TelaInicial
          voltarParaBoot={() => setTela("boot")}
          irParaDesktop={() => setTela("desktop")}
        />
        <SpeedInsights />
      </>
    );
  }

  if (tela === "desktop") {
    return (
      <>
        <Desktop
          voltarParaBoot={() => setTela("boot")}
          abrirAboutMe={() => setTela("aboutMe")}
          topGames={() => setTela("topGames")}
          MyRecentWork={() => setTela("MyRecentWork")}
        />
        <SpeedInsights />
      </>
    );
  }

  if (tela === "aboutMe") {
    return (
      <>
        <AboutMe
          voltarParaDesktop={() => setTela("desktop")}
          voltarParaBoot={() => setTela("boot")}
          topGames={() => setTela("topGames")}
          MyRecentWork={() => setTela("MyRecentWork")}
        />
        <SpeedInsights />
      </>
    );
  }

  if (tela === "topGames") {
    return (
      <>
        <TopGames
          voltarParaDesktop={() => setTela("desktop")}
          voltarParaBoot={() => setTela("boot")}
          abrirAboutMe={() => setTela("aboutMe")}
          MyRecentWork={() => setTela("MyRecentWork")}
        />
        <SpeedInsights />
      </>
    );
  }

  if (tela === "MyRecentWork") {
    return (
      <>
        <MyRecentWork
          voltarParaDesktop={() => setTela("desktop")}
          voltarParaBoot={() => setTela("boot")}
          topGames={() => setTela("topGames")}
          abrirAboutMe={() => setTela("aboutMe")}
        />
        <SpeedInsights />
      </>
    );
  }

  return <SpeedInsights />;
}

export default App;
