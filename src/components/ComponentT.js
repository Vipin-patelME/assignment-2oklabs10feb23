//1.Import area
import { Component } from "react";


//2.class omponent Defination area
export class ComponentT extends Component{
    render(){
        //every function should return something
        return(
            <div className="comp-t">
                <img src="https://www.hindustantimes.com/static-content/1y/2021/footer-icons/fb-logo.svg" alt="facebook" />
                <img src="https://www.hindustantimes.com/static-content/1y/2021/footer-icons/in-logo.svg" alt="linkdin" />
                <img src="https://www.hindustantimes.com/static-content/1y/2021/footer-icons/instagram.svg" alt="instagram" />
                <img src="https://www.hindustantimes.com/static-content/1y/2021/footer-icons/tw-logo.svg" alt="twitter" />
            </div>
        )
    }
}


//3.export area

// 3.1 default export 
// 3.2 named export