import { color } from "@/styles/color";
import styled from "styled-components";
import GreyLogoIcon from "../Icon/GreyLogo";

const Footer = () => {
  return (
    <StyledFooter>
      <GreyLogoIcon />
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${color.gray100};
  padding: 40px 200px;
`;
