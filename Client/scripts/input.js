import React from 'react';
import axios from 'axios';

export default class Input extends React.Component{
    constructor(props){
        super(props);
        this.state ={
           value:"" 
        }
    }
    inputChanged(e){
        this.setState({
            value: e.target.value
        });
    }
    shouldComponentUpdate(nextProps, nextState){
        return this.state.value !== nextState.value;
    }
    componentDidUpdate(prevProps, prevState){
        //let validCity;
         if (this.props.Name==="city"){
//             const config = {
//                headers: {'Content-Type': 'application/json' }
//              };
              axios({
                method:'GET',
                url:`http://www.yaddress.net/api/Address?AddressLine1=&AddressLine2=`+this.state.value+`&UserKey=`,
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Control-Allow-Origin':'http://localhost:5000'
                }
             })
            .then((response)=>{
               console.log(response);
              // validCity =true;
               this.props.onChange(this.state.value,this.props.Name).bind(this);
            })
            .catch(function(error){
                console.log(error);
                //validCity =false;
            });
            //if(validCity){
                //this.props.onChange(this.state.value,this.props.Name);
            //}
        }else{
           this.props.onChange(this.state.value,this.props.Name); 
        } 
    }
    render(){
        let type="text";
        let required=false;
        this.props.Name==="email_address"? type="email": type="text";
        this.props.Name==="phone_number"?type="tel":type="text";
        this.props.Name==="phone_number"?required = true:required=false;
        const phoneRegEx = "^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$";
        let pattern= null;
        this.props.Name==="phone_number"?pattern = phoneRegEx:pattern=null;
        
        return(
             <div className="form-group">
                <label className="control-label col-sm-2" htmlFor={this.props.Name}> {this.props.Name}:</label>
                <div className="col-sm-10">
                    <input type={type} id={this.props.Name} name={this.props.Name} value={this.state.value} 
                    onChange={(e)=>this.inputChanged(e)} pattern={pattern}
                    required={required} className="form-control" />
                </div>
            </div>
        );
    }
}
// if (this.props.Name==="city"){
//            axios.get('https://www.yaddress.net/api/Address?AddressLine1=&AddressLine2='+this.state.value+'&UserKey=')
//            .then((response)=>{
//               console.log(response);
//            })
//            .catch(function(error){
//                console.log(error);
//            });
//        }