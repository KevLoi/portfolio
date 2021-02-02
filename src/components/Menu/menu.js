import React from 'react';
import './menu.css';
import { Link } from 'react-scroll';
import Tooltip from '@material-ui/core/Tooltip';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
// import MailIcon from '@material-ui/icons/Mail';
import { Spin as Hamburger } from 'hamburger-react';
import classNames from 'classnames';

class SimpleMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isMenuOpen: false};
    }

    render() {

        return (
            <div id="menu">
                <div className="test">
                    <div className="menu rounded-circle menu-circle">
                        <Hamburger rounded size={20} onToggle={() => this.setState({isMenuOpen: !this.state.isMenuOpen})} />
                    </div>
                    <div className={classNames({"opacity-0" : !this.state.isMenuOpen, "menu-content" : this.state.isMenuOpen})}>
                        <Tooltip title="Home" placement="right" >
                            <Link activeClass="active" to="header" spy={true} smooth={true}>
                                <div className="rounded-circle circle text-center">
                                    <HomeIcon />
                                </div>
                            </Link>
                        </Tooltip>

                        <div className="line"></div>

                        <Tooltip title="About" placement="right" >
                            <Link activeClass="active" to="about" spy={true} smooth={true}>
                                <div className="rounded-circle circle text-center">
                                    <PersonIcon />
                                </div>
                            </Link>
                        </Tooltip>

                        <div className="line"></div>

                        <Tooltip title="Experience" placement="right" >
                            <Link activeClass="active" to="experience" spy={true} smooth={true}>
                                <div className="rounded-circle circle text-center">
                                    <WorkIcon />
                                </div>
                            </Link>
                        </Tooltip>

                        <div className="line"></div>

                        <Tooltip title="Projects" placement="right" >
                            <Link activeClass="active" to="projects" spy={true} smooth={true}>
                                <div className="rounded-circle circle text-center">
                                    <CollectionsBookmarkIcon />
                                </div>
                            </Link>
                        </Tooltip>

                        {/* <div className="line"></div>

                        <Tooltip title="Contact" placement="right" >
                            <Link activeClass="active" to="footer" spy={true} smooth={true}>
                                <div className="rounded-circle circle text-center">
                                    <MailIcon />
                                </div>
                            </Link>
                        </Tooltip> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default SimpleMenu;