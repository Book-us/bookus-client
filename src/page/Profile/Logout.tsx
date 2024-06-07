import * as S from "./style/Logout.style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
import poiner from "../../assets/svg/Profile/DetailRoutePointer.svg";

// Modal
import LogoutModal from "../../components/Modal/Profile/LogoutModal";

const Logout = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} text="로그아웃" />
      <S.MainContent>
        <MyProfileInfoTitle>로그아웃</MyProfileInfoTitle>
        <ProfileMainBox>
          <S.LogoutBox onClick={openModal}>로그아웃</S.LogoutBox>
        </ProfileMainBox>
        <MyProfileInfoTitle>계정탈퇴</MyProfileInfoTitle>
        <ProfileMainBox>
          <S.RedLogoutBox
            onClick={() => {
              navigate("/profile/withdraw");
            }}
          >
            탈퇴하기
          </S.RedLogoutBox>
          <img src={poiner} alt="pointer" />
        </ProfileMainBox>
        {isModalOpen && <LogoutModal onClose={closeModal} />}
      </S.MainContent>
      <Navbar />
    </TopContainer>
  );
};

export default Logout;
