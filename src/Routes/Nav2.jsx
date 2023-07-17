import { useEffect, useState } from "react";
import { parsePath, useLocation, useMatch, useNavigate, useParams } from "react-router-dom";
import { styled } from "styled-components";

const NavStyle = styled.div`
  background-color: chocolate;
  grid-area: nav;
  display: flex;
  flex-direction: column;
  padding: 0 10%;
`;

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

const Nav1 = ({ path, setPath, testData }) => {
  const depth1Sample = ["Menu1Nav1", "Menu1Nav2", "Menu1Nav3"];
  const navigate = useNavigate();

  const navMenuClick = (e,name) =>{
    let copy = [...path];
    copy = copy.slice(0,1);
    copy.push(name);
    setPath(copy);
    navigate('/menu1/'+name)
  }

  return (
    <NavStyle>
      <NavTitle>제목</NavTitle>
      <NavMenuList>
        {depth1Sample.map((v, i) => {
          return (
            <NavMenuDepth1 key={i} onClick={(e) => navMenuClick(e, v)}>
              {v}
            </NavMenuDepth1>
          );
        })}
      </NavMenuList>
    </NavStyle>
  );
};

export default Nav1;
