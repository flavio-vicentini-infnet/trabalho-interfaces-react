import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function inserirCliente(novoCliente) {
    const docRef = await addDoc(collection(db, "clientes"), novoCliente);
    return docRef.id;
}

export async function buscarClientes() {
    let lista;
    await getDocs(collection(db, "clientes")).then((querySnapshot) => {
        console.log(querySnapshot);
        lista = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
    });

    return lista;
}
