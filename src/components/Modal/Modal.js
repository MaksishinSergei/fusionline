import React, { useState, useEffect } from "react";
import { notifications } from "@mantine/notifications";
import { Link } from "react-router-dom";
import "./style.css";

export default function Modal({ content, toggleOffModal }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        toggleOffModal();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [toggleOffModal]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showError, setShowError] = useState(false);
  const handlePhoneChange = (e) => {
    const inputValue = e.target.value;
    const limitedDigits = inputValue.replace(/\D/g, "").substring(0, 11);
    let formattedPhoneNumber = "";
    if (limitedDigits.length > 0) {
      formattedPhoneNumber = "+7 ";
      if (limitedDigits.length > 1) {
        formattedPhoneNumber += limitedDigits.substring(1, 4);
      }
      if (limitedDigits.length > 4) {
        formattedPhoneNumber += " " + limitedDigits.substring(4, 7);
      }
      if (limitedDigits.length > 7) {
        formattedPhoneNumber += "-" + limitedDigits.substring(7, 9);
      }
      if (limitedDigits.length > 9) {
        formattedPhoneNumber += "-" + limitedDigits.substring(9, 11);
      }
    }
    setPhoneNumber(formattedPhoneNumber);
    if (showError) {
      setShowError(false);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber !== "" & phoneNumber.length >= 11) {
      setShowError(false);
      console.log(phoneNumber);
      notifications.show({
        title: "Спасибо за заявку!",
        message: "С Вами свяжутся в ближайшее время",
        color: "green",
        withBorder: true,
      });
    } else {
      setShowError(true);
      notifications.show({
        title: "Ошибка!",
        message: "Заполните номер телефона",
        color: "#ffad00",
        withBorder: true,
      });
    }
  };
  return (
    <div id="form" className="popup" onClick={toggleOffModal}>
      <div className="popup__wrapper" onClick={(e) => e.stopPropagation()}>
        <svg
          className="popup__icon-close"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleOffModal}
        >
          <path
            d="M31 1L1 31"
            stroke="black"
            strokeWidth="1.00189"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 1L31 31"
            stroke="black"
            strokeWidth="1.00189"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h3 className="popup__title">{content.title}</h3>
        <p className="popup__subtitle">{content.subtitle}</p>
        <form
          action=""
          className="popup__form"
          noValidate
          onSubmit={handleSubmit}
        >
          <div className={`input__container ${showError ? "show-error" : ""}`}>
            <input
              type="tel"
              name="Телефон"
              className="popup__form-input"
              placeholder="Ваш телефон"
              value={phoneNumber}
              onChange={handlePhoneChange}
              noValidate
            />
          </div>
          <button type="submit" className="button popup__btn">
            <span className="btn-text contacts__btn-text">
              {content.buttonText}
            </span>
          </button>
        </form>
        <p className="popup__text-pdn">
          Нажимая на кнопку “Заказать”, я соглашаюсь на обработку персональных
          данных и соглашаюсь c{" "}
          <Link to="/politics" className="popup__link-politics">
            политикой конфиденциальности
          </Link>
        </p>
      </div>
    </div>
  );
}
