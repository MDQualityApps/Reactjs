import React, { Component } from 'react'

class Counter extends Component {

constructor(props) {
    super(props)

    this.state = {
         Counter: 0
    }
}

Increment()
{
    this.setState(
       //object
        {
            Counter:this.state.Counter+1
        //update console
        },() =>{
            console.log('callback value',this.state.Counter)
        }
    )
    console.log(this.state.Counter)
}

    incrementfive()
        {
this.Increment()
this.Increment()
this.Increment()
this.Increment()
this.Increment()
this.Increment()
        }
    
        
    


    render() {
        return (
        <div>
        <div>counter-{this.state.Counter}</div>

        <button onClick= {() => this.incrementfive()}>INCREMENT</button> 
        </div>
  )
 
      
            
       
    }
}

export default Counter
