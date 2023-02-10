//1.Import area
import { Component } from "react";



//2.Class Component Defination area
class ComponentF extends Component{
    render(){
        //evert function should return something
        return(
            <div className="comp-f">
                <img src = "https://www.hindustantimes.com/static-content/1y/2023/budget/lic@2x.png" alt="LIC" />
                <img src = "https://www.hindustantimes.com/static-content/1y/2023/budget/canara-hsbc@2x2.png" alt="Bank" />
                <img src = "https://www.hindustantimes.com/static-content/1y/2023/budget/airindia@2x.png" alt="AIR" />
                <img src = "https://www.hindustantimes.com/static-content/1y/2023/budget/acer@2x.png" alt="PC" />
                <img src = "https://www.hindustantimes.com/static-content/1y/2023/budget/tata-neu@2x.png" alt="Tata neu" />
            </div>
        )
    }
}


//3.export area

// 3.1 default export 
export default ComponentF;
// 3.2 named export