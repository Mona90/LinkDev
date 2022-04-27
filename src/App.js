// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewsListing from './Pages/NewsListing';
import NewsDetails from './Pages/NewsDetails'
import { createContext, useState } from 'react';
// import Slides from './Components/Slides/Slides';
 export const dataContext = createContext([])
function App() {
  const [data, setData] = useState([])
  return (
    <BrowserRouter className="App">
      <dataContext.Provider value={{data,setData}}>
          <Routes>
          {/* <Route index path='/' element={<Slides/>}/> */}

              <Route  path='/' element={<HomePage/>}/>
              <Route path='/news-listing' element={<NewsListing/>}/>
              <Route path='/news-details/:id' element={<NewsDetails/>}/>
          </Routes>
      </dataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
