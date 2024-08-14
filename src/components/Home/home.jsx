import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logoutIcon from "../../assets/logout.svg";
import userContext from "../userContext";
import userImg from "../../assets/user-image.jpeg";
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
  WelcomeUser,
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
  console.log('foto: ', user.profilePicture);
  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleLogout = () => {
    logout();
    console.log("Logout");
  };

  useEffect(() => {
    if (!user.isLoggedIn) {
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
        <FooterLink onClick={() => navigate("/createNotes")}>+ Criar nota</FooterLink>
      </Sidebar>
      <Content>
        <Header>
          <WelcomeContainer>
            <ProfilePicture src={user.profilePicture || userImg} alt="Foto do perfil" onClick={handleProfileClick} />
            <WelcomeMessage>Bem vindo,
              <WelcomeUser> {user.name}</WelcomeUser>
            </WelcomeMessage>
          </WelcomeContainer>
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
