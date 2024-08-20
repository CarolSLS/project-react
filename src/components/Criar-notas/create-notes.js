import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #312e38;
  color: #f4ede8;
  min-height: 100vh;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #3e3b47;
`;

export const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
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
  width: calc(100% - 497px - 393px);
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 20px;
  /* gap: 20px; */
  margin-top: 20px;
`;

export const Title = styled.h1`
  color: #ff9000;
`;

export const BackLink = styled.div`
  color: #ff9000;
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
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

export const LinkInput = styled.input`
  flex: 1;
  padding: 8px 35px 8px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-right: 5px;
  position: relative;
`;

export const RemoveLinkIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: red;
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
  color: #ff9000;
`;

export const TagsSection = styled.div`
  margin-bottom: 15px;
`;

export const SaveButton = styled.button`
  padding: 10px 20px;
  background-color: #ff9000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
