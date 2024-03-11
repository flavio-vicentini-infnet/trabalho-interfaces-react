import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function inserirCliente(novoCliente) {
    // to do para próximo módulo
}

export async function buscarPizzas() {
    let lista;
    await getDocs(collection(db, "pizzas")).then((querySnapshot) => {
        console.log(querySnapshot);
        lista = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
    });

    return lista;
}
