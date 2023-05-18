import Header from "@/components/Common/Header/header";
import AppLayout from "@/layouts/AppLayout";
import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "styled-components";
import Button from "../Common/Button/button";

const Main = () => {
  return (
    <AppLayout>
      <StyledMain>
        <TextBox>
          <Title>
            부산소프트웨어
            <br />
            마이스터고등학교
          </Title>
          <Desc>
            마루는 더욱 간편한 부산소마고 입학을 위한
            <br />
            입학지원플랫폼입니다.
          </Desc>
        </TextBox>
        <Button option="PRIMARY" icon="SHORTCUTS_ICON" size="LARGE">
          원서 접수 시작하기
        </Button>
      </StyledMain>
    </AppLayout>
  );
};

export default Main;

const StyledMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Title = styled.p`
  ${font.D1}
  color: ${color.gray900};

  text-align: center;
  overflow: hidden
`;

const Desc = styled.p`
  ${font.H3}
  color: ${color.gray500};
  font-weight: 400;

  text-align: center;
`;
