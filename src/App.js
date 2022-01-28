import logo from './logo.svg';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import CharactersPage from './Components/Pages/CharactersPage/CharactersPage';
import HomePage from './Components/Pages/HomePage/HomePage';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import LocationPage from './Components/Pages/LocationPage/LocationPage';

function App() {
  return (
    <BrowserRouter>
        <Header>
          <Header/> 
        </Header>

        <Routes>
          <Route path='/'>
            <Route index element={<HomePage/>}/>
            <Route path="characters" element={<CharactersPage/>}/>
            <Route path="Location" element ={<LocationPage/>}/>

            <Route path='*' element= {<h1>There is nothing here...</h1>}/>
          </Route>
        </Routes>
        <Footer>
          <Footer/>
        </Footer>    
    </BrowserRouter>
  );
}

export default App;
