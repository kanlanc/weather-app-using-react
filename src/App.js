import React, {Component} from 'react';
import './App.css';
import Navbar from './Navbar';
import Weatherform from './Weatherform';
import About from './About';
import Contact from './Contact';
import Switch from 'react-router-dom/Switch';
import {Route} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      location: "",
      url:""
    };
    this.handleSubmit = this
      .handleSubmit
      .bind(this);
  }
  handleSubmit(location)
  {
    var url = "api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=4cba8b4ac30acee92104c447316a4939.json";

    this.setState({url,location})
    

  }

  componentDidMount(){
    fetch(this.state.url)
    // .then(data=>(data.json()))
      .then(data => {
        console.log(data);
        console.log(data.main);
      // var temp = data.main.temp;
      // this.setState({temp})
    });

  }
  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (<Weatherform
            {...props}
            temp={this.state.temp}
            location={this.state.location}
            handleSubmit={this.handleSubmit}/>)}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
