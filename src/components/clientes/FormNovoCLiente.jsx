import React from "react";
import { useForm } from "react-hook-form";
import { inserirCliente } from "../../infra/clientes";

export default function FormNovoCliente({ setClienteId }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    async function submeterDados(dados) {
        let id = await inserirCliente(dados);
        setClienteId(id);
        reset();
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit(submeterDados)}>
                    <label className="formLabel" htmlFor="nome">
                        Nome
                    </label>
                    <input
                        size={30}
                        {...register("nome", {
                            required: "Nome do cliente é obrigatório",
                            validate: {
                                minLength: (value) =>
                                    value.length >= 3 ||
                                    "Nome do cliente deve ter pelo menos 3 caracteres",
                            },
                        })}
                    />
                    <br />

                    <label className="formLabel" htmlFor="cpf">
                        CPF
                    </label>
                    <input
                        size={30}
                        {...register("cpf", {
                            required: "CPF é obrigatório",
                            validate: {
                                minLength: (value) =>
                                    value.length == 11 ||
                                    "CPF tem que ter 11 dígitos",
                                matchPattern: (value) =>
                                    /^[0-9]+$/g.test(value) ||
                                    "CPF não pode conter caracteres que não sejam dígitos",
                            },
                        })}
                    />
                    <br />
                    <button type="submit">cadastrar</button>
                </form>
            </div>
            <div className="errorsContainer">
                {errors.nome?.message && <div>{errors.nome.message}</div>}
                {errors.cpf?.message && <div>{errors.cpf.message}</div>}
            </div>
        </>
    );
}
