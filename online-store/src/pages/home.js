import React from 'react';
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Banner from '../components/Banner';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

const home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Banner/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default home;
