import './App.css';
import DragNDrop from './components/DragNDrop';
import data from './server.js'


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <DragNDrop data={data}/>
      </header>
    </div>
  );
}

export default App;
