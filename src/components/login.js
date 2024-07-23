import React, { useState } from "react";
import "./login.css";
import emailIcon from '../../src/assets/icon-email.svg'
import lockIcon from '../assets/icon-lock.svg'
import senhaIcon from '../../src/assets/Senha.png'

const Login = () => {
    const [email, setEmail] = useState("");
    //const "email" é o estado atual - setEmail é a função que 
    //atualiza o estado - valor inicial 0 
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
      //handleSubmit registra valor atual do input; impede que o form recarregue a pagina
    event.preventDefault();
    // adiciona a lógica para enviar os dados para o servidor
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <section>

    
    <div className="background-container">
      <div className="login-container">
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Faça seu login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <div className="input-icon">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
              </svg>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="E-mail"
              />
            </div>
          </div>
          <div className="input-container-senha">
            <div className="input-senha"></div>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg>
            {/* <img src="{}" alt="senha-icon" /> */}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Senha"
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
        <div className="create-account">
        <h2>Criar conta</h2>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Login;
