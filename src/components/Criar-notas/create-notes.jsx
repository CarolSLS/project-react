import React, {useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
// import { LogoutIcon } from "../../assets/logout.svg";
import userImage from "../../assets/user-image.jpeg";
import userContext from "../userContext";
import {
    Container,
    Header,
    ProfilePicture,
    WelcomeMessage,
    LogoutIcon,
    Content,
    Title,
    BackLink,
    Form,
    FormGroup,
    Input,
    TextArea,
    LinksSection,
    LinkInputContainer,
    LinkInput,
    RemoveLinkIcon,
    AddLinkInput,
    AddLinkIcon,
    TagsSection,
    SaveButton,
  } from "../Criar-notas/create-notes";

  const CreateNotes = () =>{
    const {user, logout} = useContext(userContext);
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [notes, setNotes] = useState("");
    const [links, setLinks] = useState("");
    const [tags, setTags] = useState("");

    const handleLogout = () => {
        logout();
        navigate("/login")
    }

    const handleAddLink = () => {
        setLinks([...links, { id: links.length + 1, url: "" }]);
      };
    
      const handleRemoveLink = (id) => {
        setLinks(links.filter((link) => link.id !== id));
      };
    
      const handleLinkChange = (id, value) => {
        setLinks(links.map((link) => (link.id === id ? { ...link, url: value } : link)));
      };

      const handleSave = () => {
        // Lógica para salvar a nota
        console.log("Salvar nota", { title, notes, links, tags });
      };


      return (
        <Container>
          <Header>
            <ProfilePicture src={user.profilePicture || userImage} alt="Foto do perfil" />
            <WelcomeMessage>Bem vindo, {user.name}</WelcomeMessage>
            <LogoutIcon src={LogoutIcon} alt="Logout" onClick={handleLogout} />
          </Header>
          <Content>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Title>Criar nota</Title>
              <BackLink onClick={() => navigate("/home")}>Voltar</BackLink>
            </div>
            <Form>
              <FormGroup>
                <Input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Título"
                  required
                />
              </FormGroup>
              <FormGroup>
                <TextArea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Observações"
                  required
                />
              </FormGroup>
              <LinksSection>
                {/* <h3>Links úteis</h3>
                {links.map((link) => (
                  <LinkInputContainer key={link.id}>
                    <LinkInput
                      type="url"
                      value={link.url}
                      onChange={(e) => handleLinkChange(link.id, e.target.value)}
                      placeholder="Adicionar link"
                      required
                    />
                    <RemoveLinkIcon onClick={() => handleRemoveLink(link.id)}>x</RemoveLinkIcon>
                  </LinkInputContainer>
                ))} */}
                <AddLinkInput onClick={handleAddLink}>
                  <span>Adicionar novo link</span>
                  <AddLinkIcon>+</AddLinkIcon>
                </AddLinkInput>
              </LinksSection>
              <TagsSection>
                <h3>Marcadores</h3>
                <Input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="Adicionar marcadores"
                />
              </TagsSection>
              <SaveButton type="button" onClick={handleSave}>
                Salvar
              </SaveButton>
            </Form>
          </Content>
        </Container>
      );

  };

  export default CreateNotes;