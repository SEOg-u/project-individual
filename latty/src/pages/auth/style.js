import styled from "styled-components";

// styles

// styled-components
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dee1ce;
`;
const Box = styled.div`
  width: 800px;
  height: 100%;
  background-color: #ffffff;
`;
const Body = styled.div`
  margin-left: 100px;
  margin-top: ${({ step }) =>
    step === 1 || step === 3 || step === 4 ? "60px" : "45px"};
  width: 600px;
`;

const STEP1 = styled.div`
  display: ${({ step }) => (step !== 1 ? "none" : "block")};
`;
const STEP2 = styled.div`
  display: ${({ step }) => (step !== 2 ? "none" : "block")};
`;
const STEP3 = styled.div`
  display: ${({ step }) => (step !== 3 ? "none" : "block")};
`;

const Title = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #444444;
`;
const Input = styled.input`
  margin-top: 10px;
  padding: 0 40px 0 40px;
  width: 518px;
  height: 50px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  border: 1px solid #808080;

  &::placeholder {
    color: #808080;
  }
`;
const Error = styled.div`
  margin-top: 2px;
  height: 15px;
  font-size: 11.5px;
  color: red;
  font-weight: 700;
`;

const BtWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: end;
`;
const Bt = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const Img1 = styled.img`
  width: 53px;
`;

export {
  Wrapper,
  Box,
  Body,
  STEP1,
  STEP2,
  STEP3,
  Title,
  Input,
  Error,
  BtWrapper,
  Bt,
  Img1,
};
