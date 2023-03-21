import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Menu } from './components/Menu/Menu';
import { Blog } from './pages/Blog/Blog';
import { Contato } from './pages/Contato/Contato';
import { Home } from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/contato' element={<Contato />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
