import React from 'react';
import './about.css';
import profile from '../../images/aboutImg.jpeg';


const about = () => {
    return (
        <div className="about" id="about">
            <div className="container">
                <div className="row">
                    <h1 className="display-3"><strong>About Me</strong></h1>
                </div>
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        
                        {/* <hr /> */}
                        <p class="lead">
                            Hello! My name is Kevin Loi and I am a user experience developer 
                            from Santa Cruz, California. My passion is to develop elegant and 
                            functional web pages, turning one's imagination into reality.
                        </p>
                        <p class="lead">
                            Aside from coding, I enjoy playing basketball, playing video/board games,
                            rock climbing, and finding new shows to watch. 
                        </p>
                    </div>
                    <div className="col-md-6 col-sm-12 text-center">
                        <img src={profile} className="mx-auto d-block" alt="myFace" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default about;