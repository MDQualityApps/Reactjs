import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';

class App extends Component {
  render() {
    return(
<div className="App">
  <Counter />
  {/*<Message />*/}
 {/*<Greet name = "arun"  heroname="superman">
<p>his is children props</p>
</Greet> 
<Greet name = "kumar" heroname="batmman" /> 
<button>ACTION</button>
<Greet name = "ramesh" heroname="man" /> 
 <Welcome name = "arun"  heroname="superman"/> }
    <Welcome name = "kumar" heroname="batmman"  />*/}
</div>
    );
  }
}

export default App;
