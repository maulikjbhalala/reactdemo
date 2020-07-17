import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class consumeAPI extends Component
{

    state=
    {
        emps:[]
    };

    getDataFromApi()
    {
        fetch('http://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((result)=>
        {
            console.log(result);
            this.setState({
                emps:result
            });
        });

    }

    componentWillMount()
    {
       this.getDataFromApi();
    };



  //   render()
  //   {
  //       let {emps}=this.state;

        
  //       return <div> 
  //     {
  //     emps.map(ob=>
  //   <div>
     
  //    <h5 style={{color:'brown'}}> Id is: 
  //     {ob.id}
  //   </h5>

  //   <h5 style={{color:'green'}}> Name is: 
  //     {ob.name}
  //   </h5>

  //   <h5 style={{color:'blue'}}> Phone is: 
  //     {ob.phone}
  //   </h5>

  //   <h5 style={{color:'red'}}> Username is: 
  //     {ob.username}
  //   </h5>

  //       <hr></hr>
   
  //  </div>
  //   )
  //   }
  
  //   </div>
  // }



  render() {
    let {emps}=this.state;
    return (
      // <div class="container">
      //   <div class="panel panel-default">
      //     <div class="panel-heading">
      //       <h3 class="panel-title">
      //         <center><blink>Users</blink></center>
      //       </h3>
      //     </div>
      //     <div class="panel-body">
      //       {/* <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add Book</Link></h4> */}
      //       <table  strcellPadding='12' style={{color:'green'}} class="table table-stripe">
      //         <thead>
      //           <tr style={{color:'black'}}> 
      //             <th >Id</th>
      //             <th>Username</th>
      //             <th>Name</th>
      //             <th>Phone</th>
      //           </tr>
      //         </thead>
      //         <tbody>
      //           {emps.map(user =>
      //             <tr style={{color:'green'}}>
      //               {/* <td><Link to={`/show/${user._id}`}>{user.name}</Link></td> */}
      //               <td>{user.id}</td>
      //               <td>{user.username}</td>
      //               <td>{user.name}</td>
      //               <td>{user.phone}</td>
      //             </tr>
      //           )}
      //         </tbody>
      //       </table>
      //     </div>
      //   </div>
      // </div>

      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
   
    {emps.map(user =>
                  <tr style={{color:'green'}}>
                  {/* <td><Link to={`/show/${user._id}`}>{user.name}</Link></td> */}
                  <td>{user.id}</td>
                   <td>{user.name}</td>
                   <td>{user.username}</td>
                   <td>{user.phone}</td>
                 </tr>
                )}
      {/* <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td> */}
    
    
  </tbody>
</table>
    );
  }



    }

    
   






export default consumeAPI;
