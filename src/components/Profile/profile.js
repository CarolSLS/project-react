import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #312e38;
  min-height: 100vh;
`;

export const Header = styled.div`
  width: 100%;
  padding: 30px 0;
  background-color: #232129;
  display: flex;
  align-items: center;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 50px;
  img {
    width: 30px;
    height: 30px;
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
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const CameraIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 40px;
  height: 40px;
  background-color: #ff9000;
  border-radius: 50%;
  padding: 5px;
  align-items: center;
`;

export const IconeCamera = styled.img`
  width: 24px;
  height: 24px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const FormGroup = styled.div`
  display: flex;
  margin-bottom: 15px;
  width: 100%;
  position: relative;
`;

export const Input = styled.input`
  width: 80%;
  padding: 15px 15px 15px 40px;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #232129;
  color: white;
  border: 1px solid #3e3b47;
`;

export const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 10px;
  width: 20px;
  height: 20px;
  transform: translateY(-50%);
  
`;

export const SaveButton = styled.button`
  width: 80%;
  padding: 10px;
  background-color: #ff9000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
`;
