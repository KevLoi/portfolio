import React, { Component } from 'react';
import Header from '../Header/header';
import Menu from '../Menu/menu';
import About from '../About/about';
import Experience from '../Experience/experience';
import Projects from '../Projects/projects';
// import Skills from '../Skills/skills';
import Footer from '../Footer/footer';

class Home extends Component {

    render() {
        return (
            <div className="Home">
                <Menu />
                <Header />
                <About />
                {/* <Skills /> */}
                <Experience />
                <Projects />
                <Footer />
            </div>
        );
    }
}

export default Home;