import { Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css';
import ShowData from './components/ShowData';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowData/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
