import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Second from './Second';
class Main extends Component {
    
    componentWillMount() {
        const { fetchData } = this.props
        fetchData();
    }

    render() {
        let mydata = this.props.data.data;
        console.log("Props my props...>", mydata);
        return(
            <div>
                Main
                <Second secondData={mydata}/>
            </div>
        );
    }
}

/*
function mapStateToProps(state){
	return {
  	posts: state.posts
  }
}
*/

const mapStateToProps =(state)=> {
    return {
        data: state.fetch
    }
}

export default connect(mapStateToProps, {fetchData: actions.fetchData})(Main);