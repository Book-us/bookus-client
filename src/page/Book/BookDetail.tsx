import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

// Api
import getBookInfoById from "../../Api/Book/getBookInfoById";

// BookDeail
import BookDetailWrapper from "../../components/Wrapper/BookDetail/BookDetailWrapper";
import StandardBtn from "../../commons/Button/StandardBtn";
import { bookState } from "../../assets/svg/BookDetail/bookDetailAsset";

// Modal
import ChangeBookStateModal from "../../components/Model/BookDetail/ChangeBookState";
import DeleteBookModal from "../../components/Model/BookDetail/DeleteBookModal";

// Date
import DateController from "../../components/Input/BookDetail/DateController";
import MyBookScore from "../../components/Wrapper/BookDetail/MyBookScore";
import DoubleDateController from "../../components/Input/BookDetail/DoubleDateController";

const MainContent = styled.div`
  width: 100%;
  max-width: 358px;
  height: fit-content;
  min-height: 430px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: absolute;
  top: 11%;
  @media (max-width: 599px) {
    height: 80%;
  }
`;

const BookStateWrapper = styled.div`
  width: 100%;
  height: 76px;
  display: flex;
  gap: 16px;
  & > :last-child {
    position: absolute;
    right: 0;
  }
`;

const BookStateBox = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  color: #bbc2c1;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
`;

const BookStateString = styled.div`
  color: #bbc2c1;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
`;

const BookDateAndRatingBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

interface BookProps {
  libraryId: number;
  bookTitle: string;
  author: string[];
  bookId: number;
  isbn: string;
  readingStatus: string;
  rating: number;
  startReadingAt: string;
  endReadingAt: string;
  staticsRating: number;
  thumbnail: string;
}

interface ModalProps {
  libraryId: string;
  state: string;
}

const BookDetail = () => {
  const { libraryId } = useParams<{ libraryId?: string }>();
  const [book, setBook] = useState<BookProps | undefined>(undefined);
  const [readingStatus, setReadingStatus] = useState<string>("");
  const [selectedBookState, setSelectedBookState] = useState<ModalProps | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);

  const getBookInfo = async () => {
    try {
      if (libraryId) {
        const result = await getBookInfoById(libraryId);
        setBook(result);
        setReadingStatus(result.readingStatus);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = (libraryId: string, state: string) => {
    setSelectedBookState({ libraryId, state });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  useEffect(() => {
    getBookInfo();
  }, [libraryId]);

  console.log(book);

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} />
      <MainContent>
        <BookDetailWrapper book={book} />
        <BookStateWrapper>
          {bookState.map((state, index) => (
            <BookStateBox
              onClick={() => openModal(String(book?.libraryId || ""), state[0])}
              key={index}
            >
              <img
                src={state[0] === readingStatus ? state[3] : state[2]}
                alt={state[1]}
              />
              <BookStateString>{state[1]}</BookStateString>
            </BookStateBox>
          ))}
        </BookStateWrapper>
        {readingStatus !== "READY_TO_READ" && (
          <BookDateAndRatingBox>
            {readingStatus === "READING" && (
              <DateController
                startReadingAt={book?.startReadingAt}
                libraryId={libraryId}
              />
            )}
            {(readingStatus === "ALREADY_READ" ||
              readingStatus === "FAVORITE") && (
              <>
                <MyBookScore rating={book?.rating} libraryId={libraryId} />
                <DoubleDateController
                  startReadingAt={book?.startReadingAt}
                  endReadingAt={book?.endReadingAt}
                  libraryId={libraryId}
                />
              </>
            )}
          </BookDateAndRatingBox>
        )}
        <StandardBtn $color="#83D0A1" $border="1.5px solid  #83D0A1">
          독서록 작성하기
        </StandardBtn>
        {isModalOpen && (
          <ChangeBookStateModal
            selectedBookState={selectedBookState!}
            onClose={closeModal}
          />
        )}
        {isDeleteModalOpen && (
          <DeleteBookModal libraryId={libraryId!} onClose={closeDeleteModal} />
        )}
        <StandardBtn
          onClick={openDeleteModal}
          $color="#BBC2C1"
          $border="1.5px solid  #BBC2C1"
          $clickedBackground="#BBC2C1"
          $clickedColor="#fff"
        >
          내 서재에서 삭제하기
        </StandardBtn>
      </MainContent>
    </TopContainer>
  );
};

export default BookDetail;
