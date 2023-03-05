import { useState } from 'react'

export const Login = () => {
    const emailBase = "bruno@gmail.com"
    const senhaBase = "123"
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();



    const handleEntrar = () => {
        if (email ===  emailBase && senha === senhaBase) alert('Login realizado com sucesso')
        else alert("Credencial não confere com a base")
    }

    return(
        <div>
            <form>
                <label>Email:</label>
                <input type="text" value={email}  placeholder='Digite seu email' onChange={e => setEmail(e.target.value)}  />
            </form>
            <br />
            <form >
                <label>Senha:</label>
                <input type="password" value={senha} placeholder='Digite sua senha' onChange={e => setSenha(e.target.value)} />
            </form>
            <button onClick={handleEntrar}>Enviar</button>
        </div>
    )
}