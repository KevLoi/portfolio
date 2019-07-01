import React from 'react';
import './skills.css';
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
import wordpress from '../../images/Logos/Wordpress.png';
import swift from '../../images/Logos/Swift.png';
import figma from '../../images/Logos/Figma.png';

const skills = () => {
    return (
        <div className="skills" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h1 className="display-3"><strong>Skills</strong></h1>
                    </div>
                </div>
                <div className="row" style={{padding: '0px 15px'}}>
                    <div className="col-xs-12 frontEnd">
                        <div className="card bg-dark">
                            <div className="card-header">
                                <h1 className="display-5">Front End</h1>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col text-center">
                                        <img src={html} alt="HTML" />
                                        <p className="lead">HTML</p>
                                    </div>
                                    <div className="col text-center">
                                        <img src={css} alt="CSS" />
                                        <p className="lead">CSS</p>
                                    </div>
                                    <div className="col text-center">
                                        <img className="jsx-img" src={jsx} alt="JSX" />
                                        <p className="lead">JSX</p>
                                    </div>
                                    <div className="col text-center">
                                        <img className="bs-img" src={bootstrap} alt="BS" />
                                        <p className="lead">Bootstrap</p>
                                    </div>
                                    <div className="col text-center">
                                        <img className="mui-img" src={mui} alt="BS" />
                                        <p className="lead">Material-UI</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{padding: '0px 15px'}}>
                    <div className="col-xs-12 javaScript">
                        <div className="card bg-dark">
                            <div className="card-header">
                                <h1 className="display-5">JavaScript</h1>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col text-center">
                                        <img src={javascript} alt="JavaScript" />
                                        <p className="lead">JavaScript</p>
                                    </div>
                                    <div className="col text-center">
                                        <img src={jquery} alt="jQuery" />
                                        <p className="lead">jQuery</p>
                                    </div>
                                    <div className="col text-center">
                                        <img src={react} alt="React" />
                                        <p className="lead">React</p>
                                    </div>
                                    <div className="col text-center">
                                        <img src={angular} alt="Angular" />
                                        <p className="lead">Angular</p>
                                    </div>
                                    <div className="col text-center">
                                        <img src={node} alt="NodeJS" />
                                        <p className="lead">NodeJS</p>
                                    </div>
                                    <div className="col text-center">
                                        <img src={d3} alt="d3.js" />
                                        <p className="lead">D3.js</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{padding: '0px 15px'}}>
                    <div className="col-xs-12 backEnd">
                        <div className="card bg-dark">
                            <div className="card-header">
                                <h1 className="display-5">Back End</h1>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col text-center">
                                        <img src={python} alt="Python" />
                                        <p className="lead">Python</p>
                                    </div>
                                    <div className="col text-center">
                                        <img src={mongo} alt="MongoDB" />
                                        <p className="lead">MongoDB</p>
                                    </div>
                                    <div className="col text-center">
                                        <img src={postgres} alt="PostgreSQL" />
                                        <p className="lead">PostgreSQL</p>
                                    </div>
                                    <div className="col text-center">
                                        <img src={nosql} alt="NoSQL" />
                                        <p className="lead">NoSQL</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{padding: '0px 15px'}}>
                    <div className="col-xs-12 other">
                        <div className="card bg-dark">
                            <div className="card-header">
                                <h1 className="display-5">Other</h1>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col text-center">
                                        <img src={git} alt="Git" />
                                        <p className="lead">Git</p>
                                    </div>
                                    <div className="col text-center">
                                        <img src={swift} alt="Swift" />
                                        <p className="lead">Swift</p>
                                    </div>
                                    <div className="col text-center">
                                        <img src={agile} alt="Agile Development" />
                                        <p className="lead">Agile Development</p>
                                    </div>
                                    <div className="col text-center">
                                        <img src={rest} alt="RESTful API" />
                                        <p className="lead">RESTful API</p>
                                    </div>
                                    <div className="col text-center">
                                        <img src={wordpress} alt="WordPress" />
                                        <p className="lead">WordPress</p>
                                    </div>
                                    <div className="col text-center">
                                        <img src={figma} alt="Figma" />
                                        <p className="lead">Figma</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default skills;