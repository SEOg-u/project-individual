import styled from "styled-components";

// images
import { sadFace } from "../assets";

const Error = () => {
  return (
    <Wrapper>
      <Box>
        <Header>
          <Title>404</Title>
          <Message>Page Not Found</Message>
        </Header>

        <Body>
          <Img1 src={sadFace} alt="SadFace" />

          <div style={{ marginTop: "45px" }}>
            <Content>
              요청하신 페이지를 찾을 수 없습니다. <br />
              Unable to find pages you requested.
            </Content>
          </div>
        </Body>
      </Box>
    </Wrapper>
  );
};

export default Error;

// styled-components
const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d1d1d1;
`;
const Box = styled.div`
  width: 900px;
  height: 750px;
  background-color: #ffffff;
  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
`;

const Header = styled.div`
  margin-top: 50px;
  text-align: center;
`;
const Title = styled.p`
  height: 119px;
  font-size: 110px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
`;
const Message = styled.p`
  font-size: 52px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
`;

const Body = styled.div`
  margin-top: 50px;
  text-align: center;
`;
const Img1 = styled.img`
  width: 230px;
`;
const Content = styled.p`
  font-size: 32px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
`;
