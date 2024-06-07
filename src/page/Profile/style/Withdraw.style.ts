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
  border-top: 5px solid #e9f6ee;
  @media (max-width: 599px) {
    max-height: 70%;
  }
`;

export const WithdrawTopContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

export const WithdrawContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px 0 16px 0;
  box-sizing: border-box;
  border-bottom: 1px solid #e9f6ee;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const WithdrawBox = styled.div`
  width: fit-content;
  color: #0f473f;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

export const WithdrawDetailBox = styled.div`
  color: #83d0a1;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  white-space: break-spaces;
`;

export const WithdrawReasonSelectBox = styled.select`
  width: 100%;
  height: 40px;
  border: 1px solid #4ca771;
  border-radius: 8px;
  color: #4ca771;
  padding: 0 16px 0 16px;
  &:focus {
    outline: none;
  }
`;

export const WithdrawReasonOptionBox = styled.option`
  width: 100%;
  height: 40px;
  border: 1px solid #4ca771;
  color: #4ca771;
`;
