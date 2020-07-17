import React, { Component } from 'react';
// import Link from 'react-router-dom'

class appRoute extends Component{


    // render() {
    //     return (


    //       <div className="App">
    //         <header className="App-header">
    //           {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //           <h1 className="App-title">Welcome to React</h1>
    //         </header>
    //         <div className="menu">
    //             <ul>
    //               <li> <Link to="/">Home</Link> </li>
    //               <li> <Link to="/messages">Messages</Link> </li>
    //               <li> <Link to="/about">About</Link> </li>
    //             </ul>
    //         </div>
    //       </div>
    //     );
    //   }


    render()
    {
        return(
        <div>  <h2 style={{color:'green'}}> Hello  <p style={{color:'red'}}>{this.props.data}</p></h2> </div>
        )
    }

}

export default appRoute;