import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";

import { postQuestion } from "../../../redux/actions/questionsActions";

import FormM1Tags from "./FormTags/FormM1Tags";
import FormM2Tags from "./FormTags/FormM2Tags";
import FormM3Tags from "./FormTags/FormM3Tags";
import FormM4Tags from "./FormTags/FormM4Tags";

import Classes from "./PostFormMui.module.css";
import InputForm from "./StylesForm/InputForm";
import { NameDiv } from "./StylesForm/styles";
import InputFormArea from "./StylesForm/InputFormArea";
import { useHistory, Link } from "react-router-dom";
import home from "./StylesForm/home.svg"

const PostFormMui = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.userReducer.user);


  //! ------------------------- CheckBoxes-----------------------
  const [moduleSelected, setModuleSelected] = useState("selectModule");

  const [m1TagsSelected, setM1TagsSelected] = useState(false);
  const [m2TagsSelected, setM2TagsSelected] = useState(false);
  const [m3TagsSelected, setM3TagsSelected] = useState(false);
  const [m4TagsSelected, setM4TagsSelected] = useState(false);

  const handleOnChange = (e) => {
    setModuleSelected(e.target.value);

    setModulo({
      ...modulo,
      [e.target.name]: e.target.value,
    });
  };

  const makeCheckboxesModule = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const renderResult = () => {
    let result;
    moduleSelected === "selectModule"
      ? (result = "")
      : (result = makeCheckboxesModule(moduleSelected));
    return result;
  };

  useEffect(() => {
    moduleSelected === "M1"
      ? setM1TagsSelected(true)
      : setM1TagsSelected(false);
    moduleSelected === "M2"
      ? setM2TagsSelected(true)
      : setM2TagsSelected(false);
    moduleSelected === "M3"
      ? setM3TagsSelected(true)
      : setM3TagsSelected(false);
    moduleSelected === "M4"
      ? setM4TagsSelected(true)
      : setM4TagsSelected(false);
  }, [moduleSelected]);
  //! ------------------------- CheckBoxes-----------------------

  //? ------------------------- FORM - 'NUEVA IMPLEMENTACIÓN' -----------------------

  const [title, setTitle] = useState({ field: "", validate: null });
  const [description, setDescription] = useState({ field: "", validate: null });
  const [modulo, setModulo] = useState({ field: "" });
  const [tag, setTag] = useState({ tags: [] });

  const [validate, setValidate] = useState(null);

  const handleSubmit = (e) => {

    e.preventDefault();
    if (
      title.validate === "true" &&
      description.validate === "true"
    ) {
      setValidate(true);
      dispatch(
        postQuestion(
          {
            title: title.field,
            message: description.field,
            module: modulo.field,
            tag: tag.tags,
          },
          user.id
        )
      );

      history.push("/questions");


    } else {
      setValidate(false);
    }
  };

  return (
    <div className={Classes.layout}>
      <Casita>
        <Link to='/questions'>
          <img
            alt="home"
            src={home}
          />
        </Link>
      </Casita>
      <Formulario onSubmit={handleSubmit}>
        <div className={Classes.container}>
          <h1 className={Classes.h1}> Pregúntame algo... </h1>
          <NameDiv>
            <InputForm
              type="text"
              state={title}
              changeState={setTitle}
              name="title"
              placeholder="Pregunta..."
              label="Pregunta"
              error="Tu pregunta debe llevar más de 10 caracteres."
              regularExpresion={/^[a-zA-ZÀ-ÿ\s?.,0-9]{4,100}$/}
            />
          </NameDiv>

          {/* <InputForm
            // type="url"
            state={code}
            changeState={setCode}
            name="code"
            placeholder="Imagen de tu código..."
            label="Imagen de código"
            error="Muéstranos una imagen sobre tu problema."
            regularExpresion={/(https?:\/\/.*\.(?:png|jpg))/i}
          /> */}
          <InputFormArea
            state={description}
            changeState={setDescription}
            name="description"
            placeholder="Describe tu pregunta..."
            label="Descripción y Código"
            error="Háblanos sobre tu problema"
            regularExpresion={/^[a-zA-ZÀ-ÿ:<|&*>\s?.,0-9]{20,800}$/}
          />
        </div>

        <div className={Classes.selectModules}>
          <label className={Classes.labelModule}>
            Module selected{" "}
            <span className={Classes.slec}>{renderResult()} </span>

            <Seleccionador
              onChange={handleOnChange}
              value={moduleSelected}
              name="field"
            >
              <option value={"selectModule"}>MODULES</option>
              <option value={"M1"}>M1</option>
              <option value={"M2"}>M2</option>
              <option value={"M3"}>M3</option>
              <option value={"M4"}>M4</option>
            </Seleccionador>
          </label>
        </div>

        {m1TagsSelected && <FormM1Tags setTag={setTag} tag={tag} />}
        {m2TagsSelected && <FormM2Tags setTag={setTag} tag={tag} />}
        {m3TagsSelected && <FormM3Tags setTag={setTag} tag={tag} />}
        {m4TagsSelected && <FormM4Tags setTag={setTag} tag={tag} />}

        <Send
          type="submit"
          onClick={handleSubmit}
        >
          Enviar
        </Send>

        {validate === true && (<Success>Pregunta correctamente posteada, redireccionando a home</Success>)}
        {validate === false && (<NoSuccess>Rellena bien los campos, crack</NoSuccess>)}
      </Formulario>

    </div>
  );
};

