import React from "react";
import BarLeft from "../components/HomeComponents/BarLeft/BarLeft";
import { Questions } from "../components/HomeComponents/Questions/Questions";

export default function Home() {
  return (
    <>
      <BarLeft>
        <Questions />
      </BarLeft>
    </>
  );
}
