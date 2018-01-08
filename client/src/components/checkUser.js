import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class CheckUser extends Component{
    constructor(props){
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        const cityInfo = this.props.selectedCity;

        axios.post('/api/saveToDB', { savedInfo: cityInfo }).then( res => console.log('sent to the back!'))
    }

    renderSaveCityButton(){
        switch(this.props.auth){
            case null:
                return;
            case false:
                return(
                    <div >
                        Sign in to save this information!
                    </div>
                );
                default:
                    return (
                        <div onClick={this.onClick}>
                        Save this city!
                        </div>
                    )
        }
    }

    render(){
        console.log('check userr', this.props)
            if(this.props.url === '/savedInfo'){
                    return(
                        <div>Delete</div>
                    )
            } else {
                return (
                    <div>
                        {this.renderSaveCityButton()}
                    </div>
                );
        }
    }
}

const mapStateToProps = (state) => { return { auth: state.authUser, url : state.url } }

export default connect(mapStateToProps)(CheckUser);