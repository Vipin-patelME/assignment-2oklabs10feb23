//1.Import area
import { Component } from "react";


//2.class Component Defination area
export class ComponentL extends Component{
    render(){
        //every function should return something
        return(
            <div>
                <h2 className="head-2">TECHNOLOGY</h2>
                <p className="details">Bill Gates thinks ChatGPT will change the world. Here's why</p>
                <button 
                className="view-all" 
                type="button">
                    View All---
                </button>
            </div>
        )
    }
}


//3.export area

// 3.1 default export 
// 3.2 named export