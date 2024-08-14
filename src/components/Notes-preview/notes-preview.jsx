import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userContext from "../userContext";
import logoutIcon from "../../assets/logout.svg";
import { 
  Container, 
  Header, 
  ProfilePicture, 
  WelcomeMessage, 
  LogoutIcon, 
  Content, 
  NoteTitle, 
  NoteContent, 
  LinksSection, 
  TagsSection, 
  BackButton, 
  DeleteButton 
} from "./notes-preview";

const mockNote = {
  title: "TESTANDO",
  content: "Se der certo eu fico felizzzzz",
  links: ["https://example.com", "https://anotherexample.com"],
  tags: ["tag1", "tag2"]
};

const NotesPreview = () => {
  const { user, logout } = useContext(userContext);
  const navigate = useNavigate();
  const { noteId } = useParams(); 

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleDelete = () => {
    
    console.log("Nota excluída");
  };

  return (
    <Container>
      <Header>
        <ProfilePicture src={user.profilePicture || "default-profile.png"} alt="Foto do perfil" />
        <WelcomeMessage>Bem vindo, {user.name}</WelcomeMessage>
        <LogoutIcon src={logoutIcon} alt="Logout" onClick={handleLogout} />
      </Header>
      <Content>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <NoteTitle>{mockNote.title}</NoteTitle>
          <DeleteButton onClick={handleDelete}>Excluir Nota</DeleteButton>
        </div>
        <NoteContent>{mockNote.content}</NoteContent>
        <LinksSection>
          <h3>Links Úteis</h3>
          <ul>
            {mockNote.links.map((link, index) => (
              <li key={index}><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></li>
            ))}
          </ul>
        </LinksSection>
        <TagsSection> 
          <h3>Marcadores</h3>
          <ul>
            {mockNote.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </TagsSection>
        <BackButton onClick={() => navigate("/home")}>Voltar</BackButton>
      </Content>
    </Container>
  );
};

export default NotesPreview;
