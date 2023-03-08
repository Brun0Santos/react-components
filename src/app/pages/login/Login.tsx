import { useState, useEffect, useMemo, useCallback, useRef } from "react";

export const Login = () => {
  const testeUserRef = useRef(null);
  const emailBase: string = "bruno@gmail.com";
  const senhaBase: string = "123";
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const calcularTamandoDosCaracteres = useMemo(() => {
    console.log("Passou no useMemo");
    return email.length;
  }, [email]);

  useEffect(() => {
    console.log("Executando");
  }, [senha]);

  const handleEntrar = useCallback(() => {
    console.log("Passou");
    if (email === emailBase && senha === senhaBase)
      alert("Login realizado com sucesso");
    else alert("Credencial não confere com a base");
  }, [email, senha]);

  console.log(testeUserRef);

  return (
    <div>
      <form>
        <p>Quantidade de caracteres do email: {calcularTamandoDosCaracteres}</p>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
      <br />
      <form>
        <label>Senha:</label>
        <input
          type="password"
          value={senha}
          placeholder="Digite sua senha"
          onChange={(e) => setSenha(e.target.value)}
        />
      </form>
      <button ref={testeUserRef} onClick={handleEntrar}>
        Enviar
      </button>
    </div>
  );
};
