import * as S from "./style";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// conponents
import AuthHeader from "../../components/AuthHeader";
// images
import { beforeBt, nextBt } from "../../assets";

const LogIn = () => {
  // 변수 선언
  const [cookies, setCookie] = useCookies(["accessToken"]); // Cookie hook
  const navigate = useNavigate();
  let check = true;
  const BASE_URL = "노드 공부하시죠. ^^";
  const [bt, setBt] = useState(true);
  const [image, setImage] = useState("BlackNew");
  const [step, setStep] = useState(4);

  // input value 변수
  const [inputs, setInputs] = useState({
    nickname: "",
    pw: "",
    number: "",
  });
  const { nickname, pw, number } = inputs;

  // input value가 바뀔 때마다 전달
  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // error message 함수's
  // 1. nickname
  const errorNickNameM = () => {
    // 별명 입력 안 했을 때
    if (nickname === "") {
      toast.error("별명을 입력해 주세요.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1300,
      });
      check = false;
    }
  };
  // 2. password
  const errorPwM = () => {
    if (pw === "") {
      toast.error("비밀번호를 입력해 주세요.", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1300,
      });
      check = false;
    }
  };
  // 3. number
  const errorNumberM = () => {
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

  // 로그인 확인 함수
  const checkLogIn = () => {
    errorNickNameM();
    errorPwM();
    errorNumberM();

    if (check) {
      // axios 연동
      axios.post({
        url: `${BASE_URL}/user/login`,
        data: {
          nickname: nickname,
          pw: pw,
          number: number,
        },
      });
    }
  };

  return (
    <>
      <ToastContainer />

      <S.Wrapper>
        <S.Box>
          <AuthHeader step={step} image={image} />

          <S.Body step={step}>
            <div>
              <S.Title>별명</S.Title>
              <S.Input
                onChange={onChange}
                name="nickname"
                value={nickname}
                type="text"
                placeholder="별명을 입력해 주세요."
              />
            </div>

            <div style={{ marginTop: "38px" }}>
              <S.Title>비밀번호</S.Title>
              <S.Input
                onChange={onChange}
                name="pw"
                value={pw}
                type="password"
                placeholder="비밀번호를 입력해 주세요."
              />
            </div>

            <div style={{ marginTop: "38px" }}>
              <S.Title>나만의 숫자</S.Title>
              <S.Input
                onChange={onChange}
                name="number"
                value={number}
                type="text"
                placeholder="숫자를 입력해 주세요."
              />
            </div>

            <S.BtWrapper style={{ marginTop: "80px" }} bt={bt}>
              <S.Bt
                onClick={() => {
                  navigate("/signup");
                }}
                title="회원가입"
              >
                <S.Img1 src={beforeBt} alt="BeforeBt" />
              </S.Bt>

              <S.Bt onClick={checkLogIn}>
                <S.Img1 src={nextBt} alt="NextBt" />
              </S.Bt>
            </S.BtWrapper>
          </S.Body>
        </S.Box>
      </S.Wrapper>
    </>
  );
};

export default LogIn;
