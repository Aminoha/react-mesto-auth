import React from "react";

const Login = (props) => {
  return (
    <div className="authorization">
      <h1>{props.title}</h1>
      <form className="authorization-form">
        <input
          className="authorization-form__input"
          name="email"
          value={props.formValue.email}
          onChange={props.handleChange}
          placeholder="E-mail"
          type="email"
          required
        ></input>
        <input
          name="password"
          className="authorization-form__input"
          value={props.formValue.password}
          onChange={props.handleChange}
          placeholder="Пароль"
          type="password"
          required
        ></input>
        <button
          className="authorization-form__button"
          type="submit"
          name="save"
          onClick={props.onLogin}
        >
          {props.buttonText}
        </button>
      </form>
    </div>
  );
};

export default Login;
