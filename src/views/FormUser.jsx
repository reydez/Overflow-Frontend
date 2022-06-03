import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginGit } from "../redux/actions/loginGit";

export default function FormUser() {
  const dispatch = useDispatch()
  

  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const { logout } = useAuth0();
  const history = useHistory()

  // SE DEBE REALIZAR UN POST A http://localhost:3001/users,
  // COMO REQ.BODY SE DEBE ENVIAR LA INFORMACION OBTENIDA EN "user"
  // ESE REQUEST DEVOLVERA UN TOKEN PARA QUE EL USUARIO PUEDA NAVEGAR EN LA PAGINA
  // console.log(user)
  const clickPut = () => {
    console.log(user)
    dispatch(loginGit(user))
    // history.push("/questions")
  }
  return (
    <div>
      {isAuthenticated? 
      <>
      {/* <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div> */}
      <button onClick={() => logout({returnTo: window.location.origin})}>Log Out</button>
      <button onClick={clickPut}>Intro page</button>
      </>
      :
      <button onClick={() => loginWithRedirect()}>Log In</button>
      }
    </div>
  );
}
