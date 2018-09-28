import {connect} from 'react-redux';
import React,{Component} from 'react';


import Route from './components/Routes/index';

class Main extends Component {
   
    render() {
        return (
            <Route />
            
        )
    }
}

export default connect(null,null)(Main);