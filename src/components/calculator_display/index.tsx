import styled from "styled-components";
import HistoryIcon from "@mui/icons-material/History";
import { motion } from "framer-motion";
import React, { FC, SetStateAction, useState } from "react";
import { XIcon } from "@heroicons/react/solid";

import { Box, styled as mui_styled } from "@mui/material";
import { CalculatorDisplayInput } from "../calculator_display_input";
import { CalculatorOperationLabel } from "../calculator_operation_label";
import { Operation } from "../../hooks/useCalculator";
import { CalculatorContext } from "../../state/context";

export const CloseIcon = styled(XIcon)`
  color: white;
  height: 1.5rem;
  width: 1.5rem;
  cursor: pointer;
`;
const Display = styled.div`
  background-color: #ffd33a;
  width: 100%;
  height: 83%;
  position: absolute;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: end;
  @media (max-width: 450px) {
    height: 80%;
  }
`;
const DisplayInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const DisplayHolder = styled.div`
  background-color: transparent;
  width: 100%;
  height: 150px;
  position: relative;
  @media (max-width: 450px) {
    height: 30%;
  }
`;

const CurveLeft = styled.div`
  position: absolute;
  border-top-right-radius: 30px;
  background-color: transparent;
  box-shadow: 0 -25px 0 0 #ffd33a;
  outline: 0;
  border:0;
  width: 50px;
  height: 100px;
  bottom: -100px;
  right: calc(20% + 1rem);
`;
const CurveRight = styled.div`
  position: absolute;
  border-top-left-radius: 30px;
  width: 50px;
  height: 100px;
  background-color: transparent;
  box-shadow: 0 -25px 0 0 #ffd33a;
  outline: 0;
  border:0;
  bottom: -100px;
  right: -2rem;
`;
const HistoryButton = styled.div`
  position: absolute;
  border-radius: 50px;
  background-color: #ffd33a;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding: 1rem;
  width: 20%;
  height: 80%;
  bottom: -80px;
  right: 1rem;

  @media (max-width: 450px) {
    height: 50%;
    position: absolute;
    border-radius: 50px;
    background-color: #ffd33a;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    padding: 1rem;
    width: 20%;
    bottom: -120px;
    right: 1rem;
  }
`;

export const CalculatorDisplay = () => {
  const [history_is_open, set_history_is_open] = useState<boolean>(false);
  const handle_history_toggle = () => {
    set_history_is_open(!history_is_open);
  };
  return (
    <>
      <Display
        as={motion.div}
        initial={{ top: "-53%" }}
        animate={{ top: history_is_open ? 0 : "-53%" }}
        transition={{ type: "tween" }}
      >
        <DisplayInputContainer>
          <CalculatorOperationLabel />
          <CalculatorDisplayInput />
        </DisplayInputContainer>

        <HistoryButton>
          {history_is_open ? (
            <CloseIcon onClick={handle_history_toggle} />
          ) : (
            <HistoryIcon
              onClick={handle_history_toggle}
              sx={{ color: "white" }}
            />
          )}
        </HistoryButton>
        <CurveLeft />
        <CurveRight />
      </Display>
      <DisplayHolder />
    </>
  );
};
