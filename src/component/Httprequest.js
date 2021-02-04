import React, { Component } from 'react'

class Httprequest extends Component {
       
    componentDidMount()
    {
        fetch("sdalj").then((response)=>{
            console.log(response);
        }).catch(error=>{
            console.log(error)
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}



export default Httprequest
