//1.Import area
import { Component } from "react";
import './index.css'

//2.Class Component Defination area
export class ComponentD extends Component{
    render(){
        //every function should return something
        return(
            <div className="comp-d">
                <button className="comp-d-btn" type="button">Home</button>
                <button className="comp-d-btn" type="button">Latest News</button>
                <button className="comp-d-btn" type="button">World</button>
                <button className="comp-d-btn" type="button">Bhopal</button>
                <button className="comp-d-btn" type="button">Entertainment</button>
                <button className="comp-d-btn" type="button">Cricket</button>
                <button className="comp-d-btn" type="button">Lifestyle</button>
                <button className="comp-d-btn" type="button">Astrology</button>
                <button className="comp-d-btn" type="button">Editorials</button>
                <button className="comp-d-btn" type="button">For You</button>
                <button className="comp-d-btn" type="button">Shop Now</button>
            </div>
        )
    }
}


//3.export area

// 3.1 default export 
// 3.2 named export