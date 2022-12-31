import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabList from "@mui/lab/TabList";
import TabContext from "@mui/lab/TabContext";
import { useState } from "react";
import React from "react";
import TabPanel from "@mui/lab/TabPanel";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const BoxContainer = styled.div`
  display: flex;
  justify-content: Center;
`;

const LogIn = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BoxContainer>
      <Box sx={{ width: "50%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              centered
            >
              <Tab label="會員登入" value="1" />
              <Tab label="註冊會員" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div>
              <TextField
                required
                label="輸入帳號"
                autoComplete="current-password"
              />
              <TextField
                label="輸入密碼"
                type="password"
                autoComplete="current-password"
              />
              <Button variant="outlined">登入</Button>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <TextField required label="帳號" autoComplete="current-password" />
            <TextField
              label="密碼"
              type="password"
              autoComplete="current-password"
            />
            <TextField
              label="確認密碼"
              type="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="我同意網站服務條款及隱私權政策"
            />
            <Button variant="outlined">註冊</Button>
          </TabPanel>
        </TabContext>
      </Box>
    </BoxContainer>
  );
};

export default LogIn;
