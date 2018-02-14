import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSavedInfo, passUrl } from '../actions/index'
import SavedList from '../containers/weatherList';

class SavedInfo extends Component {
    componentWillMount(){
        this.props.actions.fetchSavedInfo();
    }
    render(){
        const url = this.props.match.path;
        this.props.actions.passUrl(url)
        return(
            <div className="data-table">
                <Link to="/">Back Home</Link>
                <h1>Saved Cities</h1>
                <SavedList url={url} saved={this.props.savedCities}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        savedCities : state.savedCities.data
    }
}
const mapDispatchToProps = (dispatch) => { 
    return {
        actions: {
            fetchSavedInfo: bindActionCreators(fetchSavedInfo, dispatch),
            passUrl: bindActionCreators(passUrl, dispatch)
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SavedInfo);