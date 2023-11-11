import { useContext } from "react";
import { UserContext } from "./UserContext";
import RegisterAndLoginForm from "./RegisterAndLoginForm";

export default function Routes() {
    const {username, id} = useContext(UserContext);
    
    if (username) {
        return `logged in Mr ${username}, yeah science! `;
    }

    return (
        <RegisterAndLoginForm />
    )
}