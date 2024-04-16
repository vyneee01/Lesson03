import logo from './logo.svg';
import './App.css';
import NNV_EventFrom1 from './Components/NNV_EventFrom1';
import NNV_EventFrom2 from './Components/NNV_EventFrom2';
import NNV_EventFrom3 from './Components/NNV_EventFrom3';
import NNV_EventFrom4 from './Components/NNV_EventFrom4';

function App() {
  return (
    <div className="App">
      <h1>Event From Demo</h1>
      <NNV_EventFrom1/>
      <NNV_EventFrom2/>
      <NNV_EventFrom3/>
      <NNV_EventFrom4 name="Nguyễn Ngọc Vỹ"/>
    </div>
  );
}

export default App;
