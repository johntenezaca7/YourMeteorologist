import React, { Component } from 'react';
import { BrowserRouter, Route } from  'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchuUser } from '../actions/index'

import Header from './Header';
import SearchAndDisplay from './SearchAndDisplay';
import SavedInfo from './savedInfo';




class App extends Component {

  componentWillMount(){
    this.props.fetchuUser();
  }

  render() {
    return (
        <div className="app">
            <BrowserRouter>
              <div>
                   <Header />
                   <Route  exact path="/" component={SearchAndDisplay}/>
                   <Route exact path="/savedInfo" component={SavedInfo}/>
              </div>
            </BrowserRouter>
        </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => { return bindActionCreators({ fetchuUser },dispatch) }

export default connect(null , mapDispatchToProps)(App);
