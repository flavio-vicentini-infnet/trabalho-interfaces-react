import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export async function inserirPedido(novopedido) {
    const docRef = await addDoc(collection(db, "pedidos"), novopedido);
    return docRef.id;
}

export async function buscarPedidos() {
    let lista;
    await getDocs(collection(db, "pedidos")).then((querySnapshot) => {
        console.log(querySnapshot);
        lista = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
    });

    return lista;
}
