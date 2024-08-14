import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #312e38;
`;
export const Sidebar = styled.div`
  width: 20%;
  background-color: #232129;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0 0;
`;
export const SidebarHeader = styled.h1`
  text-align: center;
  color: #ff9000;
`;
export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 10px;
`;
export const MenuItem = styled.li`
  margin: 15px 0;
  cursor: pointer;
  color: #999591;
  &:hover {
    color: #ff9000;
  }
`;
export const FooterLink = styled.a`
  width: auto;
  height: auto;
  color: #232129;
  text-align: center;
  text-decoration: none;
  padding: 20px;
  background-color: #ff9000;
  cursor: pointer;
`;
export const Content = styled.div`
  flex-grow: 1;
  padding: 20px 50px;
  background-color: #312e38;
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const ProfilePicture = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: white;
  &:hover{
    cursor: pointer;
  }
`;

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const WelcomeMessage = styled.p`
  margin-left: 10px;
  color: #999591;
  font-size: 14px;

`;

export const WelcomeUser = styled.h2`
  font-size: 18px;
  color: #F4EDE8;

`;
export const LogoutIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-right: 60px;
`;
export const SearchBar = styled.input`
  width: 91%;
  padding: 10px;
  margin: 20px 0;
  /* border: 1px solid #ccc; */
  border-radius: 4px;
  background-color: #232129;
`;
export const NotesSection = styled.div`
  margin-top: 20px;
`;
export const TitleUp = styled.h3`
  margin-bottom: 20px;
  color: #999591;
`;
export const Note = styled.div`
  width: 90%;
  background-color: #3e3b47;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
export const NoteTitle = styled.h4`
  margin-bottom: 10px;
  color: white;
`;
export const TagContainer = styled.div`
  display: flex;
  gap: 10px;
`;
export const Tag = styled.span`
  padding: 5px 10px;
  background-color: #ff9000;
  color: white;
  border-radius: 4px;
  font-size: 0.875rem;
`;
