// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";
import styled from "styled-components";
import { useState } from "react";

const LibraryContainer = styled.div`
  width: 100%;
  max-width: 358px;
  height: 700px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 13%;
  @media (max-width: 599px) {
    height: 80%;
  }
`;

const LibraryCotroller = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
`;

const LibraryController = styled.div<{ $clicked: boolean }>`
  width: 50%;
  height: 100%;
  color: ${(props) => (props.$clicked ? "#D6ECE6" : "#83d0a1")};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  border-bottom: 2px solid
    ${(props) => (props.$clicked ? "#D6ECE6" : "#83d0a1")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Library = () => {
  const [libraryClicked, setLibraryClicked] = useState<boolean>(false);
  const [bookReportClicked, setBookReportClicked] = useState<boolean>(true);

  const handleLibraryController = () => {
    setLibraryClicked((prev) => !prev);
    setBookReportClicked((prev) => !prev);
  };

  const handleBookReportController = () => {
    setBookReportClicked((prev) => !prev);
    setLibraryClicked((prev) => !prev);
  };

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} />
      <LibraryContainer>
        <LibraryCotroller>
          <LibraryController
            $clicked={libraryClicked}
            onClick={handleLibraryController}
          >
            서재
          </LibraryController>
          <LibraryController
            $clicked={bookReportClicked}
            onClick={handleBookReportController}
          >
            독서록
          </LibraryController>
        </LibraryCotroller>
      </LibraryContainer>
    </TopContainer>
  );
};

export default Library;