import styled from "styled-components";

export const Container = styled.div`
  background-color: #312E38;
  color: #F4EDE8;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #232129;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
`;

export const WelcomeMessage = styled.h1`
  font-size: 1.5rem;
`;

export const LogoutIcon = styled.img`
  cursor: pointer;
`;

export const Content = styled.div`
  background-color: #3E3B47;
  border-radius: 8px;
  padding: 20px;
  color: #F4EDE8;
`;

export const NoteTitle = styled.h2`
  margin-bottom: 10px;
`;

export const NoteContent = styled.p`
  background-color: #F4EDE8;
  color: #312E38;
  padding: 10px;
  border-radius: 8px;
  max-width: 600px;
  margin-bottom: 20px;
`;

export const LinksSection = styled.div`
  margin-bottom: 20px;

  h3 {
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 5px;
  }
`;

export const TagsSection = styled.div`
  margin-bottom: 20px;

  h3 {
    margin-bottom: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 5px;
  }
`;

export const BackButton = styled.button`
  background-color: #FF9000;
  color: #F4EDE8;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
`;

export const DeleteButton = styled.button`
  background-color: #312E38;
  color: #F4EDE8;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  margin-left: auto;
`;
