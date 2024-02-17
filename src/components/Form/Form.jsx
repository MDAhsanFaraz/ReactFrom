import { useState } from "react";
import validatePassword from "../../helper/passwordValidator";
import validateEmail from "../../helper/emailValidator";

import "./Form.css";

function Form() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleValidatePassword = () => {
    const password = formValues.password;
    if (!validatePassword(password)) {
      console.log("false password");
    }
  };
  const handleValidateEmail = () => {
    const email = formValues.email;
    if (!validateEmail(email)) {
      console.log("false email");
    }
  };

  const handleFormSubmits = (event) => {
    event.preventDefault();
    handleValidatePassword();
    handleValidateEmail();
    console.log(formValues);
  };

  return (
    <div>
      new Form
      <form onSubmit={handleFormSubmits}>
        <div className="wrapper email-input-wrapper">
          <input
            type="email"
            value={formValues.email}
            onChange={(event) => {
              setFormValues({ ...formValues, email: event.target.value });
            }}
          />
        </div>
        <div className="wrapper password-input-wrapper">
          <input
            type="password"
            value={formValues.password}
            onChange={(event) => {
              setFormValues({ ...formValues, password: event.target.value }); //destructuring object and replacing olg value with new value
            }}
          />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
}
export default Form;
