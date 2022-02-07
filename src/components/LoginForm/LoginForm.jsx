import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const LoginForm = (props) => {
  const { state } = useLocation();
  const [formData, setFormData] = useState(INITIAL_STATE);

  const submitForm = (ev) => {
    ev.preventDefault();
    props.loginUser(formData, state ? state.prevRoute : null);
    setFormData(INITIAL_STATE);
  }

  const changeInput = (ev) => {
    const { name, value } = ev.target;

    setFormData({ ...formData, [name]: value });
  };


  return (
    <form onSubmit={submitForm}>
      <label>
        <p>Email</p>
        <input type="text" name="email" onChange={changeInput} value={formData.email} />
      </label>

      <label>
        <p>Contraseña</p>
        <input type="password" name="password" onChange={changeInput} value={formData.password} />
      </label>

      <div>
        <button type='submit'>Log In</button>
      </div>

      {props.loginError && <div style={{color: 'red'}}>{props.loginError}</div>}
    </form>
  )
}

export default LoginForm;