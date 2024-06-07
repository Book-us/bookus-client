import { useNavigate } from "react-router-dom";
import * as S from "./style/Root.style";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Logo
import Logo from "../../assets/svg/MainLogo.svg";

// Btn
import StandardBtn from "../../commons/Button/StandardBtn";

const RootPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/login");
  };
  return (
    <TopContainer $background="#FCFCFF">
      <S.MainContainer>
        <S.LogoBox src={Logo} alt="main-logo" />
        <S.BtnBox>
          <StandardBtn
            onClick={handleNavigate}
            $background="#83D0A1"
            $color="#FCFCFF"
          >
            서비스 시작하기
          </StandardBtn>
        </S.BtnBox>
      </S.MainContainer>
    </TopContainer>
  );
};

export default RootPage;
