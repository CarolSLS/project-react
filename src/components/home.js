import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #312e38;
`;

const Sidebar = styled.div`
  width: 20%;
  background-color: #232129;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0 0;
`;
const SidebarHeader = styled.h1`
  text-align: center;
  color: #ff9000;
`;
const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 10px;
`;
const MenuItem = styled.li`
  margin: 15px 0;
  cursor: pointer;
  color: #999591;
  &:hover {
      color: #ff9000;
  }
`;
const FooterLink = styled.a`
  width: auto;
  height: auto;
  color: #232129;
  text-align: center;
  text-decoration: none;
  padding: 20px;
  background-color: #ff9000;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: #f4f4f4;
`;

const Home = () => {
  return (
    <Container>
      <Sidebar>
        <div>
          <SidebarHeader>Rocket Notes</SidebarHeader>
          <Menu>
            <MenuItem>Todos</MenuItem>
            <MenuItem>Frontend</MenuItem>
            <MenuItem>Node</MenuItem>
            <MenuItem>React</MenuItem>
          </Menu>
        </div>
        <FooterLink href="#">+ Criar nota</FooterLink>
      </Sidebar>
    </Container>
  );
};

export default Home;
