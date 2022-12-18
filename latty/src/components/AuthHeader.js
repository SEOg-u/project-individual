import styled from "styled-components";
import { Link } from "react-router-dom";

//images
import { logo } from "../assets";

const AuthHeader = ({ step, image }) => {
  return (
    <Wrapper>
      <Header>
        <Link to="/">
          <Img1 src={logo} alt="Logo" />
        </Link>
      </Header>

      <div style={{ marginTop: "50px" }}>
        <Texts>
          <Li1 step={step}>
            <PWrapper
              style={{
                width: "134.33px",
              }}
            >
              <P>STEP 1.</P>
              <Pin>회원가입</Pin>
            </PWrapper>
          </Li1>

          <SmallLi />

          <Li2 step={step}>
            <PWrapper
              style={{
                width: "104.17px",
              }}
            >
              <P>STEP 2.</P>
              <Img2
                src={require(`../assets/img/${image}.png`)}
                alt={`${image}`}
              />
            </PWrapper>
          </Li2>

          <SmallLi />

          <Li3 step={step}>
            <PWrapper
              style={{
                width: "161.5px",
              }}
            >
              <P>STEP 3.</P>
              <Pin>나만의 숫자</Pin>
            </PWrapper>
          </Li3>

          <SmallLi />

          <Li4 step={step}>
            <PWrapper style={{ width: "119.55px" }}>
              <P>STEP 4.</P>
              <Pin>로그인</Pin>
            </PWrapper>
          </Li4>
        </Texts>
      </div>
    </Wrapper>
  );
};

export default AuthHeader;

// styles
const pStyle = styled.p`
  font-family: "Noto Sans";
  font-style: normal;
  font-size: 18px;
  color: #000000;
`;

const liStyle = styled.li`
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
`;

// styled-components
const Wrapper = styled.div`
  margin: 60px 0 0 73px;
  width: 654px;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
`;
const Img1 = styled.img``;

const Texts = styled.ol`
  display: flex;
  justify-content: space-between;
`;

const Li1 = styled(liStyle)`
  border-bottom: ${({ step }) =>
    step === 1 ? "2px solid #6C7139" : "1px solid #e0e0e0"};
`;
const Li2 = styled(liStyle)`
  border-bottom: ${({ step }) =>
    step === 2 ? "2px solid #6C7139" : "1px solid #e0e0e0"};
`;
const Li3 = styled(liStyle)`
  border-bottom: ${({ step }) =>
    step === 3 ? "2px solid #6C7139" : "1px solid #e0e0e0"};
`;
const Li4 = styled(liStyle)`
  border-bottom: ${({ step }) =>
    step === 4 ? "2px solid #6C7139" : "1px solid #e0e0e0"};
`;

const PWrapper = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
`;
const P = styled(pStyle)`
  font-weight: 300;
`;
const Pin = styled(pStyle)`
  margin-left: 8px;
  font-weight: 400;
`;
const Img2 = styled.img`
  margin-left: 7px;
  width: 40px;
  height: 14px;
`;

const SmallLi = styled.li`
  width: 45px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;
`;
