import { useForm } from "react-hook-form";
import { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import "./SuperHerois.css";

export function SuperHerois(){
    const {register, handleSubmit, reset} = useForm();
    const [heroi, setHeroi] = useState();

    function onSubmit(heroi) {
        let mensagem = `
            Nome: ${heroi.nome}
            Poder: ${heroi.poder}
            Fraqueza: ${heroi.fraqueza}
            História: ${heroi.historia}
        `;
        alert(mensagem);
        setHeroi(heroi);
    }
    const onReset = () => {
        reset(); 
    }

    return (
    <Form onSubmit={handleSubmit(onSubmit)} onReset={onReset} noValidate>
        <div className="super-herois-wrapper">
        <h2 className="mt-1 text-white d-flex justify-content-center align-items-center flex-column">Cadastro Mundial de Super-Heróis</h2>
        <Form.Group  className="mb-2" controlId="nome">
            <Form.Label className="text-white">Nome</Form.Label>
            <Form.Control type="text" {...register("nome")} className="input" />
        </Form.Group>

        <Form.Group className="mb-2" controlId="poder">
            <Form.Label className="text-white">Poder</Form.Label>
            <Form.Control type="text" {...register("poder")} className="input" />
        </Form.Group>

        <Form.Group className="mb-2" controlId="fraqueza">
            <Form.Label className="text-white">Fraqueza</Form.Label>
            <Form.Control type="text" {...register("fraqueza")} className="input" />
        </Form.Group>

        <Form.Group className="mb-2" controlId="historia">
            <Form.Label className="text-white">História</Form.Label>
            <Form.Control as="textarea" rows={3} {...register("historia")} className="input" />
        </Form.Group>
            
        <Button className="mx-1" type="submit" variant="success">Cadastrar</Button>
        <Button type="reset" variant="secondary" onClick={reset}>Limpar</Button>
        </div>
    </Form>
    )
}