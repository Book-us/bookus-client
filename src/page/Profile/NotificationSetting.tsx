import * as S from "./style/NotificationSetting.style";
import { useState } from "react";
import { useLocation } from "react-router-dom";

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
import ToggleSwitch from "../../components/Input/Profile/ToggleSwitch";
import handleNotificationAgreement from "../../Api/Profile/handleNotificationAgreement";

const NotificationSetting = () => {
  const location = useLocation();
  const profileInfo = location.state;

  const [pushNotification, setPushNotification] = useState<boolean>(
    profileInfo.pushNotificationAgree
  );
  const [emailNotification, setEmailNotification] = useState<boolean>(
    profileInfo.emailNotificationAgree
  );

  const submitNotificationType = async (type: string) => {
    try {
      const body = {
        notificationAgreementType: type,
      };
      await handleNotificationAgreement(body);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} text="알림 설정" />
      <S.MainContent>
        <MyProfileInfoTitle>광고성 정보 수신</MyProfileInfoTitle>
        <ProfileMainBox>
          <S.Alarm>푸쉬 알림</S.Alarm>
          <ToggleSwitch
            isChecked={pushNotification}
            onChange={() => {
              setPushNotification(!pushNotification);
              submitNotificationType("PUSH");
            }}
          />
        </ProfileMainBox>
        <ProfileMainBox>
          <S.Alarm>이메일 알림</S.Alarm>
          <ToggleSwitch
            isChecked={emailNotification}
            onChange={() => {
              setEmailNotification(!emailNotification);
              submitNotificationType("EMAIL");
            }}
          />
        </ProfileMainBox>
        <MyProfileInfoTitle>활동 알림</MyProfileInfoTitle>
        <ProfileMainBox>
          <S.Alarm>댓글,공감 등 알림</S.Alarm>
          <ToggleSwitch />
        </ProfileMainBox>
      </S.MainContent>
      <Navbar />
    </TopContainer>
  );
};

export default NotificationSetting;
