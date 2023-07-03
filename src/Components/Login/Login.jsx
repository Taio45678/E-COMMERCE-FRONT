import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { log_in } from "../../Redux/actions";

export default function Login() {
    const { loginWithRedirect, user } = useAuth0();

return(
    <div>
        <button onClick={() => loginWithRedirect()} >Log in</button>
    </div>
)
}