// import React, { useState } from "react"
// import { Link } from "react-router-dom"
// import { useSelector } from "react-redux"

// import {
//     Formulario,
//     Label,
//     Select,
//     NameDiv,
//     ActivitiesDiv,
//     CheckInput,
//     ErrorDiv,
//     Button,
//     ButtonCenter,
//     ButtonHome,
//     Success,
//     HomeDiv
// } from "./styles";
// import Clases from "./FormActivity.module.css"
// import InputForm from "./InputForm";


// const CreatingCountry = () => {
 
//     const state = useSelector(state => state);
//     const { activities, subregions, continents } = state;

//     const [name, setName] = useState({ field: "", validate: null })
//     const [flag, setFlag] = useState({ field: "", validate: null })
//     const [capital, setCapital] = useState({ field: "", validate: null })
//     const [googleMaps, setGoogleMaps] = useState({ field: "", validate: null })
//     const [code, setCode] = useState({ field: "", validate: null })
//     const [area, setArea] = useState({ field: null, validate: null })
//     const [population, setPopulation] = useState({ field: null, validate: null })
//     const [formulario, setFormulario] = useState({ continent: "", subregion: "", activities: [] })

//     const [validate, setValidate] = useState(null)

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         if (area.validate === 'true' &&
//             population.validate === 'true' &&
//             code.validate === 'true' &&
//             name.validate === 'true' &&
//             flag.validate === 'true' &&
//             capital.validate === 'true' &&
//             googleMaps.validate === 'true' &&
//             formulario.continent &&
//             formulario.subregion) {
//             setValidate(true)
           

//         } else {
//             setValidate(false)
//         }
//     }

//     const handleChange = e => {
//         setFormulario({
//             ...formulario,
//             [e.target.name]: e.target.value
//         })
//     }

//     const handleChecked = e => {
//         if (e.target.checked) {
//             setFormulario({
//                 ...formulario,
//                 activities: [...formulario.activities, e.target.value]
//             })
//         }
//     }


//     return (
//         <div className="formActDiv">


//             <div className="container">
//                 <Formulario onSubmit={handleSubmit}>
//                     <NameDiv>
//                         <InputForm
//                             type="text"
//                             state={name}
//                             changeState={setName}
//                             name="name"
//                             placeholder="name..."
//                             label="Name"
//                             error="Type 4 to 40 characters, only letters"
//                             regularExpresion={/^[a-zA-ZÀ-ÿ\s]{4,40}$/}
//                         />
//                     </NameDiv>
//                     <InputForm
//                         type="url"
//                         state={flag}
//                         changeState={setFlag}
//                         name="flag"
//                         placeholder="image url..."
//                         label="Flag image"
//                         error="Insert an image url"
//                         regularExpresion={/(https?:\/\/.*\.(?:png|jpg))/i}
//                     />
                  
//                     <div>
//                         <Label
//                             htmlFor="subregion"
//                         >
//                             Subregion
//                         </Label>
//                         <Select name="subregion" id="subregion" onChange={e => handleChange(e)}>
//                             <option>--Select Subregion--</option>
//                             {subregions?.map(s => {
//                                 return (
//                                     <option key={s} value={s}>
//                                         {s}
//                                     </option>
//                                 )
//                             })}
//                         </Select>
//                     </div>
//                     <InputForm
//                         type="text"
//                         state={capital}
//                         changeState={setCapital}
//                         name="capital"
//                         placeholder="capital..."
//                         label="Capital"
//                         error="Type 4 to 40 characters, only letters"
//                         regularExpresion={/^[a-zA-ZÀ-ÿ\s]{4,40}$/}
//                     />
                   
//                     <NameDiv>
//                         <Label>Activities</Label>
//                         <ActivitiesDiv>
//                             {activities?.map(a => {
//                                 return (
//                                     <label
//                                         key={a.name}
//                                         className="label"
//                                     >
//                                         <CheckInput
//                                             type="checkbox"
//                                             name={a.name}
//                                             value={a.name}
//                                             onChange={e => handleChecked(e)}
//                                         />
//                                         {a.name}
//                                     </label>
//                                 )
//                             })}
//                         </ActivitiesDiv>
//                     </NameDiv>
//                     {
//                         validate === false &&
//                         <ErrorDiv>
//                             <p>
//                                 <ion-icon name="warning-outline"></ion-icon>
//                                 <b>Error:</b> Please complete the form correctly!
//                             </p>
//                         </ErrorDiv>
//                     }
//                     <ButtonCenter>
//                         <Button type="submit"><ion-icon name="chevron-up-circle-outline"></ion-icon>Save</Button>
//                         {
//                             validate === true &&
//                             <Success>Successfully saved, redirecting to home</Success>
//                         }
//                     </ButtonCenter>
//                     <HomeDiv>
//                         <Link to="/home"><ButtonHome><ion-icon name="home-outline"></ion-icon>Home</ButtonHome></Link>
//                     </HomeDiv>
//                 </Formulario>
//             </div>
//         </div>
//     )
// }

// export default CreatingCountry