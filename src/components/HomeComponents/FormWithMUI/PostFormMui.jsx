import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { postQuestion } from "../../../redux/actions/questionsActions";

import FormM1Tags from "./FormTags/FormM1Tags";
import FormM2Tags from "./FormTags/FormM2Tags";
import FormM3Tags from "./FormTags/FormM3Tags";
import FormM4Tags from "./FormTags/FormM4Tags";

import Classes from "./PostFormMui.module.css";
import InputForm from "./StylesForm/InputForm";
import { NameDiv } from "./StylesForm/styles";
import InputFormArea from "./StylesForm/InputFormArea";

const PostFormMui = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer.user)

  //! ------------------------- CheckBoxes-----------------------
  const [moduleSelected, setModuleSelected] = useState("selectModule");

  const [m1TagsSelected, setM1TagsSelected] = useState(false);
  const [m2TagsSelected, setM2TagsSelected] = useState(false);
  const [m3TagsSelected, setM3TagsSelected] = useState(false);
  const [m4TagsSelected, setM4TagsSelected] = useState(false);

  const handleOnChange = (e) => {
    setModuleSelected(e.target.value);
    // console.log('Este es el name', e.target.name, 'Este es el value', e.target.value)

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
  const [code, setCode] = useState({ field: "", validate: null });
  const [modulo, setModulo] = useState({ field: "" });
  const [tag, setTag] = useState({ tags: [] });

  const [validate, setValidate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tag.tags.length > 2) {
      console.log("tienes más de 3");
      alert("Debes elegir menos de 3 tags");
    } else if (
      title.validate === "true" &&
      description.validate === "true" &&
      code.validate === "true"
      // modulo.validate === 'true' &&
    ) {
      setValidate(true);
      dispatch(
        postQuestion({
          title: title.field,
          message: description.field,
          // code: code.field,
          module: modulo.field,
          tag: tag.tags,
        }, user.id)
      );
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

          <InputForm
            // type="url"
            state={code}
            changeState={setCode}
            name="code"
            placeholder="Imagen de tu código..."
            label="Imagen de código"
            error="Muéstranos una imagen sobre tu problema."
            regularExpresion={/(https?:\/\/.*\.(?:png|jpg))/i}
          />
          <InputFormArea
            // type="textarea"
            state={description}
            changeState={setDescription}
            name="description"
            placeholder="Describe tu pregunta..."
            label="Descripción"
            error="Háblanos sobre tu problema"
            regularExpresion={/^[a-zA-ZÀ-ÿ\s?.,0-9]{20,400}$/}
          />
        </div>

        <div className={Classes.selectModules}>
          <label>
            Module selected{" "}
            <span className={Classes.slec}>{renderResult()} </span>
            <select
              className={Classes.selectInput}
              onChange={handleOnChange}
              value={moduleSelected}
              name="field"
            >
              <option value={"selectModule"}>MODULES</option>
              <option value={"M1"}>M1</option>
              <option value={"M2"}>M2</option>
              <option value={"M3"}>M3</option>
              <option value={"M4"}>M4</option>
            </select>
          </label>
        </div>

        {m1TagsSelected && <FormM1Tags setTag={setTag} tag={tag} />}
        {m2TagsSelected && <FormM2Tags setTag={setTag} tag={tag} />}
        {m3TagsSelected && <FormM3Tags setTag={setTag} tag={tag} />}
        {m4TagsSelected && <FormM4Tags setTag={setTag} tag={tag} />}

        <button className={Classes.button} type="submit">
          Enviar
        </button>

        {validate === true && (
          <Success>Successfully saved, redirecting to home</Success>
        )}
      </Formulario>
    </div>
  );
};

export default PostFormMui;

const colores = {
  inputPurple: "#413A66",
  error: "#f66060",
  succes: "#71ff4a",
};

const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  width: 580px;
  /* grid-template-columns: 1fr 1fr; */
  /* gap: 20px; */
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

const Description = styled.textarea`
  /* display: flex; */
  /* align-items: center; */
  /* text-align: center; */

  margin-top: 10px;
  flex-direction: column;
  width: 78%;
  border-radius: 4px;
  resize: none;
  border: 2px solid grey;
`;

const Success = styled.p`
  font-size: 20px;
  background: ${colores.succes};
  color: #141414;
  padding: 15px 30px;
  font-weight: bold;
  border-radius: 5px;
`;
