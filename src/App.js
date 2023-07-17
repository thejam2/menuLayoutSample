import { createGlobalStyle, styled } from "styled-components";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import Main from "./Component/Main";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

const GlobalStyle = createGlobalStyle`
  body{
      margin: 0;
  }

  a{
      text-decoration: none;
      color: black;
  }
`;

const Grid = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  background-color: black;
  grid-template-columns: 15% auto;
  grid-template-rows: 15% repeat(2, 35%) 15%;
  grid-template-areas:
    "header header header header"
    "nav content content content"
    "nav content content content"
    "footer footer footer footer";
`;

function App() {
  
  const [path, setPath] = useState([]);
  const testData = [
    {
      menuParam: "menu1",
      menuNm: "Menu1",
    },
    {
      menuParam: "menu2",
      menuNm: "Menu2",
    },
    {
      menuParam: "menu3",
      menuNm: "Menu3",
    },
    {
      menuParam: "menu4",
      menuNm: "Menu4",
    },
    {
      menuParam: "menu5",
      menuNm: "Menu5",
    },
  ];

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Grid>
        <Header setPath={setPath} testData={testData} />

        <Main path={path} setPath={setPath} testData={testData} />

        <Footer />
      </Grid>
    </BrowserRouter>
  );
}

export default App;
