import React, {Component} from 'react';
import "./Weatherform.css";
import Weathermessage from './Weathermessage';

class Weatherform extends Component
{
    constructor(props) {
        super(props);
        this.handleSubmit1 = this
            .handleSubmit1
            .bind(this);
        this.state={showMessage:false}
    }
    handleSubmit1(e) {
        e.preventDefault();
        var location = this.refs.location.value;
        if (location.length > 0) {
            this.refs.location.value="";
            this.props.handleSubmit(location);
            this.setState({showMessage:true});
        }
    }
    render() {
        return (
            <div>
                <h2 className="weatherheader">Get Weather</h2>
                <form onSubmit={this.handleSubmit1}>
                    <input type="text" placeholder="Enter the name of the city" ref="location"/>
                    <button type="submit">Submit</button>
                </form>
                 {/* if(this.state.showMessage) */}
                <Weathermessage temp={this.props.temp} location={this.props.location}/>
                
            </div>
        );
    }

}

export default Weatherform;