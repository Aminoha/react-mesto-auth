import React from "react";
import { Link } from "react-router-dom";

const Register = (props) => {
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
          onClick={props.onRegister}
        >
          {props.buttonText}
        </button>
        <Link className="authorization__link" to="/sign-in">
          Уже зарегистрированы? Войти
        </Link>
      </form>
    </div>
  );
};

export default Register;
