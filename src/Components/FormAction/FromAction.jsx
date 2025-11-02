import React from 'react';

const FromAction = () => {

const handleAction = (fromData) => {
    fromData.preventDefault();
    console.log(fromData.get('name'));
    console.log(fromData.get('email'));
}

    return (
        <div>
            <form action={handleAction}>
                <input type="text" name="name" placeholder='Your Name'/> <br />
                <input type='email' name="email" placeholder='Your Email' /> <br />
                <input type="submit" value="Submit" /> <br />
            </form>
        </div>
    );
};

export default FromAction;