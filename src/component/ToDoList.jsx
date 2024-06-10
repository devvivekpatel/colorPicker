import { Component } from "react"; 

export default class ToDoList extends Component{

  constructor(props){
    super(props)

    this.state={arr:'',}

    // localStorage.setItem("name",this.state.name);
    // sessionStorage.setItem("state","MadhyaPradesh")

    }
 
          componentDidMount(){
            let fetching = async ()=>{
                try{
            
                    const data = await fetch("https://api.weatherapi.com/v1/forecast.json?key=c2a623add98448cfa4272716240806&q=India&days=4&aqi=no")
                    const response = await data.json();
                    console.log(response)
                    this.setState({arr:response})
                    console.log("users are", this.state.arr)
                }
            
                catch(error){
                    console.log(error)
                }
            }
            
            fetching();
             }


  

  render(){
    return(
      <>
      
        <table className="border-2 border-black">
         <thead className="border-2 border-black">
          <th>Country</th>
          <th>Region</th>
          <th>Name</th>
          <th>Temperature</th>
          <th>Fahrenheit</th>
          <th></th>
   
         </thead>


         <tbody>


       {
        this.state.arr &&(
          <tr>
             <td className="">{this.state.arr.location.country}</td>
             <td className="">{this.state.arr.location.region}</td>
            <td className="">{this.state.arr.location.name}</td>
            <td className="">{this.state.arr.current.temp_c}</td>
            <td className="">{this.state.arr.current.temp_f}</td>
          </tr>
        )
       }
         </tbody>
        </table>

      

      
      </>
    )
  }
}