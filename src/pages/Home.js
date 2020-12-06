import React from 'react';
import '../App.css';
import Banner from '../components/Banner';
import Footer from '../components/footer';
import Functions from '../components/Functions';
import Gallery from '../components/Gallery';
import Navbar from '../components/Navbar';
import RSVP from '../components/RSVP';
import VideoSec from '../components/VideoSec';

function Home() {
  return (
    // <Functions />
    <>
      <Banner />
      <Navbar />
      <Functions />
      <VideoSec />
      {/* <RSVP /> */}
      <Gallery />
      <Footer />
    </>
  );
}

export default Home;
