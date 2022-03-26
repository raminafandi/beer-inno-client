import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detailed from './pages/Detailed';
import { useAppDispatch } from './redux';
import { getAsyncBeers } from './redux/slices/beersSlice';

function App() {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getAsyncBeers());
  }, [])
  return (
    <div className="App">
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detailed />} />
      </Routes>
    </div>
  );
}

export default App;
