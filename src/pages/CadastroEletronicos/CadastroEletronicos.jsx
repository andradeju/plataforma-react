import { useForm } from "react-hook-form";
import { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import "./CadastroEletronicos.css";

export function CadastroEletronicos(){

    const {register, handleSubmit, formState: { errors }, reset} = useForm();
    const [produto, setProduto] = useState();

    function onSubmit(data) {
        let mensagem = `
            Modelo: ${data.modelo}
            Marca: ${data.marca}
            Nº Série: ${data.serie}
            Descrição: ${data.descricao}
            Data de Entrada: ${data.data}
            Previsão de Entrega: ${data.entrega}
            Status: ${data.status}

        `;
        alert(mensagem);
        setProduto(produto);
    }
    const onReset = () => {
        reset(); 
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)} onReset={onReset} noValidate>
            <div className="cadastro-wrapper">
            <h2 className="mt-3 text-center">Cadastro de Eletrônicos</h2>
            
            <Form.Group className="mb-3" controlId="modelo" >
                <Form.Label>Modelo</Form.Label>
                <Form.Control type="text"  className="input" {...register("modelo", { required: true, maxLength: 255})} />
                {errors.modelo && <Form.Text className="invalid">Digite um modelo válido!</Form.Text>}
            </Form.Group>
    
            <Form.Group className="mb-5" controlId="selecao-marca">
                <Form.Label>Marcas:</Form.Label>
                <Form.Select {...register("marca", {required: true})}>
                    <option value="">Selecione uma marca</option>
                    <option value={"ACER"}>ACER</option>
                    <option value={"APPLE"}>APPLE</option>
                    <option value={"ASUS"}>ASUS</option>
                    <option value={"DELL"}>DELL</option>
                    <option value={"FUJITSU"}>FUJITSU</option>
                    <option value={"GATEWAY"}>GATEWAY</option>
                    <option value={"HP"}>HP</option>
                    <option value={"IBM"}>IBM</option>
                    <option value={"SAMSUNG"}>SAMSUNG</option>
                    <option value={"Outros"}>Outros</option>
                </Form.Select>
                {errors.marca && <Form.Text className="invalid">Selecione uma marca!</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="serie">
                <Form.Label>Nº série</Form.Label>
                <Form.Control type="text" controlId="serie" {...register("serie", { required: true, min: 0 })} step="0.01" />
                {errors.serie && <Form.Text className="invalid">Digite um nº de série válido!</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="descricao">
                <Form.Label>Descrição do Problema</Form.Label>
                <Form.Control as="textarea" rows={3} {...register("descricao", {required: true, min: 0 })} step="0" className="input" />
                {errors.descricao && <Form.Text className="invalid">Por favor, descreva o problema.</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="data">
                <Form.Label>Data de Entrada</Form.Label>
                <Form.Control type="date" {...register("data", { required: true })} />
                {errors.data?.type === "required" && <Form.Text className="invalid">Por favor, preencha a data!</Form.Text>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="entrega">
                <Form.Label>Previsão de Entrega</Form.Label>
                <Form.Control type="date" {...register("entrega", { required: true })} />
                {errors.entrega?.type === "required" && <Form.Text className="invalid">Por favor, preencha a data!</Form.Text>}
            </Form.Group>
    
            <Form.Group className="mb-4" controlId="status">
                <Form.Label>Status:</Form.Label>
                <Form.Select {...register("status", {required: true})}>
                    <option value="">Selecione o status</option>
                    <option value={"EM REPARO"}>EM REPARO</option>
                    <option value={"AGUARDANDO PEÇAS"}>AGUARDANDO PEÇAS</option>
                    <option value={"TESTES FINAIS"}>TESTES FINAIS</option>
                    <option value={"PRONTO"}>PRONTO</option>
                </Form.Select>
                {errors.status && <Form.Text className="invalid">Selecione o status do produto!</Form.Text>}
            </Form.Group>
    
            <Button className="mx-1 mb-5" type="submit" variant="success">Cadastrar</Button>
            <Button className="mx-1 mb-5" type="reset" variant="secondary" onClick={reset}>Limpar</Button>
            </div>
        </Form>
        )
    }