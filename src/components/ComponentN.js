//1.Import area
import { Component } from "react";


//2.Class Component Defination area
export class ComponentN extends Component{
    render(){
        //every function should return something
        return(
            <div className="comp-n">
                <h5>Aamna Sharif speaks of ‘breathing dreams’ in a pastel green ruched gown</h5>
                <div>
                    <img 
                    src="https://www.hindustantimes.com/ht-img/img/2023/02/09/550x309/a_1675945716849_1675945746308_1675945746308.jpg" 
                    alt="actress"
                    className="comp-n-img" 
                    />
                </div>
            </div>
        )
    }
}


//3.export area

// 3.1 default export 
// 3.2 named export