import { useEffect, useRef, useState } from "react";
import validatePassword from "../../helper/passwordValidator";
import validateEmail from "../../helper/emailValidator";

import "./Form.css";

function Form() {
  const exampleRef = useRef(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(exampleRef);
  }),
    [count];

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
      new Form Count:{count}
      Exampleref:{exampleRef.current}
      <button onClick={() => setCount(count + 1)}>update count</button>
      <button onClick={() => exampleRef.current++}>update ref</button>
      <form onSubmit={handleFormSubmits}>
        <div className="wrapper email-input-wrapper">
          <input
            id="email-input"
            type="email"
            value={formValues.email}
            onChange={(event) => {
              setFormValues({ ...formValues, email: event.target.value });
            }}
          />
        </div>
        <div className="wrapper password-input-wrapper">
          <input
            id="password-input"
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
