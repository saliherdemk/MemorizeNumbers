import React,{Component} from "react";
import'./memorizePI.css'
//#d1d0c5

const PI1 = 4159265358979323
const PI2 = 8462643383279502
const PI3 = 884197169399375
const PI4 = 105820974944592
const PI5 = 307816406286
const PI6 = 20899862803
const PI7 = 48253421170679

const arr1 = PI1.toString().split("")
const arr2 = PI2.toString().split("")
const arr3 = PI3.toString().split("")
const arr4 = PI4.toString().split("")
const arr5 = PI5.toString().split("")
const arr6 = PI6.toString().split("")
const arr7 = PI7.toString().split("")

const absarr = arr1.concat(arr2,arr3,arr4,arr5,arr6,arr7)

class MemorizePI extends Component{
    state={
        aim: 1,
        score:0,
        current: null
    }

    handleChange = (e) =>{
        this.setState({

            current: (e.target.value)
        }, () => {
            console.log(absarr)
        
            if(this.state.aim == this.state.current){
                console.log(this.state.aim)
                console.log(e.target.value)
            } else{
                alert("asd")
                console.log(this.state.current)
            }
            
            this.setState({
                aim: (parseFloat(this.state.aim + absarr.shift().toString()))
            })

        })
        
        
        
    }
    
    render(){
        return(
            <>
            <input onChange={this.handleChange}className="inpPI" type="text" name="name"></input>
            <h1>{this.state.current}</h1>
            
            </>
            
        )

    }


    
}


export default MemorizePI


