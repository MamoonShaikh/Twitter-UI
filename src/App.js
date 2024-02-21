import './App.css';
import SecFirst from './components/Sec_first';
import SecLast from './components/Sec_last';
import SecMid from './components/Sec_mid';


function App() {
  return (
   <div className='flex container mx-auto  invert'>
    < SecFirst/>
    <SecMid/>
    <SecLast/>
   </div>
   
  );
}

export default App;
