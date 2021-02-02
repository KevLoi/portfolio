import React from 'react';
import classNames from 'classnames';
import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import html from '../../images/Logos/HTML.png';
import css from '../../images/Logos/CSS.png';
import jsx from '../../images/Logos/JSX.png';
import bootstrap from '../../images/Logos/Bootstrap.png';
import mui from '../../images/Logos/MaterialUI.png';
import javascript from '../../images/Logos/JavaScript.png';
import react from '../../images/Logos/ReactJS.png';
import angular from '../../images/Logos/AngularJS.png';
import node from '../../images/Logos/NodeJS.png';
import d3 from '../../images/Logos/d3.png';
import jquery from '../../images/Logos/jquery.png';
import python from '../../images/Logos/Python.png';
import mongo from '../../images/Logos/MongoDB.png';
import postgres from '../../images/Logos/Postgresql.png';
import nosql from '../../images/Logos/NoSQL.png';
import git from '../../images/Logos/Git.png';
import agile from '../../images/Logos/Agile.png';
import rest from '../../images/Logos/RESTful.png';
import tableau from '../../images/Logos/tableau.png';
import swift from '../../images/Logos/Swift.png';
import figma from '../../images/Logos/Figma.png';

export default class Skills extends React.Component {

    constructor(props) {
        super(props);
        this.state = { showSkills: false };
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        this.setState({ scrollHeight: window.scrollY });
        
        const content = document.getElementById('skillsContent');
        let topInView = (this.state.scrollHeight + window.innerHeight) > content.offsetTop + 200,
            bottomInView = (this.state.scrollHeight + window.innerHeight) < (window.innerHeight + content.offsetTop + content.clientHeight - 150);

        if ( (topInView && bottomInView) ) {
            this.setState({ showSkills: true });
        } else {
            this.setState({ showSkills: false });
        }
    }

    render() {
        return (
            <div className="skills bg-dark" id="skills">
                <div className="container">
                    <Fade in={this.state.showSkills} timeout={1000}>
                        <Paper elevation={10} className="skills-section bg-riverbed" id="skillsContent">
                            <div className="row">
                                <div className={classNames("col-md-3 col-sm-12 frontEnd text-center padding-bottom-30", {'bottom-border': this.props.innerWidth < 768})}>
                                    <div className="skills-header">
                                        <FontAwesomeIcon style={{color: '#dde1ed'}} icon={['fas', 'file-code']} size="4x" />
                                        <h3>Frontend</h3>
                                    </div>
                                    <div className="row skills-content">
                                        <div className="col-12">
                                            <img src={html} alt="HTML" />
                                            <p className="lead">HTML</p>
                                        </div>
                                        <div className="col-12">
                                            <img src={css} alt="CSS" />
                                            <p className="lead">CSS</p>
                                        </div>
                                        <div className="col-12">
                                            <img className="jsx-img" src={jsx} alt="JSX" />
                                            <p className="lead">JSX</p>
                                        </div>
                                        <div className="col-12">
                                            <img className="bs-img" src={bootstrap} alt="BS" />
                                            <p className="lead">Bootstrap</p>
                                        </div>
                                        <div className="col-12">
                                            <img className="mui-img" src={mui} alt="BS" />
                                            <p className="lead">Material-UI</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={classNames("col-md-3 col-sm-12 javaScript text-center padding-bottom-30", {'bottom-border': this.props.innerWidth < 768})}>
                                    <div className="skills-header">
                                        <FontAwesomeIcon style={{color: '#dde1ed'}} icon={['fab', 'js-square']} size="4x" />
                                        <h3>JavaScript</h3>
                                    </div>
                                    <div className="row skills-content">
                                        <div className="col-12">
                                            <img src={javascript} alt="JavaScript" />
                                            <p className="lead">JavaScript</p>
                                        </div>
                                        <div className="col-12">
                                            <img src={jquery} alt="jQuery" />
                                            <p className="lead">jQuery</p>
                                        </div>
                                        <div className="col-12">
                                                <img src={react} alt="React" />
                                                <p className="lead">React</p>
                                        </div>
                                        <div className="col-12">
                                            <img src={angular} alt="Angular" />
                                            <p className="lead">Angular</p>
                                        </div>
                                        <div className="col-12">
                                            <img src={node} alt="NodeJS" />
                                            <p className="lead">NodeJS</p>
                                        </div>
                                        <div className="col-12">
                                            <img src={d3} alt="d3.js" />
                                            <p className="lead">D3.js</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={classNames("col-md-3 col-sm-12 backEnd text-center padding-bottom-30", {'bottom-border': this.props.innerWidth < 768})}>
                                    <div className="skills-header">
                                        <FontAwesomeIcon style={{color: '#dde1ed'}} icon={['fas', 'terminal']} size="4x" />
                                        <h3>Backend</h3>
                                    </div>
                                    <div className="row skills-content">
                                        <div className="col-12">
                                            <img src={python} alt="Python" />
                                            <p className="lead">Python</p>
                                        </div>
                                        <div className="col-12">
                                            <img src={mongo} alt="MongoDB" />
                                            <p className="lead">MongoDB</p>
                                        </div>
                                        <div className="col-12">
                                            <img src={postgres} alt="PostgreSQL" />
                                            <p className="lead">PostgreSQL</p>
                                        </div>
                                        <div className="col-12">
                                            <img src={nosql} alt="NoSQL" />
                                            <p className="lead">NoSQL</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={classNames("col-md-3 col-sm-12 other text-center padding-bottom-30", {'bottom-border': this.props.innerWidth < 768})}>
                                    <div className="skills-header">
                                        <FontAwesomeIcon style={{color: '#dde1ed'}} icon={['fas', 'laptop']} size="4x" />
                                        <h3>Other</h3>
                                    </div>
                                    <div className="row skills-content">
                                        <div className="col-12">
                                            <img src={git} alt="Git" />
                                            <p className="lead">Git</p>
                                        </div>
                                        <div className="col-12">
                                            <img src={tableau} alt="tableau" />
                                            <p className="lead">Tableau</p>
                                        </div>
                                        <div className="col-12">
                                            <img src={figma} alt="Figma" />
                                            <p className="lead">Figma</p>
                                        </div>
                                        <div className="col-12">
                                            <img src={agile} alt="Agile Development" />
                                            <p className="lead">Agile Development</p>
                                        </div>
                                        <div className="col-12">
                                            <img src={rest} alt="RESTful API" />
                                            <p className="lead">RESTful API</p>
                                        </div>
                                        <div className="col-12">
                                            <img src={swift} alt="Swift" />
                                            <p className="lead">Swift</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    </Fade>
                </div>
            </div>
        );
    }
    
}