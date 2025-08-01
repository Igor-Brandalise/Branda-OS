import { FaPowerOff } from "react-icons/fa";

interface Props {
  aoLigar: () => void
}

export function TelaBoot({aoLigar}: Props) {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-windows-off">

      <button className="botao-boot " onClick={aoLigar}>
        <FaPowerOff size={120} color="white"/>
      </button>

    </div>
  );
}
