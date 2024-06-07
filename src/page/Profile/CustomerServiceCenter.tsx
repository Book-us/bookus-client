import * as S from "./style/CustomerServiceCenter.style";

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

// Message
import { CustomerServiceAskMsg } from "../../assets/text/message";

const CustomerServiceCenter = () => {
  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} text="고객센터" />
      <S.MainContent>
        <MyProfileInfoTitle>이메일</MyProfileInfoTitle>
        <ProfileMainBox>
          <S.Email>고객센터 이메일</S.Email>
          <S.EmailValue>qhrrjsdyd123@gmail.com</S.EmailValue>
        </ProfileMainBox>
        <S.AskMsg>{CustomerServiceAskMsg}</S.AskMsg>
      </S.MainContent>
      <Navbar />
    </TopContainer>
  );
};

export default CustomerServiceCenter;
