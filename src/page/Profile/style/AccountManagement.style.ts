import styled from "styled-components";

export const MainContent = styled.div`
  width: 100%;
  max-width: 358px;
  height: 630px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  position: absolute;
  top: 11%;
  overflow: auto;
  @media (max-width: 599px) {
    max-height: 70%;
  }
`;

export const ProfileImgContainer = styled.div`
  width: 100%;
  height: 144px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e9f6ee;
  position: relative;
`;

export const ProfileImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #83d0a1;
  position: relative;
`;

export const ProfileImgEdit = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background: #bbc2c1;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 20px;
  right: 135px;
`;

export const NickNameContainer = styled.div`
  width: fit-content;
  color: #0f473f;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const NickNameInput = styled.input`
  width: 80%;
  color: #0f473f;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 12px;
  border: none;
  border: 1px solid #83d0a1;

  &:focus {
    outline: 1px solid #83d0a1;
  }
`;

export const NickNameChangeBtn = styled.div`
  color: #bbc2c1;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;
