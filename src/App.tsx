import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import Header from './components/Header';
import Home from './components/Home';
import DetailPage from './components/Page/DetailPage';
import ActorsInform from './components/Page/ActorsInform';
import { useAppSelector } from './Hooks/useAppSelector';
import SearchResult from './SearchResult/SearchResult';

function App() {
    const {dark} = useAppSelector(s => s.DetailSlice)


  return (
    <div className="App" style={{
      color: dark ? "white": "",
      backgroundColor: dark ? "black": ""
    }}>
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular/" element={<Popular />} />
        <Route path="/topRated/" element={<TopRated />} />
        <Route path="/detailPage/:movieId" element={<DetailPage/>}/>
        <Route path='/actorsInform/:personId' element={<ActorsInform/>}/>
        <Route path='/informResult/:movieName' element={<SearchResult/>}/>
      </Routes>
    </div>
  );
}

export default App;
