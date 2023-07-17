import { styled } from "styled-components";

const HomeStyle = styled.div`
  background-color: ivory;
  grid-column: 1/-1;
  grid-row: 2/4;
`;

const Home = () => {
  return <HomeStyle>Home</HomeStyle>;
};

export default Home;
