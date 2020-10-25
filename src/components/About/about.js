import React from 'react';
import './about.css';
// import myAvatar from '../../images/myAvatar.png';
// import myAvatarChrome from '../../images/myAvatar-chrome.png';
// import foamHandBitmoji from '../../images/giant-hand-bitmoji.png';
import wavingBitmoji from '../../images/bitmoji-wave.png';
import classNames from 'classnames';


export default class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            showAvatar: false,
            showAbout: false, 
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
        
        const aboutAvatar = document.getElementById('aboutAvatar'),
              aboutDescription = document.getElementById('aboutDescription');

        let avatarTopInView = (this.state.scrollHeight + window.innerHeight) > aboutAvatar.offsetTop + 200,
            avatarBotInView = (this.state.scrollHeight + window.innerHeight) < (window.innerHeight + aboutAvatar.offsetTop + aboutAvatar.clientHeight - 150),
            dTopInView = (this.state.scrollHeight + window.innerHeight) > aboutDescription.offsetTop + 200,
            dBotInView = (this.state.scrollHeight + window.innerHeight) < (window.innerHeight + aboutDescription.offsetTop + aboutDescription.clientHeight - 150);

        if ( (avatarTopInView && avatarBotInView) ) {
            this.setState({ showAvatar: true });
        } else {
            this.setState({ showAvatar: false });
        }

        if ( (dTopInView && dBotInView) ) {
            this.setState({ showAbout: true });
        } else {
            this.setState({ showAbout: false });
        }
    }

    render() {
        return (
            <div className="about bg-dark" id="about">
                <div className="container">
                    <div className="row" id="aboutContent">
                        <div id="aboutAvatar" className={classNames("col-md-5 col-sm-12 d-flex flex-wrap align-items-center padding-top-15 padding-bottom-15", {'avatar-visible': this.state.showAvatar})}>
                            <img src={wavingBitmoji} className="mx-auto d-block" alt="myFace" />
                        </div>
                        <div id="aboutDescription" className={classNames("col-md-7 col-sm-12 padding-top-15 padding-bottom-15", {'text-center' : window.innerWidth < 768, 'about-visible': this.state.showAbout})}>
                            <h1 className="display-5"><strong>Yo! My name is Kevin</strong></h1>
                            <p className="lead">
                                I am a frontend developer 
                                from Santa Cruz, CA. My passion is to develop elegant and 
                                functional web pages, turning one's imagination into reality.
                            </p>
                            <p className="lead">
                                Aside from being a developer, I enjoy playing basketball, 
                                video/board games, rock climbing, and hiking. Keep scrolling to see my
                                skills and more!
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
    
}