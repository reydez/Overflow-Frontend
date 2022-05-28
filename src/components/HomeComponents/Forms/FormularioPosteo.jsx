import React, { useState, useEffect } from "react";


import { getTags } from '../../../redux/actions/tags'
import { getModules } from '../../../redux/actions/module'

import FormInput from "./formInput/FormInput";
import "./formularioPosteo.css";

import { useDispatch } from "react-redux";

const FormularioPosteo = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTags());
    dispatch(getModules());
  })

  const [values, setValues] = useState({
    title: "",
    description: "",
    code: "",
    module: [],
    tag: []
  });

  const inputs = [
    {
      id: 12,
      name: "title",
      type: "text",
      placeholder: "Title",
      errorMessage: "You need a title for your question",
      label: "Title",
      required: true,
    },
    {
      id: 22,
      name: "code",
      type: "text",
      placeholder: "code",
      errorMessage: "We need some code to understand your problem",
      label: "code",
      required: true,
    },
    {
      id: 32,
      name: "description",
      type: "text",
      placeholder: "Description",
      errorMessage: "Maybe you can be more specific, could you tell us something about your problem?",
      label: "Description",
      required: true,
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };


  return (
    <div className="form-post">
      <form onSubmit={handleSubmit}>
        <h1>Ask me something...</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormularioPosteo;
