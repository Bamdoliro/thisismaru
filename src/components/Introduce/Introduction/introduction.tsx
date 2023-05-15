import { color } from "@/styles/color";
import { font } from "@/styles/font";
import Image from "next/image";
import styled from "styled-components";

interface PropsInterface {
  title: string;
  content: string;
  position: "left" | "right";
}

const Introduction = ({
  title,
  content,
  position = "right",
}: PropsInterface) => {
  return (
    <StyledIntroduction>
      {position === "right" ? (
        <>
          <TextBox>
            <Title>{title}</Title>
            <Content>{content}</Content>
          </TextBox>
          <Image
            src="/assets/introduce-dummy.png"
            alt="introduce-img"
            width={508}
            height={300}
          />
        </>
      ) : (
        <>
          <Image
            src="/assets/introduce-dummy.png"
            alt="introduce-img"
            width={508}
            height={300}
          />
          <TextBox>
            <Title>{title}</Title>
            <Content>{content}</Content>
          </TextBox>
        </>
      )}
    </StyledIntroduction>
  );
};

export default Introduction;

const StyledIntroduction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 300px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 419px;
  height: 100%;
`;

const Title = styled.p`
  ${font.H1}
  color: ${color.gray900};
`;

const Content = styled.pre`
  ${font.p1}
  color: ${color.gray900};
`;
