'use client'
import React, { useEffect } from "react";
import IntroComponent from './Intro/IntroComponent'
import MiddleSection from "./MiddleSection/MiddleSection";
import ThirdSection from "./ThirdSection/ThirdSection";
import FourthSection from "./FourthSection/FourthSection";
import { useDispatch } from "react-redux";
import { getNews } from "@/redux/actions";
import HeaderComp from "./Header/HeaderComp";
import FooterComp from "./Footer/FooterComp";


const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect( ()=> {
    const fetchData = async () => {
      dispatch(getNews());
    }

    fetchData();
  }, [dispatch])

    return (
       <div className="w-full h-full">
        <HeaderComp/>
        <IntroComponent/>
        <MiddleSection/>
        <ThirdSection/>
        <FourthSection/>
        <FooterComp/>
       </div>
    )
}
export default LandingPage;