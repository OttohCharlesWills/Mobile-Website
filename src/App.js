import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Courses from './components/courses/course';
import Body from './components/body/body';
import Select from './components/select/select';
import Slideshow from './components/slideshow/slideshow';
import Footer from './components/footer/footer';

function App () {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Courses/>
      <Body/>
      <Select/>
      <Slideshow/>
      <Footer/>
    </div>
  );
}

export default App;

