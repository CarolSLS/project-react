import styled from "styled-components";

export const Container = styled.div`
  background-color: #312E38;
  color: #F4EDE8;
  min-height: 100vh;
  padding: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #232129;
  padding: 10px 20px;
  border-radius: 8px;
`;

export const ProfilePicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const WelcomeMessage = styled.div`
  flex: 1;
  margin-left: 10px;
`;

export const LogoutIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const Content = styled.div`
  margin-top: 20px;
`;

export const Title = styled.h1`
  color: #FF9000;
`;

export const BackLink = styled.div`
  color: #FF9000;
  cursor: pointer;
`;

export const Form = styled.form`
  margin-top: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  min-height: 100px;
`;

export const LinksSection = styled.div`
  margin-bottom: 15px;
`;

export const LinkInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const LinkInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-right: 5px;
`;

export const RemoveLinkIcon = styled.span`
  color: #FF9000;
  cursor: pointer;
`;

export const AddLinkInput = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border: 1px dashed #ccc;
  border-radius: 4px;
  cursor: pointer;
  color: #999591;
`;

export const AddLinkIcon = styled.span`
  margin-left: auto;
  color: #FF9000;
`;

export const TagsSection = styled.div`
  margin-bottom: 15px;
`;

export const SaveButton = styled.button`
  padding: 10px 20px;
  background-color: #FF9000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

