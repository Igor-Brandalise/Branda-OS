import { useState, useRef } from "react";
import { searchOnGoogle } from "../utils/searchOnGoogle.ts";
import {
  Power,
  CircleUserRound,
  Search,
  Github,
  Gamepad,
  Link,
  Briefcase,
  ClipboardList,
  DollarSign,
  UserCircle2,
} from "lucide-react";

type Props = {
  voltarParaBoot: () => void;
  AboutMe: () => void;
};

export function MenuLateral({ voltarParaBoot, AboutMe }: Props) {
  const [aberto, setAberto] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  console.log("clicado", AboutMe);

  return (
    <div className="fixed bottom-4 left-4 z-50">
      
      <button
        onClick={(e) => {
          e.stopPropagation(); // Impede que clique no botão feche o menu
          setAberto((prev) => !prev);
        }}
        className="menu"
        title="Menu"
      >
        <img
          src="/start-menu-icon.svg"
          alt="Menu"
          className="w-full h-full object-cover"
        />
      </button>

      {/* Menu grande */}
      {aberto && (
        <div
          ref={menuRef}
          className="absolute bottom-20 left-0 w-[600px] h-[500px] bg-zinc-900/99 text-white rounded-2xl shadow-2xl p-6 animate-slide-up"
        >
          

          <form onSubmit={searchOnGoogle} className=" relative w-full ">
            <input
              name="search"
              type="text"
              placeholder="Buscar no Google..."
              className="w-full text-[14px] p-1.5 rounded-2xl bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-stone-600"
              autoComplete="off"
            />

            <Search
              size={20}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
            />
          </form>

          <h2 className="mt-5 text-[18px] font-semibold text-zinc-100">
            Pinned Apps
          </h2>

          <div className="mt-7">
            <ul className="flex flex-row gap-8">
              <li
                className="flex items-center justify-center flex-col  hover:bg-gray-200/20 transition-colors rounded-md p-2 cursor-pointer"
                onClick={() => {
                  AboutMe();
                }}
              >
                <CircleUserRound size={40} className="text-white" />
                <p className="text-[12px] text-zinc-300">AboutMe</p>
              </li>

              <li className="flex items-center justify-center flex-col  hover:bg-gray-200/20 transition-colors rounded-md p-1 cursor-pointer">
                <Gamepad size={40} />
                <p className="text-[12px] text-zinc-300">My Top Games</p>
              </li>

              <li className="flex items-center justify-center flex-col  hover:bg-gray-200/20 transition-colors rounded-md p-1 cursor-pointer">
                <Github size={40} />
                <p className="text-[12px] text-zinc-300">My recent Work</p>
              </li>

              <li className="flex items-center justify-center flex-col  hover:bg-gray-200/20 transition-colors rounded-md p-2 cursor-pointer">
                <img src="/discord-icon.svg" alt="" className="h-10 w-10" />
                <p className="text-[12px] text-zinc-300">My Discord</p>
              </li>
            </ul>
          </div>

          <h2 className="mt-5 text-[18px] font-semibold text-zinc-100">
            My Projects
          </h2>

          <div className="flex gap-40 mt-7">
            <ul className="flex flex-col gap-5">
              <a
                href="https://my-portfolio-igor-brandalises-projects.vercel.app/"
                target="_blank"
              >
                <li className="flex items-center gap-2.5 hover:bg-gray-200/20 transition-colors rounded-md p-2">
                  <Briefcase size={35} />
                  <div>
                    <p className="font-semibold">My Portfólio</p>
                    <p className="text-xs">HTML | JavaScript</p>
                  </div>
                </li>
              </a>

              <a href="https://lynk-up-flax.vercel.app/" target="_blank">
                <li className="flex items-center gap-2.5 hover:bg-gray-200/20 transition-colors rounded-md p-2">
                  <Link size={35} />
                  <div>
                    <p className="font-semibold">LinkUp</p>
                    <p className="text-xs">React | TypeScript</p>
                  </div>
                </li>
              </a>
            </ul>

            <ul className="flex flex-col gap-5">
              <a
                href="https://igor-brandalise.github.io/CoinTrack/"
                target="_blank"
              >
                <li className="flex items-center gap-2.5 hover:bg-gray-200/20 transition-colors rounded-md p-2">
                  <DollarSign size={35} />
                  <div>
                    <p className="font-semibold">Coin Track</p>
                    <p className="text-xs">HTML | JavaScript</p>
                  </div>
                </li>
              </a>

              <a
                href="https://todo-list-seven-rho-99.vercel.app/"
                target="_blank"
              >
                <li className="flex items-center gap-2.5 hover:bg-gray-200/20 transition-colors rounded-md p-2">
                  <ClipboardList size={35} />
                  <div>
                    <p className="font-semibold">Todo List</p>
                    <p className="text-xs">React | JavaScript</p>
                  </div>
                </li>
              </a>
            </ul>
          </div>

          <footer className="bg-[#27272A] absolute w-[600px] left-0 bottom-0 h-18 rounded-b-2xl flex items-center justify-between p-5 ">
            <div className="flex items-center gap-3">
              <UserCircle2 size={30} />
              <p className="font-semibold">Igor Brandalise</p>
            </div>
            <button
              className="hover:bg-gray-200/20 transition-colors rounded-[50px] p-2"
              onClick={voltarParaBoot}
            >
              <Power size={22} />
            </button>
          </footer>
        </div>
      )}
    </div>
  );
}
