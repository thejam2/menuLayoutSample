import { useEffect, useState } from "react";
import {
  parsePath,
  useLocation,
  useMatch,
  useNavigate,
  useParams,
} from "react-router-dom";
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
  const depth1Sample = ["Menu1Depth1", "Menu1Depth2", "Menu1Depth3"];
  const depth2Sample = ["Menu1Depth21", "Menu1Depth22", "Menu1Depth23"];
  //const [depth2State, setdepth2State] = useState(false);
  const navigate = useNavigate();
  let menuMatch = useMatch("/:menuNm/:depth1");
  let menuMatch2 = useMatch("/:menuNm/:depth1/:depth2");
  let match = "";

  if (menuMatch) {
    match = menuMatch.params.depth1;
  } else if (menuMatch2 != null) {
    match = menuMatch2.params.depth2;
  }

  const navMenuClick = (e, name) => {
    let copy = [...path];
    copy = copy.slice(0, 1);
    copy.push(name);
    setPath(copy);
    navigate("/menu1/" + name);
    [...document.querySelectorAll("#" + name + " div")].map((v) =>
      v.style.display === "block"
        ? (v.style.display = "none")
        : (v.style.display = "block")
    );
  };

  const depth2Click = (e, name, depth2) => {
    e.stopPropagation();
    navigate("/menu1/" + name + "/" + depth2);
  };

  return (
    <NavStyle>
      <NavTitle>제목</NavTitle>
      <NavMenuList>
        {depth1Sample.map((v, i) => {
          return (
            <div key={i}>
              <NavMenuDepth1
                onClick={(e) => navMenuClick(e, v)}
                style={match === v ? { color: "white" } : null}
                id={v}
              >
                {v}
                {depth2Sample.map((v2, i2) => {
                  return (
                    <NavMenuDepth2
                      key={i2}
                      style={match === v2 ? { display: "none", color: "white" } : { display: "none", color: "black" }}
                      onClick={(e) => depth2Click(e, v, v2)}
                    >
                      {v2}
                    </NavMenuDepth2>
                  );
                })}
              </NavMenuDepth1>
            </div>
          );
        })}
      </NavMenuList>
    </NavStyle>
  );
};

export default Nav1;
