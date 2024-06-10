import { Component } from "react";

export default class SignIn extends Component{
    constructor(props){
        super(props)

        this.state={name:"", password:"",arr:[]}

     

    }

    componentDidMount(){
        let newArr = JSON.parse(localStorage.getItem("name"));
        console.log(newArr,"fdlkfjdlk")
        this.setState({arr:newArr})
    }

    check=(e)=>{
     e.preventDefault();
     
     let cat = this.state.arr.filter((value)=>{

        return value.name === this.state.name && value.password === this.state.password
     })
     
     if(cat.length>=1){
        alert("user is present")
     }
     else{
        alert("user is not present")
     }
     
    }

    render(){
        return(

            <div className="h-1/2  w-full flex justify-center items-start mt-10 ">
            <form className="flex flex-col w-80  gap-3 bg-slate-300   p-5">
              Name: <div><input type="text" className="w-60 "onChange={(e)=> this.setState({name:e.target.value})} /> </div>
              Password: <div><input type="password" className="w-60" onChange={(e)=>this.setState({password:e.target.value})} /></div>
              <button type="submit" className="w-36 h-10 bg-blue-600" onClick={this.check}>Submit</button>
            </form>
            
            </div>
         
        )
    }
}