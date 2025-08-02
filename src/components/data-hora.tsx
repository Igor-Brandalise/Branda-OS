import { useEffect, useState } from "react";

export function DataHora() {
  const [hora, setHora] = useState<string>("");
  const [data, setData] = useState<string>("");

  useEffect(() => {
    function atualizarHora() {
      const agora = new Date();

      const hora = agora.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      setHora(`${hora}`);
    }

    atualizarHora();
    const intervalo = setInterval(atualizarHora, 1000);
    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    function atualizarData() {
      const agora = new Date();

      const dia = agora.toLocaleDateString(undefined, {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

      setData(`${dia}`);
    }

    atualizarData();

    const intervaloDia = setInterval(atualizarData, 1000);

    return () => clearInterval(intervaloDia);
  });

    return (
    <div className="text-white flex flex-col items-center gap-1 ml-7">
      <span>{hora}</span>
      <span>{data}</span>
    </div>
  );
}
