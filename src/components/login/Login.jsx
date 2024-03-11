import { logarUsuario } from "../../infra/usuarios";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login({ user, setUser }) {
    console.log(1, setUser);
    console.log(2, user);

    let handleChange = (event) => {
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        setUser((actualUser) => {
            console.log(3, actualUser);

            const userInfos = {
                ...actualUser,
                [fieldName]: fieldValue,
            };

            console.log(4, userInfos);

            return userInfos;
        });
    };

    let handleLogin = (event) => {
        console.log(`Tentando logar: `, user);
        logarUsuario(user, setUser);
    };

    return (
        <Form action="/layout" style={{ margin: "200px" }}>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Digite seu email"
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="senha">Senha</Form.Label>
                <Form.Control
                    type="password"
                    name="senha"
                    placeholder="Insira sua senha"
                    onChange={handleChange}
                />
            </Form.Group>
            <Button
                as="input"
                type="button"
                value="Entrar"
                onClick={handleLogin}
            />{" "}
        </Form>
    );
}
