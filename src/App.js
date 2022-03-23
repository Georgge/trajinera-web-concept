import {Route, BrowserRouter, Routes} from 'react-router-dom'
import Home from './pages/Home';
import './App.css';
import store from './store/store'
import {Provider} from "react-redux";

function App() {

  return (
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Home />} />
              </Routes>
          </BrowserRouter>
      </Provider>
  );
}
export default App;
