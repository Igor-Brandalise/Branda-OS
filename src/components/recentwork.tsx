import { BatteryFull, Wifi, X } from "lucide-react";
import { DataHora } from "./data-hora.tsx";
import { MenuLateral } from "./menu.tsx";
import {GithubRepos} from "./repogithub"

type Props = {
  voltarParaDesktop: () => void;
  voltarParaBoot: () => void;
  abrirAboutMe: () => void;
  topGames: () => void
};

export function MyRecentWork({ voltarParaDesktop, voltarParaBoot, topGames, abrirAboutMe}: Props){

    

      return (
    <main className="relative w-full h-screen text-amber-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-[20px] scale-110 z-0"
        style={{ backgroundImage: `url('/bg.png')` }}
      />

      <div className="absolute inset-0 bg-stone-900/75 z-0 " />

      <div className="relative z-10 flex flex-col h-full overflow-auto pb-[4.8rem] custom-scrollbar">
        <header className="flex justify-between p-9">
          <h1 className="text-3xl font-bold">My Recent Work</h1>

          <X
            size={35}
            onClick={voltarParaDesktop}
            className="hover:bg-gray-200/20 transition-colors rounded-md p-1 cursor-pointer"
          />
        </header>

        <div className="">
        < GithubRepos/>
        </div>

        <footer className="fixed bottom-0 w-full backdrop-blur-[70px] h-[4.7rem] text-white flex justify-between items-center px-4 py-2 shadow-inner select-none z-20 ">
          <div>
            <MenuLateral
              voltarParaBoot={voltarParaBoot}
              AboutMe={abrirAboutMe}
              topGames={topGames}
            />
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