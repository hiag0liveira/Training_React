import { useContext } from "react";
import UserContext from "../contexts/UserContext";

// Componente que utiliza o contexto
const UserInfo = () => {
    const user = useContext(UserContext);

    return (
        <div>
            <h2>Informações do Usuário:</h2>
            <p>Nome: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserInfo;