import React from 'react';
import axios from 'axios';

export default class ShippingInfo extends React.Component{
    constructor(props){
        super(props);
        this.state ={
           usersInfo:[]
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3000/getUsersInfo')
        .then((response)=>{
            console.log(response.data);
            this.setState({
               usersInfo: response.data
            })
        })
        .catch(function(error){
            console.log(error);
        });
    }
    render(){
        return(
            <div>
                <h1>Users Shipping Information: </h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th>first_name</th>
                            <th>last_name</th>
                            <th>street</th>
                            <th>ﬂoor</th>
                            <th>apartment</th>
                            <th>zip_code</th>
                            <th>city</th>
                            <th>email_address</th>
                            <th>phone_number</th>
                            <th>special_notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.usersInfo.map((x,idx)=><tr key={idx}>
                            <td>{x.first_name}</td>
                            <td>{x.last_name}</td>
                            <td>{x.street}</td>
                            <td>{x.ﬂoor}</td>
                            <td>{x.apartment}</td>
                            <td>{x.zip_code}</td>
                            <td>{x.city}</td>
                            <td>{x.email_address}</td>
                            <td>{x.phone_number}</td>
                            <td>{x.special_notes}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
      );
    }
}
