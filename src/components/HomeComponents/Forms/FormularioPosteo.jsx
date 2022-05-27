import React, { useState } from 'react'
import FormInput from './formInput/FormInput'
import "./formularioPosteo.css"

const FormularioPosteo = () => {
    // console.log('Hola mundo')

    const [values, setValues] = useState({
        title: '',
        question: '',
        code: '',
        description: '',
        module: '',
        tag: ''
    });

    const inputs = [
        {
            id: 1,
            name: 'title',
            type: 'text',
            placeholder: 'Title',
            errorMessage: 'You need a title for your question',
            label: 'Title',
            required: true,
        },
        {
            id: 2,
            name: 'question',
            type: 'text',
            placeholder: 'Question',
            errorMessage: 'Where is the question?',
            label: 'Question',
            required: true,
        },
        {
            id: 3,
            name: 'code',
            type: 'text',
            placeholder: 'Code',
            errorMessage: 'We need some code to understand your problem',
            label: 'Code',
            required: true,
        },
        {
            id: 4,
            name: 'description',
            type: 'text',
            placeholder: 'Description',
            errorMessage: 'We need more data about your problem...',
            label: 'Description',
            required: true,
        },
        {
            id: 5,
            name: 'module',
            type: 'text',
            placeholder: 'Module',
            errorMessage: 'Well, we need information about the module of this question',
            label: 'Module',
            required: true,
        },
        {
            id: 6,
            name: 'tag',
            type: 'text',
            placeholder: 'Tag',
            errorMessage: 'Tell us about what technology you need help with',
            label: 'Tag',
            required: true,
        }

    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    };

    console.log(values);

    return (
        <div className='form-post'>
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
    )
}

export default FormularioPosteo