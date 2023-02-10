//1.Import area
import { Component } from "react";


//2.class Component Defination area
class ComponentP extends Component {
    render(){
        //every function should return somrthing
        return(
            <div className="comp-i child-cont ">
            <div>
                <h5>Australia's Todd Murphy ends 141-yr-old wait with debut fifer vs India in BGT
                    Australian bowler Todd Murphy during the 2nd day of the 1st Test cricket match between India and Australia(PTI)
                </h5>
                <p>Published on Feb 10, 2023 04:26 PM IST</p>
            </div>
            <img 
                src="https://www.hindustantimes.com/ht-img/img/2023/02/09/148x111/raman-choudhary-oWKGxZoYLQs-unsplash_1675947048489_1675947132344_1675947132344.jpg" 
                alt="ModiNarendra" 
            />
        </div>
        )
    }
}


//3.export area

// 3.1 default export 
export default ComponentP;
// 3.2 named export