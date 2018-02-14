import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';
import axios from 'axios';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            term: '',
            check: []
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({
            term: event.target.value
        })
    }

    onFormSubmit(event){
        event.preventDefault();
        let search = this.state.term.toLowerCase();
        console.log('sear', search)
        
        if(this.state.check.indexOf(search) > 0){
            this.props.fetchWeather(this.state.term)
            this.setState({ term: '' });
        } else {
            this.setState({ term: '' });
        }
    }
    componentDidMount(){
        axios.get('/api/check')
        .then(res => this.setState({
            check: res.data
        }));
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} className="input-group"> 
                <input 
                    placeholder="New York, Dallas, Tampa etc.."
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => { return bindActionCreators({ fetchWeather },dispatch) }

export default connect(null, mapDispatchToProps)(SearchBar);