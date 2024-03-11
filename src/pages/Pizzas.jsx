import { useEffect, useState } from "react";
import Listapizzas from "../components/pizzas/ListaPizzas";
import { buscarPizzas } from "../infra/pizzas";

export default function pizzas() {
    const [pizzas, setpizzas] = useState([]);
    const [pizzaId, setpizzaId] = useState("");

    useEffect(() => {
        async function fetchData() {
            let lista = await buscarPizzas();
            console.log(lista);
            setpizzas(lista);
        }

        fetchData();
    }, [pizzaId]);

    return (
        <div>
            <h2>pizzas</h2>
            <Listapizzas pizzas={pizzas} />
        </div>
    );
}
