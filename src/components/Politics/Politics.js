import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./style.css";

export default function Politics() {
    const navigate = useNavigate();
    return(
        <div className="container">
            <div className="politics__content">
                <button className="button politics__btn" onClick={() => navigate(-1)}>
                    <span className="btn-text politics__btn-text">Вернуться назад</span>
                </button>
                <h2 className="title politics__title">
                    Политика конфиденциальности
                </h2>
                <div className="text politics__text">
                    ***Текст политики***
                </div>
            </div>
        </div>
    );
}