export default function EsconderButton(props: { setarModalOff: any }) {
  function desativarModal() {
    props.setarModalOff(false);
    console.log("Desativou");
  }
  return (
    <>
      <button onClick={desativarModal} type="button">
        Esconder modal
      </button>
    </>
  );
}
