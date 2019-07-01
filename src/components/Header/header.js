import React from 'react';
import './header.css';

const header = () => {
    return (
        <div className="header" id="header">
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="row justify-content-end">
                        <div className="col-md-6 text-center" style={{color: 'white'}}>
                            <h1 className="display-1" >Kevin Loi</h1>
                            <p className="lead">UI/UX Developer @ Murj</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default header;