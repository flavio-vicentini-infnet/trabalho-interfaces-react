import { useEffect, useState } from "react";
import { buscarPedidos } from "../infra/pedidos.js";
import ListaPedidos from "../components/pedidos/ListaPedidos";

export default function Pedidos() {
    const [pedidos, setPedidos] = useState([]);
    const [pedidoId, setPedidoId] = useState("");

    useEffect(() => {
        async function fetchData() {
            let lista = await buscarPedidos();
            console.log(lista);
            setPedidos(lista);
        }

        fetchData();
    }, [pedidoId]);

    return (
        <div>
            <h2>Pedidos</h2>
            <ListaPedidos Pedidos={pedidos} />
        </div>
    );
}
