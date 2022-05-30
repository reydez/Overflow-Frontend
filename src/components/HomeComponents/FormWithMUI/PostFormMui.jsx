import React, { useState, useEffect } from "react";

import { getTags } from '../../../redux/actions/tags';
import { getModules } from '../../../redux/actions/module';
import { postQuestion } from '../../../redux/actions/questionsActions'
import FormInput from "./formInput/FormInput";

import Classes from "./PostFormMui.module.css";

import { useDispatch, useSelector } from "react-redux";


const PostFormMui = () => {
    const dispatch = useDispatch();
    const allTags = useSelector(state => state.tagsReducer.tags);

    const m1Tags = allTags.slice(0, 8)
    const m2Tags = allTags.slice(10, 32)
    const m3Tags = allTags.slice(33, 49)
    const m4Tags = allTags.slice(50, 57)


    useEffect(() => {
        dispatch(getTags());
        dispatch(getModules());
    }, [dispatch])


    const [values, setValues] = useState({
        title: "",
        description: "",
        code: "",
        module: "",
        tag: []
    });


    const handleSelect = (e) => {
        e.preventDefault();
        let tags = values.tag.filter(d => d === e.target.value)
        // console.log(e.target.value)
        // console.log(tags)
        if (tags.length === 0) {
            (e.target.value === 'Module')
                ? e.target.value = ""
                : setValues({
                    ...values,
                    tag: [...values.tag, e.target.value]
                })
        } else alert('Ya se agrego este tag')
    }


    const handleDelete = (element, option) => {
        if (option === 'tags') {
            setValues({
                ...values,
                diets: values.tag.filter(e => e !== element.e)
            })
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        // if (validation()) {
        dispatch(postQuestion(values))
        // console.log(values)
        // }
        setValues({
            title: "",
            description: "",
            code: "",
            module: "",
            tag: []
        })
        // navigate('/home')
    }
    const inputs = [
        {
            id: 12,
            name: "title",
            type: "text",
            placeholder: "Title",
            errorMessage: "You need a title for your question",
            label: "title",
            // required: true,
        },
        {
            id: 22,
            name: "code",
            type: "text",
            placeholder: "Code",
            errorMessage: "We need some code to understand your problem",
            label: "code",
            // required: true,
        },
        {
            id: 32,
            name: "description",
            type: "text",
            placeholder: "Description",
            errorMessage: "Maybe you can be more specific, could you tell us something about your problem?",
            label: "description",
            // required: true,
        }
    ];



    const onChange = (e) => {
        console.log(values)
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };


    return (
        <div className={Classes.layout}>
            <form
                className={Classes.form}
                onSubmit={handleSubmit}>
                <h1 className={Classes.h1} > Ask me something... </h1>

                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}

                <div
                    className={Classes.selectModules}
                >
                    <label> Select a Module
                        <select onChange={handleSelect}>
                            <option>MODULES</option>
                            <option value={'m1'}>M1</option>
                            <option value={'m2'}>M2</option>
                            <option value={'m3'}>M3</option>
                            <option value={'m4'}>M4</option>
                        </select>
                    </label>

                </div>

                <div>
                    <label>M1
                        <select onChange={handleSelect}>
                            <option>module</option>
                            {
                                m1Tags?.map(e => {
                                    return <option key={e.name} value={e.name} >{e.name}</option>
                                })
                            }
                        </select>
                    </label>
                </div>

                <div>
                    <label>M2
                        <select onChange={handleSelect}>
                            <option>module</option>
                            {
                                m2Tags?.map(e => {
                                    return <option key={e.name} value={e.name} >{e.name}</option>
                                })
                            }
                        </select>
                    </label>
                </div>
                <div>
                    <label>M3
                        <select onChange={handleSelect}>
                            <option>module</option>
                            {
                                m3Tags?.map(e => {
                                    return <option key={e.name} value={e.name} >{e.name}</option>
                                })
                            }
                        </select>
                    </label>
                </div>
                <div>
                    <label>M4
                        <select onChange={handleSelect}>
                            <option>module</option>
                            {
                                m4Tags?.map(e => {
                                    return <option key={e.name} value={e.name} >{e.name}</option>
                                })
                            }
                        </select>
                    </label>
                </div>

                <button
                    className={Classes.button}
                    type='submit'
                >Submit</button>
            </form>
        </div>
    );
};

export default PostFormMui;

