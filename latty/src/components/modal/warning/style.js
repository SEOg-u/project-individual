import styled from "styled-components";

const Wrapper = styled.div`
  /* margin-bottom: 16px; */
  width: 300px;
  height: 80px;
  background-color: #ffffff;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;
const Header = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const XBt = styled.button`
  margin: 7px 7px 0 0;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;
`;
const Img1 = styled.img`
  width: 11px;
  height: 11px;
`;

const Body = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
`;
const Img2 = styled.img`
  margin-right: 10px;
  width: 24px;
  height: 24px;
`;
const P = styled.p`
  font-size: 16px;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  color: #757575;
`;

export { Wrapper, Header, XBt, Img1, Body, Img2, P };
