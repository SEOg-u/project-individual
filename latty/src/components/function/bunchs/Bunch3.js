import * as S from "./styles";
import { useState } from "react";
import dummy from "../../../DB/famousSaying.json";

// images
import { profile, weatherIcon } from "../../../assets";
import Writing from "../Writing";

const Bunch3 = () => {
  // 변수 선언
  const [rand, setRand] = useState(Math.floor(Math.random() * 16));

  return (
    <S.Wrapper>
      <S.FamousSaying>
        <S.Top>
          <S.Profile>
            <div
              style={{
                width: "404px",
                height: "60px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <S.Img1 src={profile} alt="Profile" />
              <S.Name>진주짱짱쓰</S.Name>
            </div>

            <S.Img2 src={weatherIcon} alt="WeatherIcon" />
          </S.Profile>
        </S.Top>

        <S.Bottom>
          <S.P>{dummy.famousSaying[rand].words}</S.P>
          <S.P
            style={{ marginTop: "5px" }}
          >{`-${dummy.famousSaying[rand].speaker}-`}</S.P>
        </S.Bottom>
      </S.FamousSaying>

      <Writing />
    </S.Wrapper>
  );
};

export default Bunch3;
