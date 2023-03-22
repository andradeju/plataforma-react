import { Container, Form, InputGroup, Button } from 'react-bootstrap';


export function Login(){
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
    <Button className="mb-3" variant="primary" type="submit">
        Entrar
    </Button>

    </Form>
        </div>
        </Container>
    )
}