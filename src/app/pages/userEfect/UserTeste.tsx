import { useEffect, useState } from "react";
import style from "./Style.module.css";

export const UserTeste = () => {
  const [valorInical, setvalorInicalalorInical] = useState(0);
  const [nome, setNome] = useState("");
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [localidade, setlocalidade] = useState("");

  const adicionarValor = () => {
    setvalorInicalalorInical(valorInical + 1);
  };
  useEffect(() => {
    console.log("passando uma vez");
  }, [valorInical]);

  function limparCampos() {
    setNome("");
  }

  function realizarRequest() {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    fetch(url)
      .then((res) =>
        res.json().then((data) => {
          setLogradouro(data.logradouro);
          setBairro(data.bairro);
          setlocalidade(data.localidade);
        })
      )
      .catch((error) => alert("Formato de dado inválido"));
  }

  return (
    <div className={style.deixarCentralizado}>
      <h1>Testando hooks react</h1>
      <h3>Quantidade clicada: {valorInical}</h3>
      <button onClick={adicionarValor}>Adicionar valor</button>
      <br />
      <br />
      <form>
        <label>Nome:</label>
        <input type="text" onChange={(e) => setNome(e.target.value)} />
        <p>{nome}</p>
        <button type="button" onClick={limparCampos}>
          Limpar nome
        </button>
      </form>
      <form>
        <h3>Buscando CEP</h3>
        <input
          type="text"
          placeholder="Digite seu cep"
          onChange={(e) => setCep(e.target.value)}
        />
        <button
          type="button"
          className={style.espaco}
          onClick={realizarRequest}
        >
          Buscar
        </button>
      </form>
      {logradouro && (
        <div>
          <li>Cep: {cep}</li>
          <li>Logradouro: {logradouro}</li>
          <li>Bairro: {bairro}</li>
          <li>Localidade: {localidade}</li>
        </div>
      )}
    </div>
  );
};
