import { useNavigate } from "react-router-dom";
import * as S from "./style/LoginRequired.style";

// TopContainer
import TopContainer from "../../components/Wrapper/TopContainer";

// Logo
import Logo from "../../assets/svg/NotFoundLogo.svg";

// msg
import { LoginRequiredMsg } from "../../assets/text/message";

// Navbar
import Navbar from "../../components/Navigation/Navbar";

const LoginRequired = () => {
  const navigate = useNavigate();
  return (
    <TopContainer $background="#FCFCFF">
      <S.MainContainer>
        <img src={Logo} alt="logo" />
        <S.FirstMsg>{LoginRequiredMsg}</S.FirstMsg>
        <S.NaviagteToLoginBtn onClick={() => navigate("/login")}>
          로그인하러 가기
        </S.NaviagteToLoginBtn>
        <Navbar />
      </S.MainContainer>
    </TopContainer>
  );
};

export default LoginRequired;
