import React from "react";
import ok from "../images/ok-auth.svg";
import error from "../images/decline-auth.svg";

const InfoTooltip = (props) => {
  return (
    <div
      className={`popup popup__auth-res ${props.isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <button
          className="popup__button-close"
          type="button"
          onClick={props.onClose}
        />
        <img
          className="popup__auth-image"
          src={props.isRegister.status ? ok : error}
          alt={props.alt}
        />
        <h3 className="popup__title popup__title_auth">
          {props.isRegister.message}
        </h3>
      </div>
    </div>
  );
};

export default InfoTooltip;
