//1.Import area
import { Component } from "react";
import ComponentC from "./ComponentC";


//2.Class Component Defination area

export class ComponentB extends Component{
    render(){
        //every function should return something
        return(
            <div className="Comp-b">
                <div>
                    <button className="button-style">Games</button>
                    <button className="button-style" >E-Paper</button>
                    <button className="button-style">SignIn</button>
                </div>
                <ComponentC />
            </div>
        )
    }
}


//3.export area

// 3.1 default export 
// 3.2 named export