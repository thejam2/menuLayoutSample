import { styled } from "styled-components";

const ContentStyle = styled.div`
  background-color: beige;
  grid-area: content;
  padding: 10px 20px;
`;

const ContentPath = styled.div`
  margin: 20px 0;
`;

const ContentTitle = styled(ContentPath)`
  font-size: 20px;
`;

const ContentText = styled.div``;

const Menu1 = ({ path }) => {

  return (
    <ContentStyle>
      {/* <ContentPath>{pathText}</ContentPath> */}
      <ContentPath>Menu1 - Menu1Depth1</ContentPath>
      <ContentTitle>타이틀</ContentTitle>
      <ContentText>본문</ContentText>
    </ContentStyle>
  );
};

export default Menu1;
