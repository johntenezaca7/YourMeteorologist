import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {

    renderContent(){
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <div className="user-options"><a href="/auth/google">Login With Google</a></div>
                );
            default:
                return (
                    <div className="user-options-2">
                        <Link to="/savedInfo">Saved Cities</Link>
                        <div><a href="/api/logout">Logout</a></div>
                    </div>
                );
        }
    }

    render(){
        return(
            <div>
                <h1 className="title"> urMetrologist </h1>
                <div>{this.renderContent()}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => { 
    return { 
      auth: state.authUser
    }
};

export default connect(mapStateToProps)(Header);