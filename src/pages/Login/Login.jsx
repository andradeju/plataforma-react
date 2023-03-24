import { Container, Form, InputGroup, Button, Toast, ToastContainer } from 'react-bootstrap';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { usuarios } from "../../data/usuarios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login(){

    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    function signin() {
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;
        const usuario = usuarios.find(u => (u.email === email && u.senha === senha));
        if (usuario) {
            navigate("/");
        }
        else {
            setShow(true);
        }
    }
    return (
        <Container className="offset-md-2 col-lg-5 col-md-12 offset-lg-4 offset-md-3">
        <div className="login row mx-md-n10 col py-3 px-md-5 border bg-light mt-4">
            <h2>Login</h2>
    <Form className="panel-heading border bg-white mx-md-n5" action="login_script" method='POST'>
    <Form.Group  controlId="formBasicEmail">
        <Form.Label className="pt-3 font-weight-bold" >Email</Form.Label>
        <InputGroup>
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control type="email" placeholder="Digite seu email" />
            <Form.Text className="text-muted">
            </Form.Text>
        </InputGroup>
    </Form.Group>
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Digite sua senha" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Lembrar-me" />
    </Form.Group>
    <Button className="mx-1" variant="primary" type="submit" onClick={signin}>
        Entrar
    </Button>
    <Button className="button-form mx-2" variant="outline-primary" block>
                    <FaGoogle /> 
                </Button>
                <Button className="button-form" variant="outline-primary" block>
                    <FaFacebook />
                </Button>
                <div className="d-flex flex-column">
                <p className="mt-3">
                    Não tem uma conta ainda? </p>
                    <p>
                    <a href="#">Registre-se aqui.</a>
                    </p>
                </div>
    </Form>
    <ToastContainer position="bottom-end" className="pb-3">
                <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                    <Toast.Header>
                        <strong>E-mail ou senha inválido!</strong>
                    </Toast.Header>
                    <Toast.Body>Verique o e-mail e senha digitado.</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
        </Container>
    )
}