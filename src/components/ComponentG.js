//1.Import area
import { ComponentH } from "./ComponentH";
import { ComponentI } from "./ComponentI";
import ComponentJ from "./ComponentJ";
import { ComponentK } from "./ComponentK";
import { ComponentL } from "./ComponentL";
import { ComponentM } from "./ComponentM";
import { ComponentN } from "./ComponentN";
import ComponentO from "./ComponentO";
import ComponentP from "./ComponentP"
import { ComponentQ } from "./ComponentQ";


//2.Function Component Defination area
const ComponentG = ()=>{
    //every function should return something
    return(
        <div className="comp-g">
            <div className="comp-g-1">
                <h1 className="new-head">Latetst News</h1>
                <hr className="horizontal" />
                <h2 className="head-2">Education</h2>
                <p className="details">JKPSC CCE Mains 2022 Admit card releasing today at jkpsc.nic.in, how to download</p>
                <hr className="horizontal" />
                <ComponentH />
                <hr className="horizontal" />
                <ComponentJ />
                <hr className="horizontal" />
                <ComponentK />
                <hr className="horizontal" />
                <ComponentL />
                <hr className="horizontal" />




            </div>
            <div className="comp-g-2">
                <h1 className="new-head" >Top News</h1>
                <div className="child-cont">
                    <hr className="horizontal" />
                    <h2 className="head-2">'Misconceived': SC junks plea to ban BBC in India over Modi documentary</h2>
                    <p>India News Updated 33 mins ago</p>
                    <img 
                        src="https://www.hindustantimes.com/ht-img/img/2023/02/10/550x309/bbc_film_on_pm_modi_gujarat_riots_muslims_1674700302841_1676016767637_1676016767637.jpg" 
                        alt="pm"
                        className="news-image" 
                    />
                </div>
                <hr className="horizontal" />
                <ComponentI />
                <hr className="horizontal" />
                <ComponentO />
                <hr className="horizontal" />
                <ComponentQ />


            </div>
            <div className="comp-g-3">
                <p>advertisement</p>
                <img 
                src="https://pbs.twimg.com/media/FmQHuj0XgAANm6I?format=jpg&name=small" 
                alt="FARZI"
                className="advertisememnt"
                />
                <hr className="horizontal" />
                <ComponentM />
                <hr className="horizontal" />
                <ComponentN />
                <hr className="horizontal" />
                <ComponentP />

            </div>
        </div>
    )
}


//3.export area

// 3.1 default export
export default ComponentG; 
// 3.2 named export