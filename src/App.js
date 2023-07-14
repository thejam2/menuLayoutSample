import { styled } from "styled-components";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ContentComponent from "./pages/ContentComponent";
import { useState } from "react";

const Grid = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  background-color: black;
  grid-template-columns: 20% auto;
  grid-template-rows: 15% repeat(2, 35%) 15%;
  grid-template-areas:
    "header header header header"
    "nav content content content"
    "nav content content content"
    "footer footer footer footer";
`;

const Header = styled.div`
  background-color: darkcyan;
  grid-area: header;
  display: flex;
  align-items: center;
`;

const Nav = styled.div`
  background-color: aliceblue;
  grid-area: nav;
  display: flex;
  flex-direction: column;
  padding: 0 10%;
`;
const Content = styled.div`
  background-color: beige;
  grid-area: content;
  padding: 10px 20px;
`;

const Footer = styled.div`
  background-color: burlywood;
  grid-area: footer;
`;

const Logo = styled.div`
  width: 10%;
  text-align: center;
  cursor: pointer;
`;

const MenuList = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Menu = styled.h3``;

const NavTitle = styled.h4``;

const NavMenuList = styled.div``;

const NavMenuDepth1 = styled.div`
  cursor: pointer;
  padding: 1%;
`;

const NavMenuDepth2 = styled(NavMenuDepth1)`
  margin-left: 10px;
`;

const NavMenuDepth3 = styled(NavMenuDepth1)`
  margin-left: 20px;
`;

const ContentPath = styled.div`
  margin: 20px 0;
`;

const ContentTitle = styled(ContentPath)`
  font-size: 20px;
`;

const ContentText = styled.div``;

function App() {
  const testArr = new Array(5).fill('');
  const [bigMenu, setBigMenu] = useState(testArr);
  


  return (
    <BrowserRouter>
      <Grid>
        <Header>
          <Logo>
            <Link to={"/"}>로고 area</Link>
          </Logo>
          <MenuList>
            {bigMenu.map((v, i) => (
              <Menu key={i}>
                <Link to={"/menu"+(i+1)}>대메뉴{i+1}</Link>
              </Menu>
            ))}
          </MenuList>
        </Header>
        <Routes>
          <Route path={"/"} element={<div></div>} />
        </Routes>
        <Nav>
          <NavTitle>서브메뉴제목</NavTitle>
          <NavMenuList>
            <NavMenuDepth1>서브메뉴1</NavMenuDepth1>
            <NavMenuDepth2>sub01</NavMenuDepth2>
            <NavMenuDepth2>sub02</NavMenuDepth2>
            <NavMenuDepth3>sub02-1</NavMenuDepth3>
          </NavMenuList>
        </Nav>
        <Content>
          <ContentPath>ContentPath</ContentPath>
          <ContentTitle>ContentTitle</ContentTitle>
          <ContentText>ContentText</ContentText>
        </Content>
        <Footer>Footer</Footer>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
