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
  }, [dispatch])
  return (
    <div className="App">
      <Routes >
        <Route path="/beer-inno-client" element={<Home />} />
        <Route path="/beer-inno-client/beers/:id" element={<Detailed />} />
      </Routes>
    </div>
  );
}

export default App;
