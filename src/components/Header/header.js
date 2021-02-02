import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Resume from '../../KevinLoiResume.pdf';

const header = () => {
    return (
        <div className="header" id="header">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="row justify-content-start">
                        <div className="col-md-6 text-center" style={{color: '#dde1ed'}}>
                            <h1 className="display-1" >Kevin Loi</h1>
                            <p className="lead">Developer @ Murj</p>
                            <div className="row justify-content-center">
                                <div className="col-2 text-center" id="link">
                                    <a href="https://github.com/kevloi" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon style={{color: 'white'}} icon={['fab', 'github-alt']} size="2x" />
                                    </a>
                                </div>
                                <div className="col-2 text-center" id="link">
                                    <a href="https://www.linkedin.com/in/kevin-loi/" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon style={{color: 'white'}} icon={['fab', 'linkedin-in']} size="2x" />
                                    </a> 
                                </div>
                                <div className="col-2 text-center" id="link">
                                    <a href={Resume} target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon style={{color: 'white'}} icon={['fas', 'file-alt']} size="2x" />
                                    </a> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default header;