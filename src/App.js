import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Home from './pages/Home';
import './App.css';
import store from './store/store'
import {Provider} from "react-redux";
import Login from './pages/Login';

function App() {

  return (
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/Login' element={<Login/>} />
              </Routes>
          </BrowserRouter>
      </Provider>
  );
}
export default App;




