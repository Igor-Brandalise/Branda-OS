import { BatteryFull, Wifi, X } from "lucide-react";
import { DataHora } from "./data-hora.tsx";
import { MenuLateral } from "./menu.tsx";

type Props = {
  voltarParaDesktop: () => void;
  voltarParaBoot: () => void;
  abrirAboutMe: () => void;
};

export function TopGames({
  voltarParaDesktop,
  voltarParaBoot,
  abrirAboutMe,
}: Props) {
  return (
    <main className="relative w-full h-screen text-amber-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-[20px] scale-110 z-0"
        style={{ backgroundImage: `url('/bg.png')` }}
      />

      <div className="absolute inset-0 bg-stone-900/75 z-0 " />

      <div className="relative z-10 flex flex-col h-full overflow-auto pb-[4.8rem] custom-scrollbar">
        <header className="flex justify-between p-9">
          <h1 className="text-3xl font-bold">My Top Games</h1>

          <X
            size={35}
            onClick={voltarParaDesktop}
            className="hover:bg-gray-200/20 transition-colors rounded-md p-1 cursor-pointer"
          />
        </header>

        <div className="flex-grow overflow-auto px-9 pb-24 ml-15">
          <ul className="space-y-10">
            <li className="flex gap-5 items-center">
              <img src="/Elden_Ring_capa.jpg" alt="" className="h-38 w-30" />
              <div>
                <p className="text-2xl font-bold">1. Elden Ring</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["Ação", "RPG", "Mundo Aberto", "Soulslike"].map(
                    (tag, i) => (
                      <span
                        key={i}
                        className="bg-amber-800/40 text-amber-200 text-[13px] font-semibold px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </li>

            <li className="flex gap-5 items-center">
              <img
                src="/Ghost_of_Tsushima_capa.png"
                alt=""
                className="h-38 w-30"
              />
              <div>
                <p className="text-2xl font-bold">2. Ghost of Tsushima</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["Ação", "Aventura", "Mundo Aberto", "Stealth"].map(
                    (tag, i) => (
                      <span
                        key={i}
                        className="bg-emerald-800/40 text-emerald-200 text-[13px] font-semibold  px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </li>

            <li className="flex gap-5 items-center">
              <img src="/the witcher.webp" alt="" className="h-38 w-30" />
              <div>
                <p className="text-2xl font-bold">3. The Witcher 3</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["RPG", "Mundo Aberto", "Fantasia", "Aventura"].map(
                    (tag, i) => (
                      <span
                        key={i}
                        className="bg-purple-800/40 text-purple-200 text-[13px] font-semibold  px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </li>

            <li className="flex gap-5 items-center">
              <img src="/dark souls.webp" alt="" className="h-38 w-30" />
              <div>
                <p className="text-2xl font-bold">4. Dark Souls 3</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["Ação", "RPG", "Soulslike", "Fantasia Sombria"].map(
                    (tag, i) => (
                      <span
                        key={i}
                        className="bg-indigo-800/40 text-indigo-200 text-[13px] font-semibold  px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </li>

            <li className="flex gap-5 items-center">
              <img src="/shadow warrior.jpg" alt="" className="h-38 w-30" />
              <div>
                <p className="text-2xl font-bold">5. Shadow Warrior 3</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {["FPS", "Ação", "Hack and Slash", "Aventura"].map(
                    (tag, i) => (
                      <span
                        key={i}
                        className="bg-rose-800/40 text-rose-200 text-[13px] font-semibold  px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </li>
          </ul>
        </div>

        <footer className="fixed bottom-0 w-full backdrop-blur-[70px] h-[4.7rem] text-white flex justify-between items-center px-4 py-2 shadow-inner select-none z-20 ">
          <div>
            <MenuLateral
              voltarParaBoot={voltarParaBoot}
              AboutMe={abrirAboutMe}
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
