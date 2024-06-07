import * as S from "./style/Withdraw.style";
import { useState } from "react";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

// Navbar
import Navbar from "../../components/Navigation/Navbar";

// Msg
import { WithdrawFinalMsg, WithdrawInformMsg } from "../../assets/text/message";

// Btn
import StandardBtn from "../../commons/Button/StandardBtn";

// Modal
import WithdrawModal from "../../components/Modal/Profile/WithdrawModal";

const Withdraw = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} text="탈퇴하기" />
      <S.MainContent>
        <S.WithdrawTopContainer>
          <S.WithdrawContainer>
            <S.WithdrawBox>정말 계정을 탈퇴하시겠어요?</S.WithdrawBox>
            <S.WithdrawDetailBox>{WithdrawInformMsg}</S.WithdrawDetailBox>
          </S.WithdrawContainer>
          <S.WithdrawContainer>
            <S.WithdrawBox>탈퇴 이유를 선택해주세요.</S.WithdrawBox>
            <S.WithdrawDetailBox>{WithdrawFinalMsg}</S.WithdrawDetailBox>
            <S.WithdrawReasonSelectBox>
              <S.WithdrawReasonOptionBox value="">
                ---
              </S.WithdrawReasonOptionBox>
              <S.WithdrawReasonOptionBox value="1">
                기록 삭제 목적
              </S.WithdrawReasonOptionBox>
              <S.WithdrawReasonOptionBox value="2">
                이용이 불편하고 장애가 많아서
              </S.WithdrawReasonOptionBox>
              <S.WithdrawReasonOptionBox value="3">
                타 어플을 더 많이 사용해서
              </S.WithdrawReasonOptionBox>
              <S.WithdrawReasonOptionBox value="4">
                사용 빈도가 낮아서
              </S.WithdrawReasonOptionBox>
              <S.WithdrawReasonOptionBox value="5">
                기타 사유
              </S.WithdrawReasonOptionBox>
            </S.WithdrawReasonSelectBox>
          </S.WithdrawContainer>
        </S.WithdrawTopContainer>
        <StandardBtn
          onClick={openModal}
          $border="1px solid #BBC2C1"
          $color="#BBC2C1"
        >
          탈퇴하기
        </StandardBtn>
      </S.MainContent>
      {isModalVisible && <WithdrawModal onClose={closeModal} />};
      <Navbar />
    </TopContainer>
  );
};

export default Withdraw;
