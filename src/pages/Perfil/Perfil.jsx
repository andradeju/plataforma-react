import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { usuarios } from '../../data/usuarios';
import { Link } from "react-router-dom";

export function Perfil(){
    const params = useParams();
    const id = params.id;

    const usuario = usuarios.find(u => u.id === parseInt(id));

    return(
    <div className='perfil'>
        <h3>{usuario.nome}</h3>
        <br />
        <span>{usuario.idade}</span>
        <br />
        <span>{usuario.email}</span>
        <br />
        <Button variant='dark'/>
        <Link to='/usuarios'>Voltar</Link>
    </div>
    )
}