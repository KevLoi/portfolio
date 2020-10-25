import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fab from '@material-ui/core/Fab';
import Resume from '../../KevinLoiResume.pdf';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';

const footer = () => {

    return (
        <div className="footer bg-dark" id="footer">
            <div className="container">
                <div className="row">
                    <Paper elevation={8} className="more-msg bg-dark col-12 d-flex align-items-center">
                        <div className="col-12 text-center white">
                            <h1>See More!</h1>
                        </div>
                    </Paper>
                    
                </div>
                <div className="row d-flex justify-content-around footer-content">
                    <div className="col text-center" id="link">
                        <Tooltip title="Github" placement="top" arrow>
                            <Fab color="inherit" className="fa-icon" href="https://github.com/kevloi">
                                <FontAwesomeIcon style={{color: 'black'}} icon={['fab', 'github-alt']} size="2x" />
                            </Fab> 
                        </Tooltip>
                    </div>
                    <div className="col text-center" id="link">
                        <Tooltip title="LinkedIn" placement="top" arrow>
                            <Fab color="inherit" className="fa-icon" href="https://www.linkedin.com/in/kevin-loi/">
                                <FontAwesomeIcon style={{color: 'black'}} icon={['fab', 'linkedin-in']} size="2x" />
                            </Fab> 
                        </Tooltip>
                    </div>
                    <div className="col text-center" id="link">
                        <Tooltip title="Resumé" placement="top" arrow>
                            <Fab color="inherit" className="fa-icon" href={Resume} target="_blank">
                                <FontAwesomeIcon style={{color: 'black'}} icon={['fas', 'file-alt']} size="2x" />
                            </Fab> 
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default footer;
