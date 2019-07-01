import React from 'react';
import './menu.css';
// import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';

const style = theme => ({
    fab: {
        margin: 0,
        top: 30,
        left: 'auto',
        bottom: 'auto',
        right: 30,
        position: 'fixed',
        zIndex: '1000'
    }
});

class SimpleMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: false,
            scrollOptions: {
                duration: 1000,
                smooth: true
            }
        };
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { anchorEl } = this.state;

        const {classes} = this.props;

        return (
            <div className="menu" id="menu">
                {/* <Tooltip title="Click words in menu" placement="left" enterDelay={50} leaveDelay={100}> */}
                    <Fab
                        aria-owns={anchorEl ? 'simple-menu' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                        className={classes.fab}
                    >
                        <FontAwesomeIcon style={{color: 'black'}} icon={['fas', 'bars']} size="2x" />
                    </Fab>
                {/* </Tooltip> */}
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                    style={{zIndex: '1001'}}
                >
                    <MenuItem>
                        <Link to="header" onClick={this.handleClose} {...this.state.scrollOptions}>Top</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="about" onClick={this.handleClose} {...this.state.scrollOptions}>About</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="experience" onClick={this.handleClose} {...this.state.scrollOptions}>Experience</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="projects" onClick={this.handleClose} {...this.state.scrollOptions}>Projects</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="skills" onClick={this.handleClose} {...this.state.scrollOptions}>Skills</Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="footer" onClick={this.handleClose} {...this.state.scrollOptions}>More</Link>
                    </MenuItem>
                </Menu>
            </div>
        );
    }
}

export default withStyles(style)(SimpleMenu);