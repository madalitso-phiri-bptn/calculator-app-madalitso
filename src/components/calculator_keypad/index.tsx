import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import { CalculatorContext } from "../../state/context";
import { calculator_keys } from "../../constants";

const KeyPad = styled.div`
  width: 100%;
  height: 70%;
  padding: 1rem;
`;
const CalculatorButton = styled.button`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 0;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: Work + Sans;
  background-color: transparent;
`;

const grid_container = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridRowsColumns: "repeat(5, 1fr)",
  width: "100%",
  height: "100%",
};

const grid_item = {
  margin: "8px",
  border: 0,
  flex: 1,
};

export const CalculatorKeyPad = () => {
  const { append_input, del_character, evaluate } =
    React.useContext(CalculatorContext);
  return (
    <KeyPad>
      <Box sx={grid_container}>
        {calculator_keys.map((item, index) => {
          if (item.label) {
            if (item.value == "del") {
              return (
                <Box sx={grid_item} onClick={() => del_character()}>
                  <CalculatorButton>{item.label}</CalculatorButton>
                </Box>
              );
            } else if (item.value == "=") {
              return (
                <Box sx={grid_item} onClick={() => evaluate()}>
                  <CalculatorButton>{item.label}</CalculatorButton>
                </Box>
              );
            }
            return (
              <Box sx={grid_item} onClick={() => append_input(item.value)}>
                <CalculatorButton>{item.label}</CalculatorButton>
              </Box>
            );
          } else {
            return <Box sx={grid_item}> </Box>;
          }
        })}
      </Box>
    </KeyPad>
  );
};
