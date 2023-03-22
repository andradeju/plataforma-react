import { Button } from "react-bootstrap";
import { usuarios } from "../../data/usuarios";
import { useParams } from "react-router-dom";

export function EditaUsuario() {

    let params = useParams();
    let id = params.id;

    let usuario = usuarios.find(usuario => {
        return usuario.id === parseInt(id);
    });

    return(
        <div className="edita-usuario">
            <h2>{usuario.nome}</h2>
            <span>{usuario.email}</span>
            <br />
            <span>{usuario.idade} anos</span>
            <br />
            <Button variant="dark">Editar</Button>
        </div>
    )
}