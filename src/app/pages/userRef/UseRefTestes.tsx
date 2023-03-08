import { useRef, useState } from "react";
import FakeModal from "./FakeModal";

export default function UseRefTestes() {
  const [estadoButton, setEstadoButton] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function alterarEstadoDoButton() {
    setEstadoButton(true);
  }
  return (
    <>
      <h1>useRef para interagir com elemento DOM</h1>
      <form action="email">
        <button type="button" onClick={alterarEstadoDoButton}>
          Clique aqui para apresentar uma modal de recebimento de futuros
          e-mails
        </button>
        <br />
        <br />
        {estadoButton && (
          <FakeModal forwordRef={inputRef} setarModalOff={setEstadoButton} />
        )}
      </form>
    </>
  );
}
