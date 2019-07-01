import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fab from '@material-ui/core/Fab';
import Resume from '../../KevinLoiResume.pdf';

const footer = () => {

    return (
        <div className="footer" id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h1 className="display-3"><strong>Learn More</strong></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="col-xs-12" id="link">
                            <Fab color="inherit" href="https://github.com/kevloi">
                                <FontAwesomeIcon style={{color: 'black'}} icon={['fab', 'github-alt']} size="2x" />
                            </Fab> 
                            <a target="_blank" href="https://github.com/kevloi">https://github.com/kevloi</a>   
                        </div>
                        <div className="col-xs-12" id="link">
                            <Fab color="inherit" href="https://www.linkedin.com/in/kevin-loi/">
                                <FontAwesomeIcon style={{color: 'black'}} icon={['fab', 'linkedin-in']} size="2x" />
                            </Fab> 
                            <a target="_blank" href="https://www.linkedin.com/in/kevin-loi/">https://www.linkedin.com/in/kevin-loi/</a>   
                        </div>
                        <div className="col-xs-12" id="link">
                            <Fab color="inherit" href={Resume} target="_blank">
                                <FontAwesomeIcon style={{color: 'black'}} icon={['fas', 'file-alt']} size="2x" />
                            </Fab> 
                            <a href={Resume} target="_blank">My Resume</a>   
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    ); 
}

export default footer;
