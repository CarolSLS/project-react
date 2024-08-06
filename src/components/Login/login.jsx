import React, { useContext, useState } from "react"; // hook = função js que faz algo especial na biblioteca
//useState - area de memória para reutilizar / váriavel longa / permite que as info gerem alterações na tela
// possui o estado "email" e a função que altera o estado "setEmail"
import { useNavigate, Link } from "react-router-dom"
import emailIcon from "../../assets/icon-email.svg";
import lockIcon from "../../assets/icon-lock.svg";
import officeImg from "../../assets/office.png";
import { authenticateUser } from "../../services/authService"
import userContext from "../userContext";
import {
  Container, SideBar, LoginContainer, Title, Subtitle, LoginTitle, Form,
  FormGroup, Icon, Input, Button, CreateAccount, BackgroundContainer
} from "./styles-login"

const Login = () => {
  //const "email" é o estado atual - setEmail é a função que
  //atualiza o estado - valor inicial 0
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(userContext);

  //handleSubmit registra valor atual do input; impede que o form recarregue a pagina
  const handleSubmit = (event) => {
    // preventDefault adiciona a lógica para enviar os dados para o servidor
    event.preventDefault();
    if (authenticateUser(email, password)) {
      setUser({ name: "Gata", profilePicture: "url_da_imagem", isLoggedIn: true });
      navigate("/home");
    } else {
      alert("Credencias inválidas")
    }
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Container>
      <SideBar>
        <LoginContainer>
          <Title>Rocket Notes</Title>
          <Subtitle>Aplicação para salvar e gerenciar seus links úteis.</Subtitle>
          <LoginTitle>Faça seu login</LoginTitle>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Icon src={emailIcon} alt="Email Icon" />
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="E-mail"
              />
            </FormGroup>
            <FormGroup>
              <Icon src={lockIcon} alt="Lock Icon" />
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Senha"
              />
            </FormGroup>
            <Button type="submit">Entrar</Button>
          </Form>
          <CreateAccount>
            <h2>
              <Link to="/createAccount">Criar conta</Link>  
            </h2>
          </CreateAccount>
        </LoginContainer>
      </SideBar>
      <BackgroundContainer backgroundImage={officeImg} />
    </Container>
  );
};
export default Login;
