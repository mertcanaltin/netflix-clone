import React from 'react';
import './index.scss';

import Footer from '../../components/footer';

import Subscribe from '../../components/subscribe';

import Questions from '../../components/asked-questions';

import MainLayout from '../../components/main-layout';

import NavBar from '../../components/nav-bar';

import HomeHeader from '../../components/home-header';

export default function home() {
  return (
    <div>
      <NavBar />
      <HomeHeader />
      <MainLayout />
      <Questions />
      <Subscribe />
      <Footer />
    </div>
  )
}
