import { color } from "@/styles/color";
import styled from "styled-components";
import Button from "../Button/button";
import LogoIcon from "../Icon/Logo";

const Header = () => {
  return (
    <StyledHeader>
      <LogoIcon />
      <HeaderNav>
        <HeaderNavList>
          <Button option="QUATERNARY" icon="NONE">
            원서 접수
          </Button>
          <Button option="QUATERNARY" icon="NONE">
            공지사항
          </Button>
        </HeaderNavList>
        <HeaderNavList>
          <Button option="QUATERNARY" icon="NONE">
            입학 문의하기
          </Button>
          <Line />
          <Button option="QUATERNARY" icon="NONE">
            로그인
          </Button>
          <Button option="PRIMARY" icon="NONE">
            입학 접수 시작하기
          </Button>
        </HeaderNavList>
      </HeaderNav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 64px;
  background-color: ${color.white};
  border-bottom: 1px solid ${color.gray200};
  padding: 0px 30px;
  cursor: pointer;
`;

const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: 28px;
`;

const HeaderNavList = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Line = styled.div`
  height: 24px;
  border: 1px solid ${color.gray300};
`;
