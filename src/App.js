//import area
import ComponentA from './components/ComponentA';
import { ComponentD } from './components/ComponentD';
import ComponentE from './components/ComponentE';
import ComponentF from './components/ComponentF';
import ComponentG from "./components/ComponentG";
import { ComponentR } from './components/ComponentR';
import { ComponentY } from './components/ComponentY';
import ComponentZ from './components/ComponentZ';
import './App.css';
 
//functional Component defination area
function App() {
  //every function should return something
  return (
    <div className='main-comp'>
      <h1 className='main-head'>Today we are going to build website by using React Function And Class Components</h1>
      <ComponentA />
      <ComponentD />
      <ComponentE />
      <ComponentF />
      <ComponentG />
      <ComponentR />
      <ComponentY />
      <ComponentZ />
    </div>
  );
}

export default App;
