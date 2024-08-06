import React, {useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { noteSchema } from "../../schemas/noteSchema";
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
  } from "./create-notes";

  const CreateNotes = () =>{
     const { handleSubmit, control, formState: { errors}} = useForm({
        resolver: zodResolver(noteSchema),
        defaultValues:{
            title: "",
            observations: "",
            links:[""],
            tags:[""],
        },
     });

     const onSubmit = (data) => {
        console.log("Formulário enviado: ", data);
     };



      return (
        
            <Container>
              <Header>
                <ProfilePicture src={userImage} alt="Foto do perfil" />
                <WelcomeMessage>Bem vindo</WelcomeMessage>
                <LogoutIcon src="logout-icon.png" alt="Logout" />
              </Header>
              <Content>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Title>Criar nota</Title>
                  <BackLink >Voltar</BackLink>
                </div>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <FormGroup>
                    <Controller
                      name="title"
                      control={control}
                      render={({ field }) => (
                        <Input type="text" {...field} placeholder="Título" />
                      )}
                    />
                    {errors.title && <p>{errors.title.message}</p>}
                  </FormGroup>
                  <FormGroup>
                    <Controller
                      name="observations"
                      control={control}
                      render={({ field }) => (
                        <TextArea {...field} placeholder="Observações" />
                      )}
                    />
                  </FormGroup>
                  <LinksSection>
                    <h3>Links úteis</h3>
                    <Controller
                      name="links"
                      control={control}
                      render={({ field }) => (
                        field.value.map((link, index) => (
                          <LinkInputContainer key={index}>
                            <LinkInput
                              type="text"
                              value={link}
                              onChange={(e) => {
                                const newLinks = [...field.value];
                                newLinks[index] = e.target.value;
                                field.onChange(newLinks);
                              }}
                              placeholder="Adicionar link"
                            />
                            <RemoveLinkIcon type="button" onClick={() => {
                              const newLinks = field.value.filter((_, i) => i !== index);
                              field.onChange(newLinks);
                            }}>X</RemoveLinkIcon>
                          </LinkInputContainer>
                        ))
                      )}
                    />
                    <AddLinkInput type="button" onClick={() => {
                      control.setValue("links", [...control.getValues("links"), ""]);
                    }}>
                      <span>Adicionar novo link</span>
                      <AddLinkIcon>+</AddLinkIcon>
                    </AddLinkInput>
                  </LinksSection>
                  <TagsSection>
                    <h3>Marcadores</h3>
                    <Controller
                      name="tags"
                      control={control}
                      render={({ field }) => (
                        field.value.map((tag, index) => (
                          <div key={index}>
                            <Input
                              type="text"
                              value={tag}
                              onChange={(e) => {
                                const newTags = [...field.value];
                                newTags[index] = e.target.value;
                                field.onChange(newTags);
                              }}
                              placeholder="Tag"
                            />
                            <button type="button" onClick={() => {
                              const newTags = field.value.filter((_, i) => i !== index);
                              field.onChange(newTags);
                            }}>X</button>
                          </div>
                        ))
                      )}
                    />
                    <button type="button" onClick={() => {
                      control.setValue("tags", [...control.getValues("tags"), ""]);
                    }}>+</button>
                  </TagsSection>
                  <SaveButton type="submit">Salvar</SaveButton>
                </Form>
              </Content>
            </Container>
          );

        // <Container>
        //   <Header>
        //     <ProfilePicture src={user.profilePicture || userImage} alt="Foto do perfil" />
        //     <WelcomeMessage>Bem vindo, {user.name}</WelcomeMessage>
        //     <LogoutIcon src={LogoutIcon} alt="Logout" onClick={handleLogout} />
        //   </Header>
        //   <Content>
        //     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        //       <Title>Criar nota</Title>
        //       <BackLink onClick={() => navigate("/home")}>Voltar</BackLink>
        //     </div>
        //     <Form>
        //       <FormGroup>
        //         <Input
        //           type="text"
        //           value={title}
        //           onChange={(e) => setTitle(e.target.value)}
        //           placeholder="Título"
        //           required
        //         />
        //       </FormGroup>
        //       <FormGroup>
        //         <TextArea
        //           value={notes}
        //           onChange={(e) => setNotes(e.target.value)}
        //           placeholder="Observações"
        //           required
        //         />
        //       </FormGroup>
        //       <LinksSection>
        //         {/* <h3>Links úteis</h3>
        //         {links.map((link) => (
        //           <LinkInputContainer key={link.id}>
        //             <LinkInput
        //               type="url"
        //               value={link.url}
        //               onChange={(e) => handleLinkChange(link.id, e.target.value)}
        //               placeholder="Adicionar link"
        //               required
        //             />
        //             <RemoveLinkIcon onClick={() => handleRemoveLink(link.id)}>x</RemoveLinkIcon>
        //           </LinkInputContainer>
        //         ))} */}
        //         <AddLinkInput onClick={handleAddLink}>
        //           <span>Adicionar novo link</span>
        //           <AddLinkIcon>+</AddLinkIcon>
        //         </AddLinkInput>
        //       </LinksSection>
        //       <TagsSection>
        //         <h3>Marcadores</h3>
        //         <Input
        //           type="text"
        //           value={tags}
        //           onChange={(e) => setTags(e.target.value)}
        //           placeholder="Adicionar marcadores"
        //         />
        //       </TagsSection>
        //       <SaveButton type="button" onClick={handleSave}>
        //         Salvar
        //       </SaveButton>
        //     </Form>
        //   </Content>
        // </Container>
      

  };

  export default CreateNotes;