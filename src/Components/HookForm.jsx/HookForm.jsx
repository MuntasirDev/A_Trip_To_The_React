import React from 'react';
import useInputfield from '../../Hooks/useInputField';

const HookForm = () => {

    const [name, nameOnChange] = useInputfield('')
    const [email, emailOnChange] = useInputfield('')
    const [Password, passwordOnchange]= useInputfield('')

    const handleSubmit = event =>
    {
        event.preventDefault();
        console.log('submit',name,email,Password);
    }




    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input defaultValue={name} type="text" onChange={nameOnChange} />
            </form>
            <br />
                <input type="email" onChange={emailOnChange} name='' />
            <br />

        <input type="Password" onChange={passwordOnchange}  />

            <br />
            <input type="Submit" value='Submit' />
        </div>
    );
};

export default HookForm;