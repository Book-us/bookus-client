import { useEffect, useState } from "react";
import * as S from "./style/ServiceAgree.style";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
// Header - Image
import backArrowImg from "../../assets/img/back.png";
import fisrtProgress from "../../assets/img/FirstStep.png";

// Title
import PageTopTitle from "../../components/Title/PageTopTitle";

// Agree
import BreakLine from "../../commons/BreakLine/BreakLine";
import AgreeTextBox from "../../components/Auth/AgreeTextBox";
import StandardBtn from "../../commons/Button/StandardBtn";
// Agree - Image
import AgreeBtn from "../../assets/img/AgreeBtn.png";
import FilledAgreeBtn from "../../assets/img/FilledAgreeBtn.png";
import { useNavigate } from "react-router-dom";

const ServiceAgree = () => {
  const navigate = useNavigate();
  const [all, setAll] = useState<boolean>(false);
  const [age, setAge] = useState<boolean>(false);
  const [service, setService] = useState<boolean>(false);
  const [personal, setPersonal] = useState<boolean>(false);
  const [optional, setOptional] = useState<boolean>(false);
  const [next, setNext] = useState<boolean>(false);
  const [data, setData] = useState<Object>({});

  const toggleClickAll = () => {
    setAll(!all);
    setService(!all);
    setPersonal(!all);
  };

  const toggleClickAge = () => {
    setAge(!age);
  };

  const toggleClickService = () => {
    setService(!service);
  };

  const toggleClickPersonal = () => {
    setPersonal(!personal);
  };

  const toggleClickOptional = () => {
    setOptional(!optional);
  };

  useEffect(() => {
    const agreeData: Data = {};

    interface Data {
      marketingAgreement?: boolean;
    }

    if (service && personal) {
      setNext(true);
      agreeData["marketingAgreement"] = true;
      setData(agreeData);
    } else {
      setNext(false);
    }
  }, [age, service, personal]);

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={fisrtProgress} />
      <S.AgreeContainer>
        <S.AgreeWrapper>
          <PageTopTitle $text="서비스 이용 동의" />
          <S.AgreeContent>
            <AgreeTextBox
              onClick={toggleClickAll}
              imgSrc={all ? FilledAgreeBtn : AgreeBtn}
              text="약관 전체동의"
              fontWeight="600"
            />
            <BreakLine />
            <S.AgreeDetailWrapper>
              <AgreeTextBox
                onClick={toggleClickAge}
                imgSrc={age ? FilledAgreeBtn : AgreeBtn}
                text="만 14세 이상입니다."
              />
              <AgreeTextBox
                onClick={toggleClickService}
                imgSrc={service ? FilledAgreeBtn : AgreeBtn}
                text="(필수) 서비스 이용약관"
              />
              <AgreeTextBox
                onClick={toggleClickPersonal}
                imgSrc={personal ? FilledAgreeBtn : AgreeBtn}
                text="(필수) 개인정보 처리방침"
              />
              <AgreeTextBox
                onClick={toggleClickOptional}
                imgSrc={optional ? FilledAgreeBtn : AgreeBtn}
                text="(선택) 마케팅 정보 수신 동의"
              />
            </S.AgreeDetailWrapper>
          </S.AgreeContent>
        </S.AgreeWrapper>
        {next ? (
          <StandardBtn
            onClick={() => navigate("/service/nickname", { state: { data } })}
            $background="#83D0A1"
            $color="#FCFCFF"
          >
            다음
          </StandardBtn>
        ) : (
          <StandardBtn $disabled={true} $background="#E9F6EE">
            다음
          </StandardBtn>
        )}
      </S.AgreeContainer>
    </TopContainer>
  );
};

export default ServiceAgree;
