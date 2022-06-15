import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import styled, { css } from "styled-components";
import { postQuestion } from "../../../redux/actions/questions";
import FormM1Tags from "./FormTags/FormM1Tags";
import Classes from "./PostFormMui.module.css";
import InputForm from "./StylesForm/InputForm";
import { NameDiv } from "./StylesForm/styles";
import InputFormArea from "./StylesForm/InputFormArea";
import { useHistory } from "react-router-dom";
import { getModules } from "../../../redux/actions/module";
import axios from "axios";

const PostFormMui = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.userReducer.user);
  const allModules = useSelector((state) => state.modulesReducer.modules);
  const [checked, setChecked] = useState([]);
  const [tag, setTag] = useState({ tags: [] });

  allModules.sort((a, b) => {
    const valueA = a.name;
    const valueB = b.name;
    return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
  });

  //! ------------------------- CheckBoxes-----------------------
  const [moduleSelected, setModuleSelected] = useState("selectModule");

  const handleOnChange = (e) => {
    setModuleSelected(e.target.value);

    //* formulario de back
    setModulo({
      ...modulo,
      [e.target.name]: e.target.value,
    });
    //* formulario de back
    setChecked([]);
    setTag({ tags: [] });
  };

  //? Escribir
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
    dispatch(getModules());
  }, [dispatch]);
  //! ------------------------- CheckBoxes-----------------------

  //? ------------------------- FORM - 'NUEVA IMPLEMENTACIÓN' -----------------------

  const [title, setTitle] = useState({ field: "", validate: null });
  const [description, setDescription] = useState({ field: "", validate: null });
  const [modulo, setModulo] = useState({ field: "" });

  const [validate, setValidate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      title.validate === "true" &&
      description.validate === "true" &&
      modulo.field &&
      tag.tags.length < 3
    ) {
      setValidate(true);
      dispatch(
        postQuestion(
          {
            title: title.field,
            message: description.field,
            module: modulo.field,
            tag: tag.tags.map((t) => t.name),
          },
          user.id
        )
      );

      for (let i = 0; i < tag.tags.length; i++) {
        axios
          .put(`http://localhost:3001/tags/mas-uno/${tag.tags[i].id}`)
          .then((res) => {
            console.log("");
          });
      }

      setTimeout(() => {
        history.push("/questions");
      }, 2000);
    } else {
      setValidate(false);
    }
  };

  return (
    <div className={Classes.layout}>
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
              <option>MODULES</option>
              {allModules.map((module) => {
                return <option>{module.name}</option>;
              })}
            </Seleccionador>
          </label>
        </div>

        {moduleSelected && (
          <FormM1Tags
            setTag={setTag}
            moduleSelected={moduleSelected}
            tag={tag}
            checked={checked}
            setChecked={setChecked}
          />
        )}

        {!user.isBanned ? (
          <Send type="submit" onClick={handleSubmit}>
            Enviar
          </Send>
        ) : null}

        {validate === true && (
          <Success>
            Pregunta correctamente posteada, redireccionando a home
          </Success>
        )}
        {validate === false && (
          <NoSuccess>Rellena bien los campos, crack</NoSuccess>
        )}
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
  &:hover {
    box-shadow: 3px 0px 40px rgba(0, 0, 0, 0.2);
  }
  &:focus {
    border: 2px solid ${colores.inputPurple};
    outline: none;
    box-shadow: 3px 0px 30px rgba(0, 0, 0, 0.2);
  }
  ${(props) =>
    props.valid === "true" &&
    css`
      border: 2px solid gray;
    `}
  ${(props) =>
    props.valid === "false" &&
    css`
      border: 2px solid ${colores.error} !important;
    `}
`;
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
  background: #413a66;
  border-radius: 4px;
  font-size: 14px;
  transition: 0.3s ease all;

  &:hover {
    box-shadow: 3px 0px 40px rgba(0, 0, 0, 0.2);
    transform: scale(1.1, 1.1);
  }
  &:focus {
    border: 2px solid ${colores.inputPurple};
    outline: none;
    box-shadow: 3px 0px 30px rgba(0, 0, 0, 0.2);
  }
  ${(props) =>
    props.valid === "true" &&
    css`
      border: 2px solid gray;
    `}
  ${(props) =>
    props.valid === "false" &&
    css`
      border: 2px solid ${colores.error} !important;
    `}
`;
const Success = styled.div`
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
  &:hover {
    box-shadow: 3px 0px 40px rgba(0, 0, 0, 0.2);
    transform: scale(1.1, 1.1);
    transition: 500ms;
  }
  &:focus {
    border: 2px solid ${colores.inputPurple};
    outline: none;
    box-shadow: 3px 0px 30px rgba(0, 0, 0, 0.2);
  }
`;

const NoSuccess = styled.p`
  font-size: 20px;
  background: ${colores.error};
  color: #141414;
  padding: 15px 30px;
  font-weight: bold;
  border-radius: 5px;
`;
