import React, { Component } from 'react';
import Header from '../Header/header';
import Menu from '../Menu/menu';
import About from '../About/about';
import Experience from '../Experience/experience';
import Projects from '../Projects/projects';
import Skills from '../Skills/skills';
import Footer from '../Footer/footer';

const Home = () => {
    return (
        <div className="App">
          <Menu />
          <Header />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Footer />
        </div>
    );
}

export default Home;