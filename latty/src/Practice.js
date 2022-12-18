import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Practice = () => {
  // 변수 선언
  const notify = () => {
    toast.success("로그인을 성공했습니다.", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
    });
  };
  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
};

export default Practice;
