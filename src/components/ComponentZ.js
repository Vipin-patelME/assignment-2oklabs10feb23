//1.Import area
import { Component } from "react";


//2.class Componet Defination area
class ComponentZ extends Component{
    render(){
        //every function should return something
        return(
            <div>
                <textarea className="test-area" cols= "100" rows="20">Write Youre Feed Back Here:-</textarea>
                <button
                    type="button"
                    className="feedback-btn">
                        Submit
                    </button>
            </div>
        )
    }
}


//3.export area

// 3.1 default export 
export default ComponentZ;
// 3.2 named export