import React from "react";
import useInputfield from "../../Hooks/useInputField";

const HookForm = () => {
  const [name, nameOnChange] = useInputfield("");
  const [email, emailOnChange] = useInputfield("");
  const [password, passwordOnChange] = useInputfield("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submit", name, email, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={nameOnChange} placeholder="Name" />
        <br />

        <input type="email" value={email} onChange={emailOnChange} placeholder="Email" />
        <br />

        <input type="password" value={password} onChange={passwordOnChange} placeholder="Password" />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
