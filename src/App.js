import './App.css';
import DragNDrop from './components/DragNDrop';
import CadLot from './page/CadLot';
import data from './server'


function App() {

  return (
    <div>
      {/* <DragNDrop data={data}/> */}
      <CadLot/>
    </div>
  );
}

export default App;
