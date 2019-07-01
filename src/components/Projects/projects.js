import React from 'react';
import './projects.css';
import acsSite from '../../images/acsSite.png';
import sankey from '../../images/sankeyDiagram.png';
import tipsyTrials from '../../images/tipsyTrials.png';
import starvingslug from '../../images/StarvingSlug.png';

const projects = () => {
    return (
        <div className="projects" id="projects">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h1 className="display-3"><strong>Projects</strong></h1>
                    </div>
                </div>
                <div className="row">
                    <div class="col-lg-3 col-md-6 col-xs-12 card-container">
                        <div class="card-flip">
                            {/* <!-- Card 1 Front --> */}
                            <div class="card bg-dark front">
                                <img src={acsSite} class="card-img-top img-fluid" />
                                <div class="card-block">
                                    <h4 class="card-title">Ameritech</h4>
                                    <p class="card-text">Web app that allow users can learn about the company, and contact the company regarding any questions or concerns.</p>
                                </div>
                            </div>
                            {/* <!-- End Card 1 Front --> */}

                            {/* <!-- Card 1 Back --> */}
                            <div class="card bg-dark back">
                                <div class="card-header">
                                    <h4>Achievements</h4>
                                </div>
                                <div class="card-block">
                                    <p class="card-text">I used Handlbars.JS for templating, while using Node.JS and Express.JS for building the Web Server. For practice, I also recreated the entire front end as another personal project using React.JS.</p>
                                    <a href="https://ameritechcomputer.herokuapp.com" role="button" class="btn btn-outline-info" id="ameritechSite" target="_blank">Visit Website</a>
                                </div>
                            </div>
                            {/* <!-- End Card 1 Back --> */}
                        </div>
                    </div>
                    {/* <!-- End Card 1 --> */}

                    <div class="col-lg-3 col-md-6 col-xs-12 card-container">
                        <div class="card-flip">
                            {/* <!-- Card 2 Front --> */}
                            <div class="card bg-dark front">
                                <img src={sankey} class="card-img-top img-fluid" />
                                <div class="card-block">
                                    <h4 class="card-title">Effects</h4>
                                    <p class="card-text">Web app that uses a sankey diagram to inform users of emotional and medical effects of Santa Cruz based cannabis strains.</p>
                                </div>
                            </div>
                            {/* <!-- End Card 2 Front --> */}

                            {/* <!-- Card 1 Back --> */}
                            <div class="card bg-dark back">
                                <div class="card-header">
                                    <h4>Achievements</h4>
                                </div>
                                <div class="card-block">
                                    <p class="card-text">A team of 4 that built the website using HTML, CSS, JavaScript, and D3.js. I web scraped for data, styled the page, cited our sources, made nodes clickable, and highlighted links that correspond to selected nodes.</p>
                                    <a href="https://shihwesley.github.io/CMPS165-Final-Presentation/index.html" role="button" class="btn btn-outline-info" id="tssSite" target="_blank">Visit Website</a>
                                </div>
                            </div>
                            {/* <!-- End Card 2 Back --> */}
                        </div>
                    </div>
                    {/* <!-- End Card 2 --> */}

                    <div class="col-lg-3 col-md-6 col-xs-12 card-container">
                        <div class="card-flip">
                            {/* <!-- Card 3 Front --> */}
                            <div class="card bg-dark front">
                                <img src={tipsyTrials} class="card-img-top img-fluid" />
                                <div class="card-block">
                                    <h4 class="card-title">Tipsy Trials</h4>
                                    <p class="card-text">iOS application that allow users to test their cognitive skills with a series of games while under the influence. </p>
                                </div>
                            </div>
                            {/* <!-- End Card 3 Front --> */}

                            {/* <!-- Card 3 Back --> */}
                            <div class="card bg-dark back">
                                <div class="card-header">
                                    <h4>Achievements</h4>
                                </div>
                                <div class="card-block">
                                    <p class="card-text">A team of 5 that built this iOS application using Xcode 9 and Swift 4. I implemented and wrote scripts to read and write data from/to the Firebase Database, created the profile page and the timer as the user's score.</p>
                                    <a href="https://bitbucket.org/xdiaz1996/tipsy-ios/src/master/" role="button" className="btn btn-outline-info" target="_blank">Visit Website</a>
                                </div>
                            </div>
                            {/* <!-- End Card 3 Back --> */}
                        </div>
                    </div>
                    {/* <!-- End Card 3 --> */}

                    <div class="col-lg-3 col-md-6 col-xs-12 card-container">
                        <div class="card-flip">
                            {/* <!-- Card 4 Front --> */}
                            <div class="card bg-dark front">
                                <img src={starvingslug} class="card-img-top img-fluid" />
                                <div class="card-block">
                                    <h4 class="card-title">Starving Slug</h4>
                                    <p class="card-text">Web app that allow users to share and delete recipes. Users can also search, comment on, and rate others' recipes.</p>
                                </div>
                            </div>
                            {/* <!-- End Card 4 Front --> */}

                            {/* <!-- Card 4 Back --> */}
                            <div className="card bg-dark back">
                                <div className="card-header">
                                    <h4>Achievements</h4>
                                </div>
                                <div className="card-block">
                                    <p className="card-text">A team of 6 that built this web application using MEAN Stack (MongoDB, ExpressJS, Angular5, NodeJS). I contributed by writing Unit Tests, functions, and models for the RESTful API server in NodeJS.</p>
                                    <a href="https://github.com/starving-slug" role="button" className="btn btn-outline-info" target="_blank">Visit Website</a>
                                </div>
                            </div>
                            {/* <!-- End Card 4 Back --> */}
                        </div>
                    </div>
                    {/* <!-- End Card 4 --> */}
                </div>
            </div>
        </div>
    ); 
}

export default projects;
