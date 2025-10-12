import React, {useState, useRef} from "react";
import "./style.css";
import faqItem from "./../../objects/faq.json";

export default function Faq() {
    const [activeText, setActiveText] = useState(null);
    const [isRotating, setIsRotating] = useState(false);
    const spanRef = useRef(null);
    const changeActiveText = (textNumber) => {
        if (activeText === textNumber) {
        setActiveText(null);
        setIsRotating(true);
        setTimeout(() => {
            setIsRotating(false);
        }, 500);
        } else {
        setActiveText(textNumber);
        setIsRotating(true);
        setTimeout(() => {
            setIsRotating(false);
        }, 500);
        }
    };

    return(
        <section id="faq" className="faq">
            <div className="container">
                <h2 className="title faq__title">
                    Ответили на популярные вопросы
                </h2>
                <div className="faq__wrap">
                <div className="faq__content">
                    {faqItem.map((item, index) => (
                        <div key={index} className={`faq__item ${activeText === index ? "active" : ""}`}>
                            <p className="text faq__item-title" onClick={() => changeActiveText(index)}>
                                {item.question}
                            </p>
                            <div className={`text faq__item-text ${activeText === index ? "open" : ""}`}>
                                {item.answers.map((answer, answerIndex) => (
                                        <p key={answerIndex} className="text">
                                            {answer}
                                        </p>
                                ))}
                            </div>
                            <div
                            className="answer__plus"
                            onClick={() => changeActiveText(index)}
                            >
                            <span></span>
                            <span
                                ref={spanRef}
                                className={isRotating ? "rotate" : ""}
                            ></span>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </section>
    );
}