//1.Import area
import { ComponentT } from "./ComponentT";
import { ComponentU } from "./ComponentU";
import ComponentV from "./ComponentV";
import { ComponentW } from "./ComponentW";
import ComponentX from "./ComponentX";


//2.functional Component Defination area
const ComponentS = ()=>{
    //every function should return something
    return(
        <div>
            <h3 className="comp-s-head">Subscribe to out best Newsletters</h3>
            <div className="comp-s">
                <div className="comp-s-sum-cont">
                    <select className="Sele-ele">
                        <option>HT Daily Capsule</option>
                        <option>HT WKND Capsule</option>
                        <option>@HT Week Ahead</option>
                        <option>HT City</option>
                        <option>HT Weekend</option>
                        <option>HT Capital letters</option>
                        <option>HT Daily News</option>
                    </select>
                    <input 
                    type="text" 
                    placeholder="Enter Email Address"
                    className="Sele-ele"
                    />
                    <button 
                    type="button"
                    className="sub-btn">
                        SUBSCRIBE
                    </button>
                </div>
                <ComponentT />
            </div>
            <hr className="horizontal" />
            <div className="para-cont">
                <ComponentU />
                <ComponentV />
                <ComponentW />
                <ComponentX />
            </div>
        </div>
    )
}


//3.export area

// 3.1 default export 
export default ComponentS;

// 3.2 named export