import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #312E38;
  min-height: 100vh;
  padding-top: 20px;
`;

export const Header = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #232129;
  display: flex;
  align-items: center;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  img {
    width: 24px;
    height: 24px;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

export const UserImageContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const UserImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #FF9000;
`;

export const CameraIcon = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
  background-color: #FF9000;
  border-radius: 50%;
  padding: 5px;
`;

export const Form = styled.form`
  width: 100%;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #F4EDE8;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const SaveButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #FF9000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
`;



