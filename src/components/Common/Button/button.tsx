"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonOptionType } from "./interface";
import { font } from "@/styles/font";
import { getButtonStyle } from "./index";
import { styled } from "styled-components";

interface PropsInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  option: ButtonOptionType;
  width?: string;
  icon: boolean;
}

const Button = ({ onClick, children, option, width, icon }: PropsInterface) => {
  return (
    <ButtonStyled
      onClick={onClick}
      option={option}
      icon={icon}
      style={{ width }}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;

const ButtonStyled = styled.button<{
  option: ButtonOptionType;
  icon: Boolean;
}>`
  ${font.btn2}
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 6px;
  cursor: pointer;

  padding: ${({ icon }) => (icon ? "10px 16px 10px 10px" : "10px 16px")};
  ${({ option }) => option && getButtonStyle[option]}
`;
