import React from 'react';
import './experience.css';
import Ameritech from '../../images/AmeritechLogo.png';
import Murj from '../../images/murjLogo.png';
import Orientation from '../../images/orientationLogo.png';
import Walkthru from '../../images/WalkthruLogo.png';

const experience = () => {
    return (
        <div className="experience" id="experience">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h1 className="display-3"><strong>Experience</strong></h1>
                    </div>
                </div>
                <div className="card bg-transparent shadow murj">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3 col-sm-12 text-center my-auto">
                                <img src={Murj} alt="Murj" />
                                <p>UI/UX Engineer Intern<br />DEC 2018 - Present</p>
                            </div>
                            <div className="col-md-9 col-sm-12 my-auto">
                                <ul>
                                    <li>Resolved JIRA tickets by pushing changes to Git concerning frontend fixes in React</li>
                                    <li>Implemented new and updated features to frontend in React in a timely manner, improving overall user experience</li>
                                    <li>Practiced agile scrum methodologies with a product manager and a team of engineers in weekly sprint meetings</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-transparent shadow ameritech">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3 col-sm-12 text-center my-auto">
                                <img src={Ameritech} alt="Ameritech" />
                                <p >IT Solutions Assistant<br />JUN - SEPT 2018</p>
                            </div>
                            <div className="col-md-9 col-sm-12 my-auto">
                                <ul>
                                    <li>Developed and Implemented User Interface for company website using 1and1.com to increase sales and business</li>
                                    <li>Created a prototype website for improved user experience using Node.js. </li>
                                    <li>Collaborated with an onshore team to establish a prototype ecommerce site to sell products and increase business</li>
                                    <li>Demonstrated versatility by assisting the sales department in customer service and managing orders</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-transparent shadow walkthru">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3 col-sm-12 text-center my-auto">
                                <img src={Walkthru} alt="Walkthru" />
                                <p>Software Engineer Intern<br />JAN - APR 2018</p>
                            </div>
                            <div className="col-md-9 col-sm-12 my-auto">
                                <ul>
                                    <li>Refactored template-engine, which builds popover templates for creating interactive guides for client websites</li>
                                    <li>Completed detailed documentation and refactor code that manipulates the client-facing interface</li>
                                    <li>Contributed to innovation of client specifications and feedback into a refined, robust and scalable application</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-transparent shadow orientation">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3 col-sm-12 text-center my-auto">
                                <img src={Orientation} alt="Orientation" />
                                <p>UCSC Orientation Leader<br />JUL - AUG 2018</p>
                            </div>
                            <div className="col-md-9 col-sm-12 my-auto">
                                <ul>
                                    <li>Provided a welcoming and energetic environment towards incoming students, families, and friends</li>
                                    <li>Managed and facilitated the closing session of the Orientation program for new transfer students and families</li>
                                    <li>Collaborated with a myriad of teams to set up and break down multiple activities during summer orientation</li>
                                    <li>Assisted incoming students in navigating through school website to enroll in classes</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
}

export default experience;
