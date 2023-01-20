import styled from "styled-components";
import { useState } from "react";

const Writing = () => {
  // 변수 선언
  const [todos, setTodos] = useState([
    {
      id: 1,
      clock: "오전 02:17",
      text: "괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅",
    },
    {
      id: 2,
      clock: "오후 03:03",
      text: "아 시험 2주도 안 남았는데 뭐 하는 짓이지......😆",
    },
    {
      id: 3,
      clock: "오후 04:17",
      text: "괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅괅",
    },
  ]);

  // input value 변수
  const [inputs, setInputs] = useState({
    comment: "",
  });
  const { comment } = inputs;

  // input value가 바뀔 때마다 전달
  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Wrapper>
      <div
        style={{ margin: "20px 30px 0 30px", width: "480px", height: "476px" }}
      >
        {todos.map((v) => (
          <div key={v.id} style={{ marginTop: "12px" }}>
            <Clock>{v.clock}</Clock>

            <Comment>
              <P>{v.text}</P>
            </Comment>
          </div>
        ))}
      </div>

      <div
        style={{ margin: "20px 30px 0 30px", width: "480px", height: "45px" }}
      >
        <Input
          onChange={onChange}
          name="comment"
          value={comment}
          type="text"
          placeholder="지금 기분을 적어주세요."
        />
      </div>
    </Wrapper>
  );
};

export default Writing;

// styled-components
const Wrapper = styled.div`
  margin-top: 15px;
  height: 581px;
  background: #ffffff;
  border: 1px solid #6c7139;
  border-radius: 10px;
`;
const Clock = styled.div`
  margin-bottom: 3px;
  font-size: 15px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
`;
const Comment = styled.div`
  width: 480px;
  background-color: #ffffff;
  border: 1px solid #6c7139;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;
const P = styled.p`
  margin: 15px;
  font-size: 16px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
`;

const Input = styled.input``;
