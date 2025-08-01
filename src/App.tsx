import { useState } from "react";
import "./index.css";
import { TelaBoot } from "./components/telaboot";
import { TelaInicial } from "./components/telainicial";

function App() {
  const [sistemaLigado, setSistemaLigado] = useState(false);

  return (
    <div className="">
      {sistemaLigado ? (
        <TelaInicial />
      ) : (
        <TelaBoot aoLigar={() => setSistemaLigado(true)} />
      )}
    </div>
  );
}

export default App;
