import * as S from "./style/Announcement.style";

// TopContainer
import MainHeader from "../../components/Header/MainHeader";

// Header
import TopContainer from "../../components/Wrapper/TopContainer";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

// Navbar
import Navbar from "../../components/Navigation/Navbar";

// SVG
import NoAnnounceLogo from "../../assets/svg/Profile/NoAnnouncement.svg";

// Msg
import {
  FirstNoAnnounceMsg,
  SecondNoAnnounceMsg,
} from "../../assets/text/message";

const Announcement = () => {
  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} text="공지 사항" />
      <S.MainContent>
        <img src={NoAnnounceLogo} alt="logo" />
        <S.FirstTextBox>{FirstNoAnnounceMsg}</S.FirstTextBox>
        <S.SecondTextBox>{SecondNoAnnounceMsg}</S.SecondTextBox>
      </S.MainContent>
      <Navbar />
    </TopContainer>
  );
};

export default Announcement;
