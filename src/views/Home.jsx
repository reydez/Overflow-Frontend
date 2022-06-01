
import React from "react";
import BarLeft from "../components/HomeComponents/BarLeft/BarLeft";
import { Questions } from "../components/HomeComponents/Questions/Questions";
import Footer from './Footer'



export default function Home() {
  return (
    <>
    <div>
      <BarLeft>
        <Questions />
      </BarLeft>
      </div>
     
    </>
  );
}

