import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonIconOptionType, ButtonOptionType } from "./interface";
import { font } from "@/styles/font";
import { getButtonStyle, getIconButtonStyle } from "./index";
import { styled } from "styled-components";
import AddIcon from "../Icon/Add";
import ShortcutsIcon from "../Icon/Shortcuts";

interface PropsInterface extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  option: ButtonOptionType;
  icon: ButtonIconOptionType;
  width?: string;
}

const Button = ({ onClick, children, option, width, icon }: PropsInterface) => {
  return (
    <StyledButton
      onClick={onClick}
      option={option}
      icon={icon}
      style={{ width }}
    >
      {icon === "PLUS_ICON" && <AddIcon />}
      {children}
      {icon === "SHORTCUTS_ICON" && <ShortcutsIcon />}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{
  option: ButtonOptionType;
  icon: ButtonIconOptionType;
}>`
  ${font.btn2}
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;

  ${({ icon }) => icon && getIconButtonStyle[icon]};
  ${({ option }) => option && getButtonStyle[option]}
`;
