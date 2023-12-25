'use client'
import React from "react";
import IntroComponent from './Intro/IntroComponent'
import MiddleSection from "./MiddleSection/MiddleSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import FourthSection from "./FourthSection/FourthSection";


const LandingPage = () => {
    return (
       <div className="w-full h-full">
        <IntroComponent/>
        <MiddleSection/>
        <ThirdSection/>
        <FourthSection/>
      {/*   <Header/>
        
        
        
        <CreditAsk/>
        <CommentSection/>
        <AskSection/>
        <FooterSection/> */}
       </div>
    )
}
export default LandingPage;