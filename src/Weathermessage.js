import React,{ Component } from 'react';

class Weathermessage extends Component {
    render(){
        return(
            <div  style={{textAlign:"center"}}>
                <h3>It's {this.props.temp} in {this.props.location}</h3>
            </div>
        );
    }
}

export default Weathermessage;
