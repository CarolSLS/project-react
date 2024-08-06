import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileContainer, Header, BackButton, UserInfoContainer, UserImageContainer, UserImage,
    CameraIcon, Form, FormGroup, Label,  SaveButton} from "./profile";
import  userContext  from "../userContext";
import cameraIcon from "../../assets/icon-camera.svg";
import arrowLeftIcon from "../../assets/icon-arrow-left.svg";
import userImg from "../../assets/user-image.jpeg";

const Profile = () => {
    const navigate = useNavigate();
    const {user, setUser} = useContext(userContext);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleBackClick = () => {
        navigate("/home");
    };

    const handleSave = (event) => {
        event.preventDefault();
        setUser({user, name, email});
        alert("Informações do usuário atualizadas!");
    };


    return (
        <ProfileContainer>
            <Header>
                <BackButton onclick={handleBackClick}>
                    <img src={arrowLeftIcon} alt="" />
                </BackButton>
            </Header>
            <UserInfoContainer>
                <UserImageContainer>
                    <UserImage src={user.profilePicture || userImg}/>
                    <CameraIcon src={cameraIcon} alt="Edit"/>
                </UserImageContainer>
                <Form onSubmit={handleSave}>
                    <FormGroup>
                        <Label>Nome</Label>
                        <input type="text" value={name} onChange={(event) => setName(event.target.value)} required />
                    </FormGroup>
                    <FormGroup>
                        <Label>E-mail</Label>
                        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}  />
                    </FormGroup>
                    <FormGroup>
                        <Label>Senha atual</Label>
                        <input type="password" value={currentPassword} onChange={(event) => setCurrentPassword(event.target.value)} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Nova senha</Label>
                        <input type="password" value={newPassword} onChange={(event) => setNewPassword(event.target.value)}  />
                    </FormGroup>
                    <SaveButton type="submit">Salvar</SaveButton>
                </Form>
            </UserInfoContainer>
        </ProfileContainer>
    );
};

export default Profile;