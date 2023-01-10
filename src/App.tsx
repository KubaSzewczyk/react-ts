import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home/Home'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/page/1" />} />
          <Route path='/page/:id' element={<Home />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
