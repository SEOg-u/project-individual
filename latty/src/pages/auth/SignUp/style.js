import styled from "styled-components";

// styled-components
export const Body = styled.div`
  margin: 17px 0 0 25px;
  width: 550px;
`;
export const Header = styled.div`
  height: 35px;
  border-bottom: 1px solid #d9d9d9;
`;
export const Title = styled.p`
  font-size: 17px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
`;

export const Nav = styled.div`
  margin-top: 12px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fafafa;
  border: 1px solid #d9d9d9;
`;
export const Number = styled.p`
  font-size: 16px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  color: #444444;
`;
export const Input = styled.input`
  padding: 0 10px 0 10px;
  height: 25px;
  width: 181px;
  font-size: 13px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  background: #ffffff;
  border: 1px solid #d9d9d9;
`;
export const Bt = styled.button`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e5e8d4;
  border: 1px solid #6c7139;
`;
export const Img2 = styled.img`
  width: 13px;
  height: 13px;
`;

export const ScrollWrapper = styled.div`
  position: absolute;
  margin-top: 12px;
  text-align: center;
  height: 258px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 15px;
    background: #e5e8d4;
    border-width: 1px 1px 1px 0;
    border-style: solid;
    border-color: #6c7139;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #6c7139;
  }
`;
