import { color } from "@/styles/color";
import { ReactNode } from "react";
import styled from "styled-components";

interface PropsType {
  children: ReactNode;
  height?: string;
}

const BaseLayout = ({ children, height }: PropsType) => {
  return <StyledBaseLayout style={{ height }}>{children}</StyledBaseLayout>;
};

export default BaseLayout;

const StyledBaseLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${color.white};
`;
