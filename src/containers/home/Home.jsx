import React from 'react'

import MainBanner from './components/MainBanner';
//import CategoriesBanner from './components/CategoriesBanner';
import AboutUs from './components/AboutUs';
import Partner from './components/Partner';


const Home = () => (
  <>
    <MainBanner />
    { /*<CategoriesBanner />*/}
    <Partner />
    <AboutUs />
  </>
)


export default Home
