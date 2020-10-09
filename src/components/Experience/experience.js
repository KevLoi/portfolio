import React from 'react';
import './experience.css';
import Ameritech from '../../images/AmeritechLogo.png';
import Murj from '../../images/murjLogo.png';
import Orientation from '../../images/orientationLogo.png';
import Walkthru from '../../images/WalkthruLogo.png';
import classNames from 'classnames';

export default class Experince extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            showExpTitle: false,
            showExpMurj: false,
            showExpACS: false,
            showExpWT: false,
            showExpUCSC: false,
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
        
        const expTitle = document.getElementById('expTitle');
        const expMurj = document.getElementById('expMurj');
        const expACS = document.getElementById('expACS');
        const expWT = document.getElementById('expWT');
        const expUCSC = document.getElementById('expUCSC');

        let titleInView = (this.state.scrollHeight + window.innerHeight) > expTitle.offsetTop + 200,
            titleBotInView = (this.state.scrollHeight + window.innerHeight) < (window.innerHeight + expTitle.offsetTop + expTitle.clientHeight - 150),
            murjInView = (this.state.scrollHeight + window.innerHeight) > expMurj.offsetTop + 200,
            murjBotInView = (this.state.scrollHeight + window.innerHeight) < (window.innerHeight + expMurj.offsetTop + expMurj.clientHeight - 150),
            acsInView = (this.state.scrollHeight + window.innerHeight) > expACS.offsetTop + 200,
            acsBotInView = (this.state.scrollHeight + window.innerHeight) < (window.innerHeight + expACS.offsetTop + expACS.clientHeight - 150),
            wtInView = (this.state.scrollHeight + window.innerHeight) > expWT.offsetTop + 200,
            wtBotInView = (this.state.scrollHeight + window.innerHeight) < (window.innerHeight + expWT.offsetTop + expWT.clientHeight - 150),
            ucscInView = (this.state.scrollHeight + window.innerHeight) > expUCSC.offsetTop + 200,
            ucscBotInView = (this.state.scrollHeight + window.innerHeight) < (window.innerHeight + expUCSC.offsetTop + expUCSC.clientHeight - 150);

        if ( (titleInView && titleBotInView) ) {
            this.setState({ showExpTitle: true });
        } else {
            this.setState({ showExpTitle: false });
        }

        if ( (murjInView && murjBotInView) ) {
            this.setState({ showExpMurj: true });
        } else {
            this.setState({ showExpMurj: false });
        }

        if ( (acsInView && acsBotInView) ) {
            this.setState({ showExpACS: true });
        } else {
            this.setState({ showExpACS: false });
        }

        if ( (wtInView && wtBotInView) ) {
            this.setState({ showExpWT: true });
        } else {
            this.setState({ showExpWT: false });
        }

        if ( (ucscInView && ucscBotInView) ) {
            this.setState({ showExpUCSC: true });
        } else {
            this.setState({ showExpUCSC: false });
        }
    }


    render() {
        return (
            <div className="experience bg-secondary" id="experience">
                <div className="container">
                    <div className={classNames("row", {'visible': this.state.showExpTitle})} id="expTitle">
                        <div className="col-12 text-center">
                            <h1 className="display-3"><strong>Experience</strong></h1>
                        </div>
                    </div>
                    <div className={classNames("card bg-transparent shadow murj", {'visible': this.state.showExpMurj})} id="expMurj">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3 col-sm-12 text-center my-auto">
                                    <img src={Murj} alt="Murj" />
                                    <p>Developer<br />DEC 2018 - Present</p>
                                </div>
                                <div className="col-md-9 col-sm-12 my-auto">
                                    <ul>
                                        <li>Updated and implemented new features to the frontend in a timely manner, improving overall user experience</li>
                                        <li>Developed wireframes for multiple applications, creating new business opportunities for the company</li>
                                        <li>Used Tableau to create and manage a variety of graphs, improving data visualization for users</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classNames("card bg-transparent shadow ameritech", {'visible': this.state.showExpACS})} id="expACS">
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
                    <div className={classNames("card bg-transparent shadow walkthru", {'visible': this.state.showExpWT})} id="expWT">
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
                    <div className={classNames("card bg-transparent shadow orientation", {'visible': this.state.showExpUCSC})} id="expUCSC">
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
     
}
