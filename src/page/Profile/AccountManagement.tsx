import * as S from "./style/AccountManagement.style";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

// Navbar
import Navbar from "../../components/Navigation/Navbar";

// Svg
import pencil from "../../assets/svg/Profile/ProfileImgEditPencil.svg";
import emo from "../../assets/svg/Profile/KakaoEmailEmo.svg";

// Component
import MyProfileInfoTitle from "../../components/Profile/MyProfileInfoTitle";
import ProfileMainBox from "../../components/Profile/ProfileMainBox";

// Modal
import ProfileEditModal from "../../components/Modal/Profile/ProfileEditModal";

// API
import editProfile from "../../Api/Profile/editProfile";

//Btn
import StandardBtn from "../../commons/Button/StandardBtn";
import editProfileNickname from "../../Api/Profile/editProfileNickname";

const AccountManagement = () => {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState<File>();
  const [status, setStatus] = useState<number>(0);
  const [isNicknameChangeBtnClicked, setIsNicknameChangeBtnClicked] =
    useState<boolean>(false);
  const [nickname, setNickname] = useState<string>(data?.memberName);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleProfileEdit = (image: File) => {
    setProfileImage(image);
  };

  // 저장 버튼 누르면 해당되는 버튼
  const clickBtn = () => {
    if (profileImage) {
      editProfile(profileImage);
    }

    navigate("/profile");
  };

  const clickNicknameChangeBtn = () => {
    setIsNicknameChangeBtnClicked((pre) => !pre);
  };

  const editNicknameChangeBtn = () => {
    setIsNicknameChangeBtnClicked((pre) => !pre);
    editProfileNickname(nickname);
  };

  const handleStatusChange = (newStatus: number) => {
    setStatus(newStatus);
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  console.log(profileImage);

  return (
    <TopContainer $background="#FCFCFF" $isModalVisible={isModalVisible}>
      <MainHeader src1={backArrowImg} src2={profileImg} text="계정 관리" />
      <S.MainContent>
        <>
          <S.ProfileImgContainer>
            {status == 200 ? (
              <S.ProfileImg />
            ) : (
              <S.ProfileImg src={data?.profileImageUrl} />
            )}
            <S.ProfileImgEdit onClick={openModal}>
              <img src={pencil} alt="pencil" />
            </S.ProfileImgEdit>
          </S.ProfileImgContainer>
          <MyProfileInfoTitle>내 프로필 설정</MyProfileInfoTitle>
          <ProfileMainBox>
            {isNicknameChangeBtnClicked ? (
              <S.NickNameInput
                defaultValue={nickname}
                onChange={handleNicknameChange}
              />
            ) : (
              <S.NickNameContainer>{nickname}</S.NickNameContainer>
            )}
            {isNicknameChangeBtnClicked ? (
              <S.NickNameChangeBtn onClick={editNicknameChangeBtn}>
                변경 완료
              </S.NickNameChangeBtn>
            ) : (
              <S.NickNameChangeBtn onClick={clickNicknameChangeBtn}>
                변경
              </S.NickNameChangeBtn>
            )}
          </ProfileMainBox>
          <MyProfileInfoTitle>내 계정 정보</MyProfileInfoTitle>
          <ProfileMainBox>
            <S.NickNameContainer>
              <img src={emo} alt="emo" />
              {data?.email}
            </S.NickNameContainer>
          </ProfileMainBox>
        </>
        <StandardBtn
          onClick={clickBtn}
          $border="1px solid #BBC2C1"
          $color="#BBC2C1"
          $clickedBackground="#FCFCFF"
        >
          프로필 이미지 저장하기
        </StandardBtn>
      </S.MainContent>
      <Navbar />
      {isModalVisible && (
        <ProfileEditModal
          onStatusChange={handleStatusChange}
          onProfileEdit={handleProfileEdit}
          onClose={closeModal}
        />
      )}
    </TopContainer>
  );
};

export default AccountManagement;
