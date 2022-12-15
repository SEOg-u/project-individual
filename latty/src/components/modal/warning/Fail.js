import * as S from "./style";
import { warningXBt, exclamationMark } from "../../../assets";

const Fail = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.XBt>
          <S.Img1 src={warningXBt} alt="WarningXBt" />
        </S.XBt>
      </S.Header>

      <S.Body>
        <S.Img2 src={exclamationMark} />
        <S.P>이름을 입력해 주세요.</S.P>
      </S.Body>
    </S.Wrapper>
  );
};

export default Fail;

// styled-components
