import styled from "styled-components";
import officeImg from "../../assets/office.png"

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const SideBar = styled.div`
  width: 30%;
  background-color: #312E38;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackgroundContainer = styled.div`
  width: 70%;
  background: url(${officeImg}) no-repeat center center;
  background-size: cover;
`;

export const CreateContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  color: #FF9000;
`;

export const CreateTitle = styled.h2`
  text-align: center;
  color: #F4EDE8;
`;

export const Subtitle = styled.p`
  text-align: center;
  color: #999591;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  padding-left: 30px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #FF9000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const LoginLink = styled.a`
  text-align: center;
  margin-top: 20px;
  color: #FF9000;
  cursor: pointer;
`; 
