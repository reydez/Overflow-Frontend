import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import bgLandingRocket from "../assets/bgLandingRocket.png"

function LandingPage() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <LandingDiv>
      <div className="backgroundLanding">      
        <div className="textContainer">
          <h3>Bienvenidos a</h3>
          <h1>Henry-Flow</h1>
          <p>
            Una página diseñada por y para alumnos de Henry
            <br></br>Podrás preguntar y resolver dudas junto a la comunidad
            <br></br>sobre código, en las tecnologías usadas en el Bootcamp
          </p>

          {isAuthenticated 
            ? ( <button>Ingresar a la página</button> ) 
            : ( <button onClick={ () => loginWithRedirect() }>Iniciar Sesión</button> )
          }
       </div>
      </div>
    </LandingDiv>
  );
}
export default LandingPage;


const LandingDiv = styled.div`
  background: linear-gradient(162.44deg, #EEE4FC 5.04%, rgba(242, 205, 248, 0.29) 65.08%, rgba(234, 218, 238, 0) 87.37%);
  
  .backgroundLanding {
    background-position: 75%;
    background-image: url(${ bgLandingRocket });
    height: 100vh;
    width: 100vw;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
  .textContainer {
    position: absolute;
    bottom: 50%;
    left: 45%;
    transform: translateX(-100%) translateY(40%);
    max-width: 40%;
    h3 {
      font-size: 2em;
      margin-bottom: 1px;
      color: #9599D5;
    }
    h1{
      margin-top:1px;
      font-size: 5em;
      color: #453851;
      margin-bottom: .1em;
    }
    p{
      margin-top: 1px;
      font-size: 1rem;
      color: #A8A3B5;
      line-height: 24px;
    }
  }
  button{
    border-radius: 1rem;
    border: none;
    font-size: 1rem;
    height: 2.2em;
    background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
    padding: 5px 15px;
    margin-top: 2rem;
    letter-spacing: .075em;
    cursor: pointer;
    :hover {
      color: #FAFAFA;
    }
  }
`
