// import React from 'react'
import {CarouselCustomNavigation} from "./Slider/Slider"
import About from "./About/About";
import Donation from "./Donation/Donation";
import Footer from "./Footer/Footer";
import Activities from "./Acitivities/Activities";

import Exploremore from "./Exploremore/Exploremore";
import Contact from "../Contact/Contact";
export default function Home() {
  return (
    <>
        <CarouselCustomNavigation/>
        <About/>
        <Donation/>
        <Exploremore/>
        <Activities/>
        <Contact/>
        <Footer/>
      
    </>
  )
}
