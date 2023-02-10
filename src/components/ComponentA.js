//1.Import area
import { ComponentB } from './ComponentB';
import './index.css'


//2.Function Defination area
const ComponentA = () =>(
    <div className = "CompA">
        <img 
        src="https://www.hindustantimes.com/res/images/ht-logo.svg"
        alt="HT" 
        className='ht-logo'
        />
        <ComponentB />
    </div>
)


//3.export area

// 3.1default export 
export default ComponentA;
// 3.2named export