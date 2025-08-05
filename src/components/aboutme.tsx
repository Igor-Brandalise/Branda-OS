import { BatteryFull, Wifi, X } from "lucide-react";
import { DataHora } from "./data-hora.tsx";
import { MenuLateral } from "./menu.tsx";


type Props = {
  voltarParaDesktop: () => void;
  voltarParaBoot: () => void;
  topGames: () => void;
  
  
};

export function AboutMe({ voltarParaDesktop, voltarParaBoot, topGames}: Props) {
  return (
    <main className="relative w-full h-screen text-amber-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-[20px] scale-110 z-0"
        style={{ backgroundImage: `url('/bg.png')` }}
      />

      <div className="absolute inset-0 bg-stone-900/75 z-0 " />

      <div className="relative z-10 flex flex-col h-full slide-down">
        <div className="flex justify-between p-9">
          <h1 className="text-3xl font-bold">About Me</h1>

          <X
            size={35}
            onClick={voltarParaDesktop}
            className="hover:bg-gray-200/20 transition-colors rounded-md p-1 cursor-pointer"
          />
        </div>

        <div className="max-w-5xl px-10 text-[20px] mt-5 flex-grow overflow-auto">
          <p>
            Olá! Me chamo Igor Brandalise, tenho 17 anos e sou apaixonado por
            tecnologia, design e desenvolvimento web.
          </p>
          <br />
          <p>
            Minha jornada começou em 2023, quando descobri o poder de
            transformar ideias em projetos reais por meio da programação. Desde
            então, venho me dedicando diariamente ao estudo de desenvolvimento
            front-end, com foco em criar interfaces modernas, responsivas e
            funcionais.
          </p>
          <br />
          <p>
            As tecnologias que mais uso são React, TypeScript, Tailwind CSS,
            HTML, CSS e JavaScript, Git, Vite e consumo de APIs.
          </p>
          <br />
          <p>
            Atualmente, meu objetivo é conquistar minha primeira oportunidade
            profissional na área, onde possa aplicar na prática tudo o que venho
            aprendendo, colaborar com outros desenvolvedores e continuar
            evoluindo. No futuro, almejo crescer como Tech Lead, liderando
            projetos que unam tecnologia, criatividade e impacto real.
          </p>
        </div>

        <footer className="fixed bottom-0 w-full backdrop-blur-[70px] h-[4.7rem] text-white flex justify-between items-center px-4 py-2 shadow-inner select-none z-20">
          <div>
            <MenuLateral voltarParaBoot={voltarParaBoot} topGames={topGames}/>
          </div>

          <div className="flex items-center gap-4">
            <Wifi size={25} />
            <BatteryFull size={25} />
            <DataHora />
          </div>
        </footer>
      </div>
    </main>
  );
}
