import React from 'react';
import classNames from 'classnames';
import './projects.css';
import acsSite from '../../images/acsSite.png';
import sankey from '../../images/sankeyDiagram.png';
import tipsyTrials from '../../images/tipsyTrials.png';
import starvingslug from '../../images/StarvingSlug.png';
import browsr from '../../images/browsr.png';

export default class Projects extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            showProjectTitle: false,
            showACS: false,
            showSankey: false,
            showTT: false,
            showTSS: false,
            showBrowsr: false,
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
        const pACS = document.getElementById('acs');
        const pSankey = document.getElementById('sankey');
        const pTT = document.getElementById('tt');
        const pTSS = document.getElementById('tss');
        const pBrowsr = document.getElementById('browsr');

        let pTitleInView = (this.state.scrollHeight + window.innerHeight) > pTitle.offsetTop + 200,
            pTitleBotInView = (this.state.scrollHeight + window.innerHeight) < (window.innerHeight + pTitle.offsetTop + pTitle.clientHeight - 75),
            acsInView = (this.state.scrollHeight + window.innerHeight) > pACS.offsetTop + 200,
            acsBotInView = (this.state.scrollHeight + window.innerHeight) < (window.innerHeight + pACS.offsetTop + pACS.clientHeight - 75),
            sankeyInView = (this.state.scrollHeight + window.innerHeight) > pSankey.offsetTop + 200,
            sankeyBotInView = (this.state.scrollHeight + window.innerHeight) < (window.innerHeight + pSankey.offsetTop + pSankey.clientHeight - 75),
            ttInView = (this.state.scrollHeight + window.innerHeight) > pTT.offsetTop + 200,
            ttBotInView = (this.state.scrollHeight + window.innerHeight) < (window.innerHeight + pTT.offsetTop + pTT.clientHeight - 75),
            tssInView = (this.state.scrollHeight + window.innerHeight) > pTSS.offsetTop + 200,
            tssBotInView = (this.state.scrollHeight + window.innerHeight) < (window.innerHeight + pTSS.offsetTop + pTSS.clientHeight - 75),
            browsrInView = (this.state.scrollHeight + window.innerHeight) > pBrowsr.offsetTop + 200,
            browsrBotInView = (this.state.scrollHeight + window.innerHeight) < (window.innerHeight + pBrowsr.offsetTop + pBrowsr.clientHeight - 75);

        if ( (pTitleInView && pTitleBotInView) ) {
            this.setState({ showProjectTitle: true });
        } else {
            this.setState({ showProjectTitle: false });
        }

        if ( (acsInView && acsBotInView) ) {
            this.setState({ showACS: true });
        } else {
            this.setState({ showACS: false });
        }

        if ( (sankeyInView && sankeyBotInView) ) {
            this.setState({ showSankey: true });
        } else {
            this.setState({ showSankey: false });
        }

        if ( (ttInView && ttBotInView) ) {
            this.setState({ showTT: true });
        } else {
            this.setState({ showTT: false });
        }

        if ( (tssInView && tssBotInView) ) {
            this.setState({ showTSS: true });
        } else {
            this.setState({ showTSS: false });
        }

        if ( (browsrInView && browsrBotInView) ) {
            this.setState({ showBrowsr: true });
        } else {
            this.setState({ showBrowsr: false });
        }
    }

    render() {
        return (
            <div className="projects bg-secondary" id="projects">
                <div className="container">
                    <div className={classNames("row", {'visible-projects': this.state.showProjectTitle})} id="pTitle">
                        <div className="col-12 text-center">
                            <h1 className="display-3"><strong>Projects</strong></h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="d-flex flex-wrap justify-content-around text-center">
                            <div className={classNames("col image-wrap", {'visible-projects': this.state.showACS})} id="acs">
                                <img src={acsSite} className="rounded mx-auto" alt="..." />
                                <div className="projectDescription mx-auto">
                                    <p className="margin-top-10">Web application that allow users to learn about Ameritech Computer Services, a service company in San Francisco.</p>
                                    <a href="https://ameritechcomputer.herokuapp.com" role="button" className="btn btn-outline-info" id="ameritechSite" target="_blank">Visit Website</a>
                                </div>
                            </div>
                            <div className={classNames("col image-wrap", {'visible-projects': this.state.showSankey})} id="sankey">
                                <img src={sankey} className="rounded mx-auto" alt="..." />
                                <div className="projectDescription mx-auto">
                                    <p className="margin-top-10">Web application that uses a sankey diagram to inform users of emotional and medical effects of Santa Cruz based cannabis strains.</p>
                                    <a href="https://shihwesley.github.io/CMPS165-Final-Presentation/index.html" role="button" className="btn btn-outline-info" id="tssSite" target="_blank">Visit Website</a>
                                </div>
                                
                            </div>
                            <div className={classNames("col image-wrap", {'visible-projects': this.state.showTT})} id="tt">
                                <img src={tipsyTrials} className="rounded mx-auto" alt="..." />
                                <div className="projectDescription mx-auto">
                                    <p className="margin-top-10">iOS application that allow users to test their cognitive skills with a series of games while under the influence.</p>
                                    <a href="https://bitbucket.org/xdiaz1996/tipsy-ios/src/master/" role="button" className="btn btn-outline-info" target="_blank">Visit Website</a>
                                </div>
                            </div>
                            <div className={classNames("col image-wrap", {'visible-projects': this.state.showTSS})} id="tss">
                                <img src={starvingslug} className="rounded mx-auto" alt="..." />
                                <div className="projectDescription mx-auto">
                                    <p className="margin-top-10">Interactive web application that allow users to share and delete recipes. Users can also search, comment on, and rate others' recipes.</p>
                                    <a href="https://github.com/starving-slug" role="button" className="btn btn-outline-info" target="_blank">Visit Website</a>
                                </div>
                            </div>
                            <div className={classNames("col image-wrap", {'visible-projects': this.state.showBrowsr})} id="browsr">
                                <img src={browsr} className="rounded mx-auto" alt="..." />
                                <div className="projectDescription mx-auto">
                                    <p className="margin-top-10">Web app that allow users to create their own resume websites using only Google Sheets, for free.</p>
                                    <a href="https://browsr.io" role="button" className="btn btn-outline-info" target="_blank">Visit Website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ); 
    }
}
