import { color } from "@/styles/color";
import { ReactNode } from "react";
import styled from "styled-components";

interface PropsInterface {
  children: ReactNode;
  height?: string;
}

const AppLayout = ({ children, height }: PropsInterface) => {
  return <StyledAppLayout style={{ height }}>{children}</StyledAppLayout>;
};

export default AppLayout;

const StyledAppLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${color.white};
`;
