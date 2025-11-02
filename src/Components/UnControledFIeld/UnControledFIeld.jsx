import React from 'react';

const UnControledFIeld = () => {


    const emailRef = React.useRef('');
    const passwordRef = React.useRef('');

    const handleSubmit = (event) => {
        event.preventDefault();
    
        console.log('Email:', emailRef.current.value);
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name='email' placeholder='E-mail' required />
                <br />
                <input ref={passwordRef} type="Password" name='password' placeholder='Password' required />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UnControledFIeld;