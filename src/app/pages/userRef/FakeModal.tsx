import { useEffect } from "react";
import EsconderButton from "./EscondeButton";

export default function FakeModal(props: {
  forwordRef: any;
  setarModalOff: any;
}) {
  useEffect(() => {
    props.forwordRef.current?.focus();
  }, [props.forwordRef]);

  return (
    <div>
      <br />
      <br />
      <label htmlFor="email"></label>Digite seu email:
      <input id="email" type="text" ref={props.forwordRef} />
      <div>
        <EsconderButton setarModalOff={props.setarModalOff} />
      </div>
    </div>
  );
}
