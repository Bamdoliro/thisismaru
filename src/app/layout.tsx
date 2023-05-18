import "@/styles/global.css";
import { ReactNode } from "react";

interface PropsType {
  children: ReactNode;
}

export const metadata = {
  title: "maru",
  description: "부산소마고의 입학을 책임지는 마루입니다.",
};

const RootLayout = ({ children }: PropsType) => {
  return (
    <html lang="kr">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
