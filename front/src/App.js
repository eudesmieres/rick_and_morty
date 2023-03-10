import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { useDispatch, useSelector } from 'react-redux';
// import { getCharacter } from './redux/actions/actions';

//import styles from './components/Card.module.css'

function App() {
  // const dispatch = useDispatch();
  // const allCharacters = useSelector(state => state.allCharacters);

  const location = useLocation();
  const navigate = useNavigate();

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = 'eumieres.consol@gmail.com';
  const password = 'henry23';

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true)
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate('/')
  }, [access])



  const onSearch = (character) => {
    fetch(`http://localhost:3001/rickandmorty/onsearch/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname === '/' ? <Form login={login} /> : <Nav onSearch={onSearch} />}
      <Routes>
        <Route path='home' element={<Cards onClose={onClose}
          characters={characters} />} />
        <Route path='about' element={<About />} />
        <Route path='detail/:detailId' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App
