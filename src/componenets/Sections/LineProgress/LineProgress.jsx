import React from "react"
import { motion, useScroll, useSpring } from "framer-motion";
import SlickCarosual from "../SlickCarosual/SlickCarosual";
import AnimationPage from "../AnimationPage/AnimationPage";
import ParllaxImage from "../ParllaxImage/ParllaxImage"
import Card from "../../pages/Cards/Card";
import cards from '../../pages/Cards/CardJSON'
import ParllaxImage2 from "../ParllaxImage/ParllaxImage2";
import InfoSection from "../InfoSection/InfoSection";
import Accordion from "../Accordion/Accordion";
import DragDrop from "../DragAndDrop/DragDrop";
import SkewContainer from "../ImagesTransformSkew/SkewContainer";
import LandingPage2 from "../../pages/LandingPage2/LandingPage2";
import SearchFeatures from "../../SearchFeatures/SearchFeatures";
import AnimMovComputer from "../AnimationComputerMovement/AnimMovComputer";
import HotSpot from "../HotSpot/HotSpot";
import DownloadSignature from "../DownloadSignature/DownloadSignature";
import Conf from "../../pages/Confetti/Conf";
import Colorful from "../../pages/Colorful/Colorful";
import Colorful2 from "../../pages/Colorful2/Colorful2";

export const CircleIndicator = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });
  
  return (
    <>
    <motion.div className="progress-bar" style={{ scaleX }} />
    <>
        <LandingPage2/>
        <SlickCarosual/>
        <AnimationPage/>
        <ParllaxImage/>
        <ParllaxImage2/>
        <Card cards={cards}/>
        <InfoSection/>
        <Accordion/>
        <SkewContainer/>
        <SearchFeatures/>
        {/* <AnimMovComputer/> */}
        <DragDrop/>
        <HotSpot/>
        {/* <DownloadSignature/> */}
        <Conf/>
        <Colorful/>
        <Colorful2/>
    </>
  
  </>
  )
}