//1.Import area
import { Component } from "react";
import ComponentS from "./ComponentS";


//2.class Component Defination area
export class ComponentR extends Component{
    render(){
        //every function should return something
        return(
            <div className="comp-r">
                <div className="comp-r-child">
                    <img 
                    src="https://www.hindustantimes.com/res/images/ht-logo.svg"
                    alt="HINT"
                    className="ht-logo"
                    />
                    <img 
                    src="https://www.hindustantimes.com/static-content/1y/2021/footer-icons/mweb_button_svg.svg"
                    alt="HINT2"
                    />
                </div>
                <ComponentS />
            </div>
        )
    }
}


//3.export area

// 3.1 default export 
// 3.2 named export