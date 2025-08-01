import { FaPowerOff } from "react-icons/fa";
import { Github, Linkedin } from "lucide-react";
import { Separator } from "./separator";

type Props = {
  voltarParaBoot: () => void;
}

export function TelaInicial({voltarParaBoot}: Props) {
  return (
    <div className="bg-windows-on">
      <main>
        <header className="flex justify-between items-center pt-12 p-17">
          <p className="text-zinc-400 font-bold text-[18px]">
            Made by{" "}
            <a
              href="https://www.linkedin.com/in/igor-brandalise?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BzIzRzN2UTYWXS5xJjv09vw%3D%3D"
              target="_blank"
              className="hover:underline text-zinc-50"
            >
              Igor Brandalise
            </a>
          </p>

          <button className="botao-boot-2 mr-20" onClick={voltarParaBoot}>
            <FaPowerOff size={15} color="white" />
          </button>
        </header>

        <section className="flex flex-col items-center gap-8 mt-30">
          <h1 className="text-[40px] text-zinc-50 font-semibold">Branda OS</h1>

          <p className="text-black font-semibold text-[20px]">
            A little more about me.
          </p>

          <button className="botao-power border-2 w-[13rem] rounded-4xl border-zinc-300 backdrop-blur-xl text-stone-50  p-3 text-[20px]">
            Home Screen
          </button>
        </section>

        <section className="flex  flex-row justify-center mt-22">
          <button className="botao-power justify-center flex items-center backdrop-blur-xl border-2 border-zinc-300 rounded-3xl p-3 w-[9rem] gap-5 hover:scale-100">
            <a
              href="https://github.com/Igor-Brandalise"
              target="_blank"
              rel="noreferrer"
              className="transition-all hover:scale-[1.2]"
            >
              <Github color="white" />
            </a>

            <div className="h-[20px]">
              <Separator orientation="vertical" />
            </div>

            <a
              href="https://www.linkedin.com/in/igor-brandalise?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BzIzRzN2UTYWXS5xJjv09vw%3D%3D"
              target="_blank"
              rel="noreferrer"
              className="transition-all hover:scale-[1.2]"
            >
              <Linkedin color="white" />
            </a>
          </button>
        </section>
      </main>
    </div>
  );
}
