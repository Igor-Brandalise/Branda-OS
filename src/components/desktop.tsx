import { BatteryFull, Wifi } from "lucide-react";
import { DataHora } from "./data-hora.tsx";
import { MenuLateral } from "./menu.tsx";

type Props = {
  voltarParaBoot: () => void;
  abrirAboutMe: () => void;
  topGames: () => void;
  MyRecentWork: () => void;
};

export function Desktop({ voltarParaBoot, abrirAboutMe, topGames, MyRecentWork }: Props) {
  return (
    <div className="bg-windows-on">
      <footer className="fixed bottom-0 w-full backdrop-blur-xl h-[4.7rem] text-white flex justify-between items-center px-4 py-2 shadow-inner select-none">
        <div>
          <MenuLateral
            voltarParaBoot={voltarParaBoot}
            AboutMe={abrirAboutMe}
            topGames={topGames}
            MyRecentWork={MyRecentWork}
          />
        </div>

        <div className="flex items-center gap-4">
          <Wifi size={25} />
          <BatteryFull size={25} />
          <DataHora />
        </div>
      </footer>
    </div>
  );
}
