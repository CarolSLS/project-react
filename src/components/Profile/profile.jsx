import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
    ProfileContainer, Header, BackButton, UserInfoContainer, UserImageContainer, UserImage,
    CameraIcon, IconeCamera, Form, FormGroup, Icon, Input, SaveButton
} from "./profile";
import userContext from "../userContext";
import cameraIcon from "../../assets/icon-camera.svg";
import arrowLeftIcon from "../../assets/icon-arrow-left.svg";
import userImg from "../../assets/user-image.jpeg";
import IconLock from "../../assets/icon-lock.svg"
import IconEmail from "../../assets/icon-email.svg"
import IconUser from "../../assets/icon-user.svg"

const Profile = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(userContext);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const handleBackClick = () => {
        navigate("/home");
    };


    const handleSave = (event) => {
        event.preventDefault();
        setUser((prevUser) => ({
            ...prevUser,
            name: name,
            email: email
        }));
        alert("Informações do usuário atualizadas!");
    }



    return (
        <ProfileContainer>
            <Header>
                <BackButton onClick={handleBackClick}>
                    <img src={arrowLeftIcon} alt="Voltar" />
                </BackButton>
            </Header>
            <UserInfoContainer>
                <UserImageContainer>
                    <UserImage src={user.profilePicture || userImg} />
                    <CameraIcon >
                        <IconeCamera src={cameraIcon} alt="Edit" />
                    </CameraIcon>
                </UserImageContainer>
                <Form onSubmit={handleSave}>
                    <FormGroup>
                        <Icon src={IconUser} alt="User-Icon" />
                        <Input type="text"
                            value={name}
                            onChange={(event) =>
                                setName(event.target.value)}
                            required
                            placeholder="Usuário" />
                    </FormGroup>
                    <FormGroup>
                        <Icon src={IconEmail} alt="Email-Icon" />
                        <Input type="email"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)}
                            required
                            placeholder="E-mail" />
                    </FormGroup>
                    <FormGroup>
                        <Icon src={IconLock} alt="Lock-Icon" />
                        <Input type="password"
                            value={currentPassword}
                            onChange={(event) =>
                                setCurrentPassword(event.target.value)}
                            placeholder="Senha atual" />
                    </FormGroup>
                    <FormGroup>
                        <Icon src={IconLock} alt="Lock-Icon" />
                        <Input type="password"
                            value={newPassword}
                            onChange={(event) =>
                                setNewPassword(event.target.value)}
                            placeholder="Nova senha" />
                    </FormGroup>
                    <SaveButton type="submit">Salvar</SaveButton>
                </Form>
            </UserInfoContainer>
        </ProfileContainer>
    );
};
export default Profile;