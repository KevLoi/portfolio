import React, { Component } from 'react';
import { contributions } from './Contributions';
import './work.css';

export default class Work extends Component {

    renderDescriptions(description) {
        for ( let i = 0; i < description.length; i++ ) {
            return <li>{description[i]}</li>
        }
    }

    render() {
        return (
            <div className="work bg-dark" id="work">
                <div className="container">
                    <div className="row justify-content-center work-title">
                        <div className="col-md-8 col-sm-12">
                            <p className="display-3">
                                MURJ Projects
                            </p>
                            <p>Some project I have been involved in during my time at Murj</p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-sm-12 work-content">
                            {contributions.map(project => {
                                // const descriptions = project.description;
                                console.log(Array.isArray(project.description));
                                return (
                                    <div key={project.title}>
                                        <img src={project.img} height="400px" width="auto" alt={project.title} />
                                        <h4>{project.title}</h4>
                                        <div>{project.description}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}