import styled from "styled-components";

// styled-components
export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dee1ce;
`;
export const Box = styled.div`
  width: 800px;
  height: 100%;
  background-color: #ffffff;
`;
export const Body = styled.div`
  margin-left: 100px;
  margin-top: ${({ step }) =>
    step === 1 || step === 3 || step === 4 ? "60px" : "45px"};
  width: 600px;
`;

export const STEP1 = styled.div`
  display: ${({ step }) => (step !== 1 ? "none" : "block")};
`;
export const STEP2 = styled.div`
  display: ${({ step }) => (step !== 2 ? "none" : "block")};
`;
export const STEP3 = styled.div`
  display: ${({ step }) => (step !== 3 ? "none" : "block")};
`;

export const Title = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #444444;
`;
export const Input = styled.input`
  margin-top: 10px;
  padding: 0 40px 0 40px;
  width: 600px;
  height: 60px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  border: 1px solid #808080;

  &::placeholder {
    color: #808080;
  }
`;
export const Error = styled.div`
  margin-top: 2px;
  height: 15px;
  font-size: 11.5px;
  color: red;
  font-weight: 700;
`;

export const BtWrapper = styled.div`
  display: flex;
  justify-content: ${({ bt }) => (bt ? "space-between" : "end")};
`;
export const Bt = styled.button`
  width: 53px;
  height: 53px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const Img1 = styled.img`
  width: 53px;
`;

export const Explain = styled.p`
  margin-top: 5px;
  font-size: 19px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  color: #444444;
`;

export const CheckBox = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 426px;
  background-color: #ffffff;
  border-width: 15px 3px 3px 3px;
  border-style: solid;
  border-color: #6c7139;
  border-radius: 5px;
`;

export const P = styled.p`
  font-size: 19.2px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  color: #444444;
`;
