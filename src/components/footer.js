import React, { Component } from 'react';
import {ctxConsumer} from '../index'
class Footer extends Component
{
 
    createalert()
    {
        alert("hello you clicked me");
    }

    state =
    {
        name: "Chahat",
        age: 35
    }

   
    
    changed = env =>
    {
        this.setState({name: env.target.value});
        console.log(this.state.name);
    }
    render()
    {
      
        const animals =['cat','dog','horse']
        return(
            <React.Fragment>
                <h2 onClick={ this.createalert }>
            {this.props.trademark }
            </h2>
            <input value = {this.state.name} onChange={this.changed} type = "text" />
            { this.state.age == 35? "yes" : "no"}
            {animals.map( animal=> {
                return(
                    <div key = {animal}>
                        <h1>{animal}</h1>
                    </div>
                );

                     })}
                
           

            
            </React.Fragment> 
        );
        
    }
}


export default Footer