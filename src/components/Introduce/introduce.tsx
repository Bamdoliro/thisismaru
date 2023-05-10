import AppLayout from "@/layouts/AppLayout";
import styled from "styled-components";
import Introduction from "./introduction";

const Introduce = () => {
  return (
    <AppLayout height="200vh">
      <StyledIntroduce>
        <IntroduceWrap>
          <Introduction
            title="더욱 쉬워진 입학 과정"
            content={`사용자 친화적인 인터페이스를 통해 우리의 입학 사이트를\n쉽게 탐색하고 필요한 정보에 빠르게 접근할 수 있습니다.\n직관적인 메뉴와 명확한 링크를 통해 입학 절차에 대한\n관련 정보를  찾는 것이 더욱 쉬워졌습니다.`}
            position="right"
          />
          <Introduction
            title="더욱 쉬워진 입학 과정"
            content={`사용자 친화적인 인터페이스를 통해 우리의 입학 사이트를\n쉽게 탐색하고 필요한 정보에 빠르게 접근할 수 있습니다.\n직관적인 메뉴와 명확한 링크를 통해 입학 절차에 대한\n관련 정보를  찾는 것이 더욱 쉬워졌습니다.`}
            position="left"
          />
          <Introduction
            title="더욱 쉬워진 입학 과정"
            content={`사용자 친화적인 인터페이스를 통해 우리의 입학 사이트를\n쉽게 탐색하고 필요한 정보에 빠르게 접근할 수 있습니다.\n직관적인 메뉴와 명확한 링크를 통해 입학 절차에 대한\n관련 정보를  찾는 것이 더욱 쉬워졌습니다.`}
            position="right"
          />
        </IntroduceWrap>
      </StyledIntroduce>
    </AppLayout>
  );
};

export default Introduce;

const StyledIntroduce = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const IntroduceWrap = styled.div`
  width: 72.22%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 140px;
`;
