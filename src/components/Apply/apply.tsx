import AppLayout from "@/layouts/AppLayout";
import { color } from "@/styles/color";
import { font } from "@/styles/font";
import Button from "@/components/Common/Button/button";
import styled from "styled-components";

const Apply = () => {
  return (
    <AppLayout>
      <StyledApply>
        <Title>
          지금 바로 부산소프트웨어 마이스터고에
          <br />
          지원해보세요
        </Title>
        <ButtonBox>
          <Button option="SECONDARY" icon="NONE" size="LARGE">
            모집 요강 다운로드
          </Button>
          <Button option="PRIMARY" icon="SHORTCUTS_ICON" size="LARGE">
            원서 접수 시작하기
          </Button>
        </ButtonBox>
      </StyledApply>
    </AppLayout>
  );
};

export default Apply;

const StyledApply = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 80px;
  width: 100%;
  height: 100%;
`;

const Title = styled.p`
  font-size: ${font.D3};
  color: ${color.gray900};

  text-align: center;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;