export default PostFormMui;

const colores = {
  inputPurple: "#413A66",
  error: "#f66060",
  succes: "#71ff4a52",

};

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  width: 580px;
  align-items: center;
  text-align: center;
  margin: 10px;
  padding: 20px;
  background-color: white;
  border-radius: 35px;
  border: solid 1px black;
  /* box-shadow: 0px 0px 20px rgba(14, 29, 65,0.2); */
  margin-left: 20px;
  margin-right: 20px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const Seleccionador = styled.select`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    margin-top: 5px;
    padding: 10px;
    border: 2px solid gray;
    color: gray;
    cursor: pointer;
    background: #fff;
    border-radius: 4px;
    font-size: 14px;
    transition: 0.3s ease all;
    &:hover{
        box-shadow: 3px 0px 40px rgba(0,0,0,0.2);
    }
    &:focus{
        border: 2px solid ${colores.inputPurple};
        outline: none;
        box-shadow: 3px 0px 30px rgba(0,0,0,0.2);
    }
    ${props => props.valid === 'true' && css`
        border: 2px solid gray;
    `}
    ${props => props.valid === 'false' && css`
        border: 2px solid ${colores.error} !important;
    `}
`
const Send = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 40px;
    text-align: left;
    
    padding: 10px;
    width: 80%;
    border: 2px solid gray;
    color: white;
    cursor: pointer;
    background: #413A66;
    border-radius: 4px;
    font-size: 14px;
    transition: 0.3s ease all;
   
    &:hover{
        box-shadow: 3px 0px 40px rgba(0,0,0,0.2);
        transform: scale(1.1,1.1);
    }
    &:focus{
        border: 2px solid ${colores.inputPurple};
        outline: none;
        box-shadow: 3px 0px 30px rgba(0,0,0,0.2);
    }
    ${props => props.valid === 'true' && css`
        border: 2px solid gray;
    `}
    ${props => props.valid === 'false' && css`
        border: 2px solid ${colores.error} !important;
    `}
`
const Success = styled.img`
  font-size: 20px;
  background: ${colores.succes};
  color: #141414;
  padding: 15px 30px;
  font-weight: bold;
  border-radius: 5px;
`;

const Casita = styled.button`
position: static;

background-color: transparent;
border: transparent;
border-radius: 4px;
text-decoration: none;
  &:hover{
        box-shadow: 3px 0px 40px rgba(0,0,0,0.2);
        transform: scale(1.1,1.1);
        transition: 500ms;
    }
    &:focus{
        border: 2px solid ${colores.inputPurple};
        outline: none;
        box-shadow: 3px 0px 30px rgba(0,0,0,0.2);
    }
`

const NoSuccess = styled.p`
  font-size: 20px;
  background: ${colores.error};
  color: #141414;
  padding: 15px 30px;
  font-weight: bold;
  border-radius: 5px;
`