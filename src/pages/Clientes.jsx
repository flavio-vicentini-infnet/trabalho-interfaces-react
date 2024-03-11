import { useEffect, useState } from "react";
import FormNovoCliente from "../components/clientes/FormNovoCLiente";
import ListaClientes from "../components/clientes/ListaClientes";
import { buscarClientes } from "../infra/clientes";

export default function Clientes() {
    const [clientes, setClientes] = useState([]);
    const [clienteId, setClienteId] = useState("");

    useEffect(() => {
        async function fetchData() {
            let lista = await buscarClientes();
            console.log(lista);
            setClientes(lista);
        }

        fetchData();
    }, [clienteId]);

    return (
        <div>
            <h2>Clientes</h2>
            <FormNovoCliente setClienteId={setClienteId} />
            <ListaClientes clientes={clientes} />
        </div>
    );
}
