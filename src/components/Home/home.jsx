// import styled from "styled-components";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoutIcon from "../../assets/logout.svg";
import userContext from "../userContext";

import { 
  Container, 
  Sidebar, 
  SidebarHeader, 
  Menu, 
  MenuItem, 
  FooterLink, 
  Content, 
  Header, 
  WelcomeContainer, 
  WelcomeMessage, 
  LogoutIcon, 
  ProfilePicture, 
  SearchBar, 
  NotesSection, 
  TitleUp, 
  Note, 
  NoteTitle, 
  TagContainer, 
  Tag 
} from "./styles-home";

const Home = () => {
  const { user, logout } = useContext(userContext);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleLogout = () => {
    logout();
    console.log("Logout");
  };

  useEffect(()=> {
    if(!user.isLoggedIn){
        navigate("/login")
    }
  }, [user.isLoggedIn, navigate]);

  return (
    <Container>
      <Sidebar>
        <div>
          <SidebarHeader>Rocket Notes</SidebarHeader>
          <Menu>
            <MenuItem>Todos</MenuItem>
            <MenuItem>Frontend</MenuItem>
            <MenuItem>Node</MenuItem>
            <MenuItem>React</MenuItem>
          </Menu>
        </div>
        <FooterLink href="#">+ Criar nota</FooterLink>
      </Sidebar>
      <Content>
        <Header>
          <WelcomeContainer>
          <ProfilePicture src={user.profilePicture} alt="Foto do perfil" onClick={handleProfileClick} />
          <WelcomeMessage>Bem vindo, {user.name}</WelcomeMessage>
          <LogoutIcon src={logoutIcon} alt="Logout" onClick={handleLogout} />
          </WelcomeContainer>
        </Header>
        <SearchBar type="text" placeholder="Pesquisar pelo título" />
        <NotesSection>
          <TitleUp>Minhas notas</TitleUp>
          <Note>
            <NoteTitle>React Modal</NoteTitle>
            <TagContainer>
              <Tag>React</Tag>
            </TagContainer>
          </Note>
          <Note>
            <NoteTitle>Exemplo de Middleware</NoteTitle>
            <TagContainer>
              <Tag>express</Tag>
              <Tag>nodejs</Tag>
            </TagContainer>
          </Note>
        </NotesSection>
      </Content>
    </Container>
  );
};

export default Home;
