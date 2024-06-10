import { Component } from "react";


export default class LocalStorage extends Component{

  constructor(props){
    super(props)

    this.state = {ar:[], data:"",pass:""}
  }

  getName=(event)=>{
 this.setState({data:event.target.value})
  }

  getPass=(event)=>{
    this.setState({pass:event.target.value}) 
  }

  check=(event)=>{
    event.preventDefault();

    if((this.state.data!=='') && (this.state.pass!==''))
{
  
      this.setState(
        {ar:[...this.state.ar,{
        name:this.state.data,
        password:this.state.pass
      }]
    },
    ()=>{
        localStorage.setItem("name",JSON.stringify(this.state.ar));
        this.setState({data:'',pass:''})
    }
)
  }

  }

  componentDidMount(){
let newArr = JSON.parse(localStorage.getItem("name"));
if(newArr){
    this.setState({ar: newArr})
}
  }
  
  render(){

    return(

      <>
      <div className="h-1/2  w-full flex justify-center items-start mt-10 ">

    
      <form className="flex flex-col w-80  gap-3 bg-red-300   p-5">
        Name: <div><input type="text" className="w-60" onChange={this.getName} value={this.state.data}/> </div>
        Password: <div><input type="password" className="w-60" onChange={this.getPass} value={this.state.pass}/></div>
        <button type="submit" className="w-36 h-10 bg-blue-600"  onClick={this.check}>Submit</button>
      </form>
      
      </div>
      

      <div className="h-screen w-full border-2 border-black mt-5">

{
  this.state.ar &&  this.state.ar.map((ar,index)=>{
    console.log(ar)

    return <div>
      <p key={index}>Your name is {ar.name}</p>
      <p key={index}>Your password is {ar.password}</p>
    </div>
  })
}

{/* {
    this.state.ar && this.state.ar.map((ar,index)=>{
        if(ar.name === this.state.data){
            if(ar.password === this.state.pass)
            alert("yes")
        }
    })
} */}


      </div>
      
      </>
    )
  }
}