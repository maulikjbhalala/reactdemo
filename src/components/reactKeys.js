import {React} from 'react-dom';
import { Component }  from 'react';


class assignKey extends React.Component
{

constructor()
{
    super();
    this.state=
    {
        data:[
            {
                name:'maulik',
                id:5
            },
            {
                name:'uttam',
                id:6
            }
        ]

    }
}



render()
    {
        let {data}=this.state;
        return(
            <div> {data.map((dynamic,i)=>
            {
                <assignChild key = {i} componentData = {dynamic}/>
 

            })};
                
            </div>
        )
    }
};

class assignChild extends React.Component{

    render()
    {
        return(
            <div>
                <h4>
                {this.props.componentData.name}
                </h4>
                <h4>
                {this.props.componentData.id}
                </h4>
            </div>
        )
    }

};


export default assignKey;