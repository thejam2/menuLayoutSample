import { useState } from "react";
import { Link, useMatch, useParams } from "react-router-dom";
import { styled } from "styled-components";

const HeaderStyle = styled.div`
  background-color: darkcyan;
  grid-area: header;
  display: flex;
  align-items: center;
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

const Header = ({ setPath, testData }) => {
  const linkClick = (value) => {
    setPath([value]);
  };

  const homeMatch = useMatch("/");
  let menuMatch = useMatch("/:menuNm");
  let menuMatch2 = useMatch("/:menuNm/:depth1");

  let match = "";
  if (menuMatch != null) {
    match = menuMatch.params.menuNm;
  } else if (menuMatch2 != null) {
    match = menuMatch2.params.menuNm;
  }

  return (
    <>
      <HeaderStyle>
        <Logo>
          <Link to={"/"} onClick={() => linkClick("홈")}>
            로고 area
          </Link>
        </Logo>
        <MenuList>
          {testData.map((v, i) => {
            return (
              <Menu key={i}>
                <Link
                  to={"/" + v.menuParam}
                  onClick={() => linkClick(v.menuNm)}
                  style={match === v.menuParam ? { color: "white" } : null}
                >
                  {v.menuNm}
                </Link>
              </Menu>
            );
          })}
        </MenuList>
      </HeaderStyle>
    </>
  );
};

export default Header;
