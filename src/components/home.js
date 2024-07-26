import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logoutIcon from "../assets/logout.svg";
import userContext from "./userContext";

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #312e38;
`;
const Sidebar = styled.div`
  width: 20%;
  background-color: #232129;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0 0;
`;
const SidebarHeader = styled.h1`
  text-align: center;
  color: #ff9000;
`;
const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 10px;
`;
const MenuItem = styled.li`
  margin: 15px 0;
  cursor: pointer;
  color: #999591;
  &:hover {
    color: #ff9000;
  }
`;
const FooterLink = styled.a`
  width: auto;
  height: auto;
  color: #232129;
  text-align: center;
  text-decoration: none;
  padding: 20px;
  background-color: #ff9000;
  cursor: pointer;
`;
const Content = styled.div`
  flex-grow: 1;
  padding: 20px 50px;
  background-color: #312e38;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ProfilePicture = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: white;
`;
const WelcomeMessage = styled.h2`
  margin-left: 50px;
  color: #ff9000;
`;
const LogoutIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
const SearchBar = styled.input`
  width: 91%;
  padding: 10px;
  margin: 20px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const NotesSection = styled.div`
  margin-top: 20px;
`;
const TitleUp = styled.h3`
  margin-bottom: 20px;
  color: #999591;
`;
const Note = styled.div`
  width: 90%;
  background-color: #3e3b47;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const NoteTitle = styled.h4`
  margin-bottom: 10px;
  color: white;
`;
const TagContainer = styled.div`
  display: flex;
  gap: 10px;
`;
const Tag = styled.span`
  padding: 5px 10px;
  background-color: #ff9000;
  color: white;
  border-radius: 4px;
  font-size: 0.875rem;
`;
const Home = () => {
  const { user, logout } = useContext(userContext);
  const navigate = useNavigate();

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
          <ProfilePicture src={user.profilePicture} alt="Foto do perfil" />
          <WelcomeMessage>Bem vindo, {user.name}</WelcomeMessage>
          <LogoutIcon src={logoutIcon} alt="Logout" onClick={handleLogout} />
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
