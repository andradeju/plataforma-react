import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import { Blog } from './pages/Blog/Blog';
import { Contato } from './pages/Contato/Contato';
import { Login } from './pages/Login/Login';
import { Usuarios } from './pages/Usuarios/Usuarios';
import { NotFound } from './pages/NotFound/NotFound';
import { Root } from './pages/Root/Root';
import { Section } from './components/Section/Section';
import { EditaUsuario } from './pages/EditaUsuario/EditaUsuario';
import { Perfil } from './pages/Perfil/Perfil';
import { Pokemon } from './pages/Pokemon/Pokemon';
import { SuperHerois } from './pages/SuperHerois/SuperHerois';
import { CadastroEletronicos } from './pages/CadastroEletronicos/CadastroEletronicos';

const sections = [
  {
    title: "Section 1",
    description: "Essa é a Seção 1, Bem vindos!!" 
  },
  {
    title: "Section 2",
    description: "Essa é a Seção 2, Bem vindos!!" 
  },
  {
    title: "Section 3",
    description: "Essa é a Seção 3, Bem vindos!!" 
  }
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Root />}>
            <Route path='/' element={<Home/>}>
              <Route path='1' element={<Section title={sections[0].title} description={sections[0].description} />}/>
              <Route path='2' element={<Section title={sections[1].title} description={sections[1].description} />}/>
              <Route path='3' element={<Section title={sections[2].title} description={sections[2].description} />}/>
            </Route>
            <Route path='/blog' element={<Blog />}/>
            <Route path='/contato' element={<Contato />} />
            <Route path='/usuarios' element={<Usuarios />} />
            <Route path='/usuario/edit/:id' element={<EditaUsuario />} />
            <Route path='/usuario/perfil/:id' element={<Perfil />} />
            <Route path='/login' element={<Login />} />
            <Route path='/pokemon' element={<Pokemon />} />
            <Route path='/superherois' element={<SuperHerois />} />
            <Route path='/cadastroeletronicos' element={<CadastroEletronicos />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
