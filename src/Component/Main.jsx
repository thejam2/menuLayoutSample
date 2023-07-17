import { useEffect, useState } from "react";
import { Route, Routes, useMatch, useParams } from "react-router-dom";
import { styled } from "styled-components";
import Nav1 from "../Routes/Nav1";
import Nav2 from "../Routes/Nav2";
import Menu1 from "../Routes/Menu1";
import Menu1_1 from "../Routes/Menu1_1";
import Menu1_2 from "../Routes/Menu1_2";
import Menu1_3 from "../Routes/Menu1_3";
import Home from "../Routes/Home";

const Main = ({ path, setPath, testData }) => {
  const homeMatch = useMatch("/");

  return (
    <>
      {/* {!homeMatch && <Nav path={path} setPath={setPath} testData={testData}/>} */}
      <Routes>
        <Route path={"/"} element={<Home path={path} />} />
        <Route
          path={"/menu1"}
          element={
            <>
              <Nav1 path={path} setPath={setPath} testData={testData} />
              <Menu1 path={path} testData={testData} />
            </>
          }
        />
        <Route
          path={"/menu1/Menu1Nav1"}
          element={
            <>
              <Nav1 path={path} setPath={setPath} testData={testData} />
              <Menu1_1 path={path} testData={testData} />
            </>
          }
        />
        <Route
          path={"/menu1/Menu1Nav2"}
          element={
            <>
              <Nav1 path={path} setPath={setPath} testData={testData} />
              <Menu1_2 path={path} testData={testData} />
            </>
          }
        />
        <Route
          path={"/menu1/Menu1Nav3"}
          element={
            <>
              <Nav1 path={path} setPath={setPath} testData={testData} />
              <Menu1_3 path={path} testData={testData} />
            </>
          }
        />
        <Route
          path={"/menu2"}
          element={
            <>
              <Nav2 path={path} setPath={setPath} testData={testData} />
              <Menu1 path={path} testData={testData} />
            </>
          }
        />
        <Route
          path={"/menu3"}
          element={
            <>
              <Nav1 path={path} setPath={setPath} testData={testData} />
              <Menu1 path={path} testData={testData} />
            </>
          }
        />
        <Route
          path={"/menu4"}
          element={
            <>
              <Nav1 path={path} setPath={setPath} testData={testData} />
              <Menu1 path={path} testData={testData} />
            </>
          }
        />
        <Route
          path={"/menu5"}
          element={
            <>
              <Nav1 path={path} setPath={setPath} testData={testData} />
              <Menu1 path={path} testData={testData} />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default Main;
