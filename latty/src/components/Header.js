import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { logo, icon1, icon2, icon3, icon4, headerLine, colon } from "../assets";

const Header = () => {
  // 쿠키 선언
  const [cookie, setCookie] = useState(true); // true : 로그인 후, false : 로그인 전

  // 변수 선언
  const [link, setLink] = useState("/beforelogin");
  const [date, setDate] = useState("0000.00.00");
  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");

  // 로그인 전후 구분 함수
  useEffect(() => {
    if (cookie === true) {
      setLink("/function");
    }
  }, []);

  // 날짜
  useEffect(() => {
    const Timer = setInterval(() => {
      let time = new Date();

      if (time.getMonth() + 1 < 10 && time.getDate() < 10) {
        setDate(
          time.getFullYear() +
            ".0" +
            (time.getMonth() + 1) +
            ".0" +
            time.getDate()
        );
      } else if (time.getMonth() + 1 < 10 && time.getDate() >= 10) {
        setDate(
          time.getFullYear() +
            ".0" +
            (time.getMonth() + 1) +
            "." +
            time.getDate()
        );
      } else if (time.getMonth() + 1 >= 10 && time.getDate() < 10) {
        setDate(
          time.getFullYear() +
            "." +
            (time.getMonth() + 1) +
            ".0" +
            time.getDate()
        );
      } else if (time.getMonth() + 1 >= 10 && time.getDate() >= 10) {
        setDate(
          time.getFullYear() +
            "." +
            (time.getMonth() + 1) +
            "." +
            time.getDate()
        );
      } else {
        console.log("DateError (components/Header.js/62)");
      }
    }, 1000);

    return () => {
      clearInterval(Timer);
    };
  }, []);

  // 시간
  // 1. hour
  useEffect(() => {
    const Timer = setInterval(() => {
      let time = new Date();

      if (time.getHours() < 10) {
        setHour(`0${time.getHours()}`);
      } else if (time.getHours() >= 10) {
        setHour(time.getHours());
      } else {
        console.log("HourError (components/Header.js/82)");
      }
    }, 1000);

    return () => {
      clearInterval(Timer);
    };
  }, []);
  // 2. minute
  useEffect(() => {
    const Timer = setInterval(() => {
      let time = new Date();

      if (time.getMinutes() < 10) {
        setMinute(`0${time.getMinutes()}`);
      } else if (time.getMinutes() >= 10) {
        setMinute(time.getMinutes());
      } else {
        console.log("MinuteError (components/Header.js/110)");
      }
    }, 1000);

    return () => {
      clearInterval(Timer);
    };
  }, []);
  // 3. second
  useEffect(() => {
    const Timer = setInterval(() => {
      let time = new Date();

      if (time.getSeconds() < 10) {
        setSecond(`0${time.getSeconds()}`);
      } else if (time.getSeconds() >= 10) {
        setSecond(time.getSeconds());
      } else {
        console.log("SecondError (components/Header.js/118)");
      }
    }, 1000);

    return () => {
      clearInterval(Timer);
    };
  }, []);

  return (
    <>
      <Wrapper>
        <Link to={link} style={{ marginLeft: "3.1%" }}>
          <Img src={logo} alt="Logo" />
        </Link>

        <Texts>
          <BeforeWrapper cookie={cookie}>
            <div
              style={{
                display: "flex",
              }}
            >
              <Link to="/login">
                <P style={{ color: "#444444" }}>로그인</P>
              </Link>

              <div style={{ width: "45px" }} />

              <Link to="/signup">
                <P style={{ color: "#444444" }}>
                  회원가입
                  <Icon src={icon1} alt="👋" />
                </P>
              </Link>
            </div>
          </BeforeWrapper>

          <AfterWrapper cookie={cookie}>
            <InAfter>
              <div style={{ display: "flex" }}>
                <Link to="/calendar">
                  <P style={{ color: "#000000" }}>
                    달력
                    <Icon src={icon2} alt="📅" />
                  </P>
                </Link>

                <div style={{ width: "45px" }} />

                <Link to="/writinglist">
                  <P style={{ color: "#000000" }}>
                    짧은 글 목록
                    <Icon src={icon3} alt="📋" />
                  </P>
                </Link>

                <div style={{ width: "45px" }} />

                <Link to="/diary">
                  <P style={{ color: "#000000" }}>
                    일기 쓰기
                    <Icon src={icon4} alt="📝" />
                  </P>
                </Link>
              </div>

              <div style={{ width: "464px" }} />

              <ClockWrapper>
                <Clock>{date}</Clock>

                <div style={{ width: "23px" }} />
                <Img src={headerLine} alt="HeaderLine" />
                <div style={{ width: "23px" }} />

                <Clock>{hour}</Clock>

                <div style={{ width: "10px" }} />
                <Img3 src={colon} alt="Colon" />
                <div style={{ width: "10px" }} />

                <div
                  style={{
                    width: "53.5px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Clock>{minute}</Clock>
                </div>

                <div style={{ width: "10px" }} />
                <Img3 src={colon} alt="Colon" />
                <div style={{ width: "10px" }} />

                <div
                  style={{
                    width: "53.5px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Clock>{second}</Clock>
                </div>
              </ClockWrapper>
            </InAfter>
          </AfterWrapper>
        </Texts>
      </Wrapper>

      <Outlet />
    </>
  );
};

export default Header;

// styled-components
const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 95px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Img = styled.img``;

const Texts = styled.div`
  margin-right: 3.1%;
  display: flex;
  justify-content: space-between;
`;
const P = styled.p`
  display: flex;
  align-items: center;
  font-size: 34px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
`;
const BeforeWrapper = styled.div`
  display: ${({ cookie }) => (cookie ? "none" : "block")};
`;
const Icon = styled.img`
  margin-left: 8px;
  width: 32px;
`;

const AfterWrapper = styled.div`
  display: ${({ cookie }) => (cookie ? "block" : "none")};
`;
const InAfter = styled.div`
  display: flex;
  align-items: center;
`;
const ClockWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Clock = styled.p`
  font-size: 44px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  color: #444444;
`;
const Img3 = styled.img`
  width: 10px;
`;
