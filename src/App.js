import { Route, Routes } from 'react-router-dom';
import './App.css';
import Edituser from './components/Edituser';
import Myform from './components/Myform';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Myform />} />
        <Route path='/edit' element={<Edituser/>}/>
      </Routes>
    </div>
  );
}

export default App;
