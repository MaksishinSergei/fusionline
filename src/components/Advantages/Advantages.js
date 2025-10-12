import React, { useState, useEffect, useRef } from "react";
import "./style.css";

export default function Advantages() {
  const [isVisible, setIsVisible] = useState(false);

  const myElementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Параметры наблюдения
    );

    if (myElementRef.current) {
      observer.observe(myElementRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section id="advantages" className="advantages">
      <div className="container">
        <div className="advantages__wrapper">
          <h2 className="title advantages__title">Наши преимущества</h2>
          <div ref={myElementRef} className="advantages__list-grid">
            <div
              id="adv-item"
              className={`advantages__list-item ${isVisible ? "visible" : ""}`}
            >
              <img
                src="./image/adv-1.svg"
                alt=""
                className="advantages__item-icon"
              />
              <p className="advantages__item-text">Высокая теплоотдача</p>
            </div>
            <div
              id="adv-item"
              className={`advantages__list-item ${isVisible ? "visible" : ""}`}
            >
              <img
                src="./image/adv-2.svg"
                alt=""
                className="advantages__item-icon"
              />
              <p className="advantages__item-text">Широкая цветовая палитра</p>
            </div>
            <div
              id="adv-item"
              className={`advantages__list-item ${isVisible ? "visible" : ""}`}
            >
              <img
                src="./image/adv-3.png"
                alt=""
                className="advantages__item-icon"
              />
              <p className="advantages__item-text">Уникальный дизайн</p>
            </div>
            <div
              id="adv-item"
              className={`advantages__list-item ${isVisible ? "visible" : ""}`}
            >
              <img
                src="./image/adv-4.svg"
                alt=""
                className="advantages__item-icon"
              />
              <p className="advantages__item-text">Широкая размерная линейка</p>
            </div>
            <div
              id="adv-item"
              className={`advantages__list-item ${isVisible ? "visible" : ""}`}
            >
              <img
                src="./image/adv-5.svg"
                alt=""
                className="advantages__item-icon"
              />
              <p className="advantages__item-text">
                Нижнее подключение в базовой комплектации
              </p>
            </div>
            <div
              id="adv-item"
              className={`advantages__list-item ${isVisible ? "visible" : ""}`}
            >
              <img
                src="./image/adv-6.svg"
                alt=""
                className="advantages__item-icon"
              />
              <p className="advantages__item-text">
                Высокая устойчивость к давлению и коррозии
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
