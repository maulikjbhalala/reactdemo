import React from 'react';





class updateManually extends React.Component{


    constructor()
    {

        super();

        this.state={
            data:0
        };
        this.myClick=this.myClick.bind(this);
    };


    myClick()
    {
        this.forceUpdate();
        this.updateState();
    }


    updateState()
    {

        let {data}=this.state;
        this.setState(
            {
             data:data+1
            }
        )
    }


    render()
    {
        let {data}=this.state;
        return(
            <div>
                <button onClick={this.myClick}>Click Here</button>
                <Content myNumber = {data}></Content>
            </div>
        );
    }


};

class Content extends React.Component {
    componentWillMount() {
       console.log('Component WILL MOUNT!')
    }
    componentDidMount() {
       console.log('Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {    
       console.log('Component WILL RECIEVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
       return true;
    }
    componentWillUpdate(nextProps, nextState) {
       console.log('Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
       console.log('Component DID UPDATE!')
    }
    componentWillUnmount() {
       console.log('Component WILL UNMOUNT!')
    }
    render() {
       return (
          <div>
             <h3>{this.props.myNumber}</h3>
          </div>
       );
    }
 }

export default updateManually;