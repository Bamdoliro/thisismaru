import { color } from "@/styles/color";
import { css } from "styled-components";

export const getButtonStyle = {
  PRIMARY: css`
    background-color: ${color.maruDefault};
    color: ${color.white};
    &:hover {
      background-color: ${color.maruHigh};
    }
  `,
  SECONDARY: css`
    background-color: ${color.gray200};
    color: ${color.gray900};
    &:hover {
      background-color: ${color.gray300};
    }
  `,
  TERTIARY: css`
    background-color: ${color.white};
    color: ${color.gray900};
    border: 1px solid ${color.gray400};
    &:hover {
      border: 1px solid ${color.gray500};
    }
  `,
  QUATERNARY: css`
    background-color: ${color.white};
    color: ${color.gray600};
    border: none;
    &:hover {
      color: ${color.gray900};
    }
  `,
  DELETE: css`
    background-color: rgba(244, 67, 54, 0.1);
    color: ${color.red};
    border: 1px solid ${color.red};
    &:hover {
      color: ${color.white};
      background-color: ${color.red};
    }
  `,
  LINK_TEXT: css`
    border-radius: 0;
    padding: 0;
    color: ${color.gray500};
    border-bottom: 1px solid ${color.gray500};
    &:hover {
      color: ${color.maruDefault};
      border-bottom: 1px solid ${color.maruDefault};
    }
  `,
};