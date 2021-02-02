import React, { Fragment } from 'react';
import classNames from 'classnames';
import './projects.css';
import { columnOneProjects, columnTwoProjects } from './projectList';

export default class Projects extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            showProjectTitle: false,
        };
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
        
        const pTitle = document.getElementById('pTitle');

        let pTitleInView = (this.state.scrollHeight + window.innerHeight) > pTitle.offsetTop + 200,
            pTitleBotInView = (this.state.scrollHeight + window.innerHeight) < (window.innerHeight + pTitle.offsetTop + pTitle.clientHeight - 75);

        if ( (pTitleInView && pTitleBotInView) ) {
            this.setState({ showProjectTitle: true });
        }
    }

    renderColumnOne = () => {
        return (
            Object.keys(columnOneProjects).map((project, ndx) => {

                return (
                    <Fragment key={ndx}>
                        <div className="project-card">
                            <img className="projectImage" src={columnOneProjects[project].image} className="mx-auto" alt={columnOneProjects[project].title} />
                            <div className="mx-auto project-description">
                                <h4 className="project-title">{columnOneProjects[project].title}</h4>
                                <p className="margin-v-10">{columnOneProjects[project].description}</p>
                                <div>
                                    {Object.keys(columnOneProjects[project].projectSkills).map((skill, ndx) => {
                                        return <img className="skill" src={columnOneProjects[project].projectSkills[skill]} alt={columnOneProjects[project].projectSkills.skill} key={ndx} />
                                    })}
                                </div>
                                <a 
                                    className="small"
                                    href={columnOneProjects[project].link}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Learn More &#8594;
                                </a>
                            </div>
                        </div>
                    </Fragment>
                );
            })
        );
    }

    renderColumnTwo = () => {
        return (
            Object.keys(columnTwoProjects).map((project, ndx) => {
                return (
                    <Fragment key={ndx}>
                        <div className="project-card">
                            <img className="projectImage" src={columnTwoProjects[project].image} className="mx-auto" alt={columnTwoProjects[project].title} />
                            <div className="mx-auto project-description">
                                <h4 className="project-title">{columnTwoProjects[project].title}</h4>
                                <p className="margin-v-10">{columnTwoProjects[project].description}</p>
                                <div>
                                    {Object.keys(columnTwoProjects[project].projectSkills).map((skill, ndx) => {
                                        return <img className="skill" src={columnTwoProjects[project].projectSkills[skill]} alt={columnTwoProjects[project].projectSkills.skill} key={ndx} />
                                    })}
                                </div>
                                <a 
                                    className="small"
                                    href={columnTwoProjects[project].link}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                >
                                    Learn More &#8594;
                                </a>
                            </div>
                        </div>
                    </Fragment>
                );
            })
        );
    }

    render() {

        return (
            <div className="projects bg-dark" id="projects">
                <div className="container">
                    <div className={classNames("row", {'visible-projects': this.state.showProjectTitle})} id="pTitle">
                        <div className="col-12 text-center">
                            <h1 className="display-3"><strong>Projects</strong></h1>
                        </div>
                    </div>
                    <div className="row justify-content-center mx-auto">
                        <div className="col-md-4 col-sm-12">
                            {this.renderColumnOne()}
                        </div>
                        <div className="col-md-4 col-sm-12 secondColumn">
                            {this.renderColumnTwo()}
                        </div>
                    </div>
                </div>
            </div>
        ); 
    }
}
