import * as S from "../style";
import * as C from "./style";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// images
import { nextBt, search } from "../../../assets";
// components
import AuthHeader from "../../../components/AuthHeader";
import UserList from "../../../components/UserList";

const SignUp = () => {
  // 변수 선언
  let check = true;
  const [image, setImage] = useState("BlackNew");
  const [step, setStep] = useState(2);
  const [bt, setBt] = useState(false);
  const navigate = useNavigate();
  const BASE_URL = "노드 공부하시죠. ^^";

  // input value 변수
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
    pw: "",
    checkPw: "",
    number: "",
  });
  const { name, nickname, pw, checkPw, number } = inputs;

  // error message 변수
  const [errorN, setErrorN] = useState(""); // name error message
  const [errorNick, setErrorNick] = useState(""); // nickname error message

  // input value가 바뀔 때마다 전달
  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // error message 함수's
  // 1-1. name
  const errorNameM = () => {
    // 이름 입력 안 했을 때
    if (name === "") {
      toast.error("이름을 입력해 주세요.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1300,
      });
      check = false;
    }
    // 이름 2자 이상 아닐 때
    else if (name.length < 2) {
      setErrorN("2자 이상으로 작성해 주세요.");
      check = false;
    } else {
      setErrorN("");
    }
  };
  // 1-2. nickname
  const errorNickNameM = () => {
    // 별명 입력 안 했을 때
    if (nickname === "") {
      toast.error("별명을 입력해 주세요.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1300,
      });
      check = false;
    } // 별명 15자 이하 아닐 때
    else if (nickname.length >= 15) {
      setErrorNick("15자 이하로 작성해 주세요.");
      check = false;
    } else {
      setErrorNick("");
    }
  };
  // 1-3. password & check password
  const errorPwM = () => {
    // 비밀번호 입력 안 했을 때
    if (pw === "" && checkPw === "") {
      toast.error("비밀번호를 입력해 주세요.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1300,
      });
      check = false;
    }
    // 비밀번호가 일치하지 않을 때
    else if (pw !== checkPw) {
      toast.error("비밀번호가 일치하지 않습니다.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1300,
      });
      check = false;
    }
  };
  // 2-1. number
  const errorNumber = () => {
    const reg = /[0-9]/gi;

    // 숫자 입력 안 했을 때
    if (number === "") {
      toast.error("숫자를 입력해 주세요.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1300,
      });
      check = false;
    }
    // 나만의 숫자 형식 틀렸을 때
    else if (
      number < -9999999999 ||
      number > 9999999999 ||
      number === "-0" ||
      !reg.test(number)
    ) {
      toast.error("잘못된 숫자 형식입니다.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1300,
      });
      check = false;
    }
  };

  // 회원가입 확인 함수'S
  // STEP 1. 회원가입
  const checkStep1 = () => {
    errorNameM();
    errorNickNameM();
    errorPwM();

    if (check) {
      setErrorN("");
      setErrorNick("");
      setStep(2); // setStep(2);
      setImage("GreenNew");

      // axios 연동
      axios({
        method: "POST",
        url: `${BASE_URL}/user/signup`,
        data: {
          name: name,
          nickname: name,
          pw: pw,
        },
      });
    }
  };
  // STEP 2. NEW
  const checkStep2 = () => {
    if (check) {
      setStep(3);
      setImage("BlackNew");

      // axios 연동
      axios({
        method: "POST",
        url: `${BASE_URL}/user/signup`,
        data: {
          number: number,
        },
      });
    }
  };

  // STEP 3.나만의 숫자
  const checkStep3 = () => {
    errorNumber();

    if (check) {
      // axios 연동
      axios({
        method: "POST",
        url: `${BASE_URL}/user/signup`,
        data: {
          number: number,
        },
      });
      navigate("/login");
    }
  };

  // nuumber input enterkey 눌렀을 때 경로
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      errorNumber();

      if (check) {
        // axios 연동
        axios({
          method: "POST",
          url: `${BASE_URL}/user/signup`,
          data: {
            number: number,
          },
        });
        navigate("/login");
      }
    }
  };

  return (
    <>
      <ToastContainer />

      <S.Wrapper>
        <S.Box>
          <AuthHeader step={step} image={image} />

          <S.Body step={step}>
            <S.STEP1 step={step}>
              <div>
                <S.Title>이름</S.Title>
                <S.Input
                  onChange={onChange}
                  name="name"
                  value={name}
                  type="text"
                  placeholder="이름을 입력해 주세요."
                />
                <S.Error>{errorN}</S.Error>
              </div>

              <div style={{ marginTop: "23px" }}>
                <S.Title>별명</S.Title>
                <S.Input
                  onChange={onChange}
                  name="nickname"
                  value={nickname}
                  type="text"
                  placeholder="별명을 입력해 주세요."
                />
                <S.Error>{errorNick}</S.Error>
              </div>

              <div style={{ marginTop: "23px" }}>
                <S.Title>비밀번호</S.Title>
                <S.Input
                  onChange={onChange}
                  name="pw"
                  value={pw}
                  type="password"
                  placeholder="비밀번호를 입력해 주세요."
                />
              </div>

              <div style={{ marginTop: "40px" }}>
                <S.Title>비밀번호 확인</S.Title>
                <S.Input
                  onChange={onChange}
                  name="checkPw"
                  value={checkPw}
                  type="password"
                  placeholder="비밀번호를 다시 입력해 주세요."
                />
              </div>

              <S.BtWrapper style={{ marginTop: "50px" }} bt={bt}>
                <S.Bt onClick={checkStep1}>
                  <S.Img1 src={nextBt} alt="NextBt" />
                </S.Bt>
              </S.BtWrapper>
            </S.STEP1>

            <S.STEP2 step={step}>
              <div>
                <S.Title style={{ color: "#000000" }}>
                  새로운 회원가입 정보 기능
                </S.Title>

                <S.Explain>
                  전화번호나 이메일 없이도 가입할 수 있습니다.
                </S.Explain>
              </div>

              <S.CheckBox>
                <C.Body>
                  <C.Header>
                    <C.Title>나만의 숫자 중복 확인</C.Title>
                  </C.Header>

                  <C.Nav>
                    <div
                      style={{
                        width: "246px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <C.Number>숫자</C.Number>
                      <C.Input />
                      <C.Bt>
                        <C.Img2 src={search} alt="Search" />
                      </C.Bt>
                    </div>
                  </C.Nav>

                  <div>
                    <C.SearchBox>
                      <div
                        style={{
                          width: "140px",
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <C.P>사용자</C.P>
                      </div>
                      <div
                        style={{
                          width: "394px",
                          height: "100%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          borderLeft: "1px solid #6C7139",
                        }}
                      >
                        <C.P>숫자</C.P>
                      </div>
                    </C.SearchBox>
                  </div>

                  <UserList />
                </C.Body>
              </S.CheckBox>

              <div style={{ marginTop: "20px" }}>
                <ul>
                  <S.P>
                    ⦁ 원하는 숫자를 골라 중복 확인을 한 후 개인정보 대신 사용해
                    보세요.
                  </S.P>
                  <S.P>⦁ 정수 범위는 -9,999,999,999 ~ 9,999,999,999입니다.</S.P>
                </ul>
              </div>

              <S.BtWrapper style={{ marginTop: "35px" }} bt={bt}>
                <S.Bt onClick={checkStep2}>
                  <S.Img1 src={nextBt} alt="NextBt" />
                </S.Bt>
              </S.BtWrapper>
            </S.STEP2>

            <S.STEP3 step={step}>
              <div style={{ marginTop: "80px" }}>
                <S.Title>나만의 숫자</S.Title>
                <S.Input
                  onChange={onChange}
                  onKeyPress={onKeyPress}
                  name="number"
                  value={number}
                  type="text"
                  placeholder="숫자를 입력해 주세요."
                />
              </div>

              <S.BtWrapper style={{ marginTop: "50px" }} bt={bt}>
                <S.Bt onClick={checkStep3}>
                  <S.Img1 src={nextBt} alt="NextBt" />
                </S.Bt>
              </S.BtWrapper>
            </S.STEP3>
          </S.Body>
        </S.Box>
      </S.Wrapper>
    </>
  );
};

export default SignUp;
