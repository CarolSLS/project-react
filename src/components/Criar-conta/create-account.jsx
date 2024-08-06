import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailIcon from "../../assets/icon-email.svg";
import lockIcon from "../../assets/icon-lock.svg";
import userIcon from "../../assets/icon-user.svg";
import officeImg from "../../assets/office.png";
import { addUser } from "../../services/authService.js";
import {
    Container, SideBar, CreateContainer, Title, Subtitle, CreateTitle, Form,
    FormGroup, Icon, Input, Button, LoginLink, BackgroundContainer
} from "./create-account.js";


const CreateAccount = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();



    const handleSubmit = (event) => {
        event.preventDefault();
        const user = { name, email, password };
        const success = addUser(user);
        if (success) {
            navigate("/home");
        } else {
            alert("Usuário já existe");
        }
    };


    return (
        <Container>
            <SideBar>
                <CreateContainer>
                    <Title>Rocket Notes</Title>
                    <Subtitle>Aplicação para salvar e gerenciar seus links úteis.</Subtitle>
                    <CreateTitle>Crie sua conta</CreateTitle>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Icon src={userIcon} alt="User Icon" />
                            <Input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                placeholder="Nome"
                            />
                        </FormGroup>
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
                        <Button type="submit">Cadastrar</Button>
                    </Form>
                    <LoginLink href="/login">Voltar para o login</LoginLink>
                </CreateContainer>
            </SideBar>
            <BackgroundContainer>
                <img src={officeImg} alt="Office" />
            </BackgroundContainer>
        </Container>
    );




}

export default CreateAccount;