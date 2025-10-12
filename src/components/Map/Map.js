import React, { useState } from "react";
import { notifications } from "@mantine/notifications";
import { Link } from "react-router-dom";
import "./style.css";

export default function MyMap() {
    const [activeMap, setActiveMap] = useState(false);
    const handleClick = () => {
        setActiveMap(true);
    }
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
    return(
        <section id="map" className="map">
            <div className={`map__wrap ${activeMap ? "active" : ""}`} >
                {!activeMap ? (
                    <>
                        <img 
                            loading="lazy" 
                            decoding="async" 
                            src="./image/map-bg.webp" 
                            alt="Map" 
                            className="map__img"
                        />
                        <div className="map__overlay" onClick={handleClick}></div>
                    </>
                ) : (
                    <iframe 
                        loading="lazy" 
                        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad04242d3f141f6c7bd6e1c1a0dc2637e8ee612683496db9026e478519875512e&amp;source=constructor" 
                        width="100%" 
                        height="465"
                        frameBorder="0"
                    ></iframe>
                )}
                <div className="map__consultation">
                    <h3 className="map__title">Нужна помощь специалиста?</h3>
                    <p className="map__subtitle">Оставьте ваш номер телефона, мы свяжемся с вами и ответим на все вопросы!</p>
                    <form
                    action=""
                    className="map__form"
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
                    <button type="submit" className="button map__btn">
                        <span className="btn-text contacts__btn-text">
                        Получить консультацию
                        </span>
                    </button>
                    </form>
                    <p className="map__text-pdn">
                    Нажимая на кнопку “Получить консультацию”, я соглашаюсь на<br/>обработку персональных
                    данных и соглашаюсь c{" "}
                    <Link to="/politics" href="" className="popup__link-politics">
                        политикой конфиденциальности
                    </Link>
                    </p>
                </div>
            </div>

        </section>
    );
}