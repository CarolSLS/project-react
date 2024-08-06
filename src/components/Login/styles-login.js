import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const SideBar = styled.div`
  width: 40%;
  background-color: #312e38 !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackgroundContainer = styled.div`
  width: 60%;
  background: url(${(props) => props.backgroundImage}) no-repeat center center;
  height: 100vh;
  background-size: cover;
`;
/* display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: repeat; */

export const LoginContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  color: #ff9000;
`;

export const LoginTitle = styled.h2`
  text-align: center;
  color: #f4ede8;
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

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
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
  background-color: #ff9000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  /* &:hover {
    background-color: #218838;
  } */
`;

export const CreateAccount = styled.h2`
  text-align: center;
  margin-top: 20px;
  color: #ff9000;
  &:hover{
    cursor: pointer;
  }
  
  `;
