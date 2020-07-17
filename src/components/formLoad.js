import React, { Component } from 'react';
import ReactDom from 'react-dom';

class formLoading extends Component
{

    constructor()
    {
        super()
        this.state=
        {
            name:'',
            email:''
        }
    
        this.onEmailChange=this.onEmailChange.bind(this);
        this.onNameChange=this.onNameChange.bind(this);
        this.myButtonClick=this.myButtonClick.bind(this);

    }
  
    onEmailChange(e)
    {
        this.setState({
            email:e.target.value
        })
    }




    onNameChange(e)
    {
        this.setState({
            name:e.target.value
        })
    }



    myButtonClick()
    {

        this.setState({
            name:'',
            // email:''
        });

        //FINDING DOM Element  and
        ReactDom.findDOMNode(this.refs.myClick).focus();
    }



    render()
    {
        let {email,name}=this.state;
        return(
            <div> 
                <form>
                    <p>Name:</p>
                    <input type='text' name='Name' value={name} onChange={ this.onNameChange} ref='myClick'  placeholder='plase enter your name'></input>
                    <h4 style={{color:'red'}}> Name is: {name}</h4>
                    <br></br>
                    <p>Email:</p>
                    <input type='email' name='Email' value={email} onChange={this.onEmailChange}   placeholder='plase enter your email'></input>
                    <h4 style={{color:'blue'}}> Email is: {email}</h4>
                    <button onClick={this.myButtonClick} >click</button>
                    <br></br>
                    <br></br>
                </form>
            </div>
        )
    }
};


// class newClass extends Component{

//     render()
//     {
//         return(
//         <input type='text' value={this.props.myData} onChange={this.props.updateStateProp}><h4>{this.props.my}</h4></input>
//         )
//     }

// };

export default formLoading;