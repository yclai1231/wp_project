import Chip from "@mui/material/Chip";
import React, { useState } from "react";
import styled from "styled-components";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useWeb } from "./hooks/useWeb";

const WholeContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 5vmin;
  align-items: center;
  justify-content: center;
  .info {
    margin-top: 10vmin;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
  h1 {
    border-bottom: 8px solid gray;
    font-size: 24px;
    display: inline-block;
  }
  .title {
    margin-bottom: 20px;
  }
  .text {
    margin-top: 1vmin;
  }
  .edit {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 3vmin;
  }
`;

const Forget = () => {
  const { CRUD } = useWeb();
  const [data, setData] = useState({});
  const Query = CRUD("C", "/password/forgot-password");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setData({ email: value });
  };

  return (
    <WholeContainer>
      <div className="info">
        <div className="title">
          <h1>忘記密碼</h1>
        </div>
        <div className="input">
          <p>輸入會員帳號（信箱）</p>
          <TextField
            className="text"
            label=""
            variant="standard"
            defaultValue=""
            type="password"
            onChange={handleInputChange}
          />
        </div>
        <div className="edit">
          <Button
            onClick={() => {
              Query(data);
            }}
          >
            傳送驗證碼
          </Button>
        </div>
      </div>
    </WholeContainer>
  );
};

export default Forget;
