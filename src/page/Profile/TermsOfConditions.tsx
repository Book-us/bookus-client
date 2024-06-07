import * as S from "./style/TermsOfConditions.style";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

// Navbar
import Navbar from "../../components/Navigation/Navbar";

// Component
import MyProfileInfoTitle from "../../components/Profile/MyProfileInfoTitle";
import ProfileMainBox from "../../components/Profile/ProfileMainBox";

// SVG
import pointer from "../../assets/svg/Profile/DetailRoutePointer.svg";

const TermsOfConditions = () => {
  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} text="이용약관" />
      <S.MainContent>
        <MyProfileInfoTitle>필수 이용약관</MyProfileInfoTitle>
        <ProfileMainBox>
          <S.Condition>서비스 이용약관</S.Condition>
          <S.RoutingArrow src={pointer} alt="pointer" />
        </ProfileMainBox>
        <ProfileMainBox>
          <S.Condition>개인정보 처리 방침</S.Condition>
          <S.RoutingArrow src={pointer} alt="pointer" />
        </ProfileMainBox>
        <MyProfileInfoTitle>선택 이용약관</MyProfileInfoTitle>
        <ProfileMainBox>
          <S.Condition>마켓팅 정보 수신동의</S.Condition>
          <S.RoutingArrow src={pointer} alt="pointer" />
        </ProfileMainBox>
      </S.MainContent>
      <Navbar />
    </TopContainer>
  );
};

export default TermsOfConditions;
