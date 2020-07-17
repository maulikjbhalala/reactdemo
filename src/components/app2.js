import React, { Component, useState } from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App2 extends Component {
//     state={
//       count:0
//     };
    
  
//     incrCount=()=> {
//       this.sclass App2 extends Component {
//     state={
//       count:0
//     };
    
  
//     incrCount=()=> {
//       this.setState({
//             count:this.state.count+1
//            });
//   }

//   render() {
//     return (
//         <div>
//             button is pressed  <p ><button onClick={this.incrCount}>{this.state.count} times </button></p>   
//          </div>
//     );
//   }
// }

//use of react hooks - convert class component into function component.
let App2=()=>
{

  let [count,setCount]=useState(0);

  let increCount=()=>
  {

    setCount(count+1);
  };
    return (
            <div>
                button is pressed  <p ><button onClick={increCount}>{count} times </button></p>   
             </div>
        );

};

export default App2
