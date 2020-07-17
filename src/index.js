import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import App2 from './app2';
import './index.css';
// import Form from './formLoad';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
import ApiFetch from './components/fetchApi';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import AppRoute from './appRoute';

// import Demo from './demoComponent';
// import ReactKey from './reactKeys';

//App Component
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

//App2 component

// ReactDOM.render(
//   <App2 />,
//   document.getElementById('root')
// );


// form loading component
// ReactDOM.render(
//   <Form />,
//   document.getElementById('root')
  
// );

//Api fetch component
ReactDOM.render(
<ApiFetch/>,document.getElementById('root')
);


//api fetch using 'fetch'  
// ReactDOM.render( <BrowserRouter>
//    <ApiFetch/>
// </BrowserRouter>,document.getElementById('root'))


//props component
// ReactDOM.render(<AppRoute data='mj'/>,document.getElementById('root'))

//component lifecycle mwethods
// ReactDOM.render(<Demo/>,document.getElementById('root'))

//react keys component
// ReactDOM.render(<ReactKey/>,document.getElementById('root'))