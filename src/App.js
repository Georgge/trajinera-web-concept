import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Home from './pages/Home';
import './App.css';
import store from './store/store'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
