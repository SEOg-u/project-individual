import * as S from "./style";

// components
import Bunch3 from "../../components/function/bunchs/Bunch3";

const Function = () => {
  return (
    <S.Wrapper>
      <div style={{ width: "1520px" }}>
        <div style={{ width: "100%", height: "120px" }} />

        <S.Inner>
          <Bunch3 />
        </S.Inner>
      </div>
    </S.Wrapper>
  );
};

export default Function;
