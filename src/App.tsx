import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';
import Main from './view/Main';
import Meteorological from './view/Meteorological';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route>
          {/* 인터페이스 */}
          <Route path="/map" element={<Main />} />
          {/* API 구글 맵 */}
          <Route path="/" element={<Meteorological />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
