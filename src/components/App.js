import React, { Component } from 'react';
import axios from 'axios'
import loading from './loading'


class App extends Component {

  //creare the constructor
  constructor(props)
  {
    super(props);
    //create state to store local data 
    this.state={
      data:[],
      loading:false
    }
    //bind any method 
    this.onButtonClick=this.onButtonClick.bind(this)
  }




  //separate the axios  api call using function
  getEmployees()
  {
    this.setState({
      loading:true
    })

    let {data,loading}=this.state;

    axios('http://dummy.restapiexample.com/api/v1/employees').then((respo)=>
    {
     this.setState({
        data:[...data,...respo.data.data], //this means on the click of the button state data and fetching data are merge
        loading:false
      })
      console.log(this.state.data.length)
    }).catch((error) => {
      console.log(error);
    })
  }


  //handle button click function
  onButtonClick(e)
 {
  e.preventDefault();  //setting it to prevent defualt it will stop refreshing page on button click.
  this.getEmployees();
 }



  //react life cycle method to call the API's.
  componentWillMount()
  {
   this.getEmployees();
  }



  render() {
    let {loading,data}=this.state;
    return <div> 
        <form style={{color:'red'}} onSubmit={this.onButtonClick}>
      <input type='submit' value='Fetch Data'/>
    </form>
      <hr></hr>
      {!loading ?
      data.map(ob=>
    <div>
     
     <h5 style={{color:'brown'}}> Id is: 
      {ob.id}
    </h5>
    <h5 style={{color:'black'}}> Name is:
      {ob.employee_name}
    </h5>
    <h5 style={{color:'red'}}> Age is:
      {ob.employee_age}
    </h5>
    <h5 style={{color:'blue'}}> Salary is:
      {ob.employee_salary}
    </h5>
   
   </div>
    ):'loading data'
    }
    <div>
      {loading}
    </div>
    </div>
  }
}

export default App;