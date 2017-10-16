import React from 'react';
import axios from 'axios';

import Input from "./input";

export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            formArr:[
                        "first_name",
                        "last_name",
                        "street", "ﬂoor", "apartment", 
                        "zip_code", 
                        "city", 
                        "email_address", 
                        "phone_number",
                        "special_notes"
                    ],
            first_name:"",
            last_name:"",
            street:"", ﬂoor:"", apartment:"", 
            zip_code:"", 
            city:"", 
            email_address:"", 
            phone_number:"",
            special_notes:""
        };
    }
    myInputChanged(y,inputName){
        this.setState({
            [inputName]: y
        });
    }
    submitForm(e){
        
        e.preventDefault();
        const{first_name,last_name,street, ﬂoor, apartment, 
            zip_code,city,email_address,phone_number,special_notes }=this.state;
        const data={
            first_name:first_name,
            last_name:last_name,
            street:street, 
            ﬂoor:ﬂoor, 
            apartment:apartment, 
            zip_code:zip_code, 
            city:city, 
            email_address:email_address, 
            phone_number:phone_number,
            special_notes:special_notes
        };
    
        axios.post('http://localhost:3000/saveUserInfo',data)
            .then((response)=>{
               console.log(response);
            })
            .catch(function(error){
                console.log(error);
            });
    }

    render(){
        return(
            <div>
                <h1>Sipping Information: </h1>
                <form className="form-horizontal" onSubmit={(e)=>this.submitForm(e)} >
                    {this.state.formArr.map((x,idx)=> <Input key={idx} Name={x} onChange={(y,x)=>this.myInputChanged(y,x)} />)}
                    <div className="form-group"> 
                        <div className="col-sm-offset-2 col-sm-10">
                            <input type="submit" value="send" className="btn btn-default" />
                        </div>
                    </div>
                </form>
            </div>
           );
    }
        
}