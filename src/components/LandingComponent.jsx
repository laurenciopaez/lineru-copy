'use client'
import React from "react";
import IntroComponent from './Intro/IntroComponent'
import MiddleSection from "./MiddleSection/MiddleSection";


const LandingPage = () => {
    return (
       <div className="w-full h-full">
        <IntroComponent/>
        <MiddleSection/>
      {/*   <Header/>
        
        
        <ThirdSection/>
        <CreditAsk/>
        <CommentSection/>
        <AskSection/>
        <FooterSection/> */}
       </div>
    )
}
export default LandingPage;