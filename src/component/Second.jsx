import React, { Component } from 'react';

class Second extends Component {
    
    componentDidUpdate() {
        console.log("Props from Second", this.props.secondData);
    }

    render() {
        
        return(
            <div>
                Second
            </div>
        )
    }
}

export default Second;