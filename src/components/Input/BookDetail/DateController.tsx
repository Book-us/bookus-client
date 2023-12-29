import styled from "styled-components";
import { useState } from "react";

const DateBox = styled.div`
  width: 100%;
  height: 14px;
  position: relative;
`;

const DateLabel = styled.label`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  margin-right: 16px;
`;

const DateInput = styled.input`
  color: #4ca771;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  border: none;
  padding-right: 30px;
  background-color: #fcfcff;
`;

const CustomIcon = styled.div`
  position: absolute;
  top: 30%;
  right: 10px;
  cursor: pointer;
  color: #bbc2c1;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;

interface DateControllerProps {
  onDateChange: (formattedDate: string) => void;
}

const DateController: React.FC<DateControllerProps> = ({ onDateChange }) => {
  const [today, setToday] = useState(new Date());

  const formatDate = (originalDate: any) => {
    const date = new Date(originalDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const isoFormatDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000`;

    return isoFormatDate;
  };

  const handleDatePickerChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedDate = event.target.value;
    const date = new Date(selectedDate);
    setToday(date);
    onDateChange(formatDate(date));
  };

  return (
    <DateBox>
      <DateLabel>날짜 기록</DateLabel>
      <DateInput
        type="date"
        value={today.toISOString().split("T")[0]}
        onChange={handleDatePickerChange}
      />
      <CustomIcon>완료</CustomIcon>
    </DateBox>
  );
};

export default DateController;
