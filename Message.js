import React, { Component } from 'react';

class Message extends Component
{
    constructor(){
        super()
        this.state={
            message: 'Welcome vistors'
        }
    }
    changeMssage(){
        this.setState(
            {
                message: 'thanks for subcribes'
            }
            )
    }
    render(){
        
        return(
            <div>
            <h1>{this.state.message}</h1>
        <button onClick= { () => this.changeMssage()}>subcribes</button>
        </div>

        )
        
    }
}
export default Message