import { useState } from "react";
import "./index.css";
import { TelaBoot } from "./components/telaboot";
import { TelaInicial } from "./components/telainicial";

function App() {
  const [tela, setTela] = useState("boot");

  if (tela === "boot") {
    return <TelaBoot aoLigar={() => setTela("principal")} />;
  }

  if (tela === "principal") {
    return <TelaInicial />;
  }
}

export default App;
