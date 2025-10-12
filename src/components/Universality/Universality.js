import React, { useState, useEffect, useRef } from "react";
import "./style.css";

export default function Universality() {
  const [isView, setIsView] = useState(false);

  const myElementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsView(true);
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
    <section id="univers" className="univers">
      <div className="container">
        <div className="univers__wrapper">
          <h2 className="title univers__title">Изготовим под любой интерьер</h2>
          <p className="text univers__subtitle">
            Наши дизайнерские радиаторы и полотенцесушители подходят под любую
            систему
          </p>
          <p className="text univers__subtitle">
            отопления, имеют универсальное базовое подключение и высокую
            энергоэффективность
          </p>
          <div ref={myElementRef} className="univers__columns">
            <div
              id="un-item"
              className={`univers__column univers__column-1 ${
                isView ? "view" : ""
              }`}
            >
              <div className="univers__column-text top-text">
                Количество секций от 2 до 28
              </div>

              <img
                src="./image/univers-img-1.png"
                alt=""
                className="univers__img-1"
              />
              <div className="univers__column-text left-text">
                Высота от 230 до 2930 мм
              </div>
              <div className="univers__column-text bottom-text">
                Ширина от 279 до 1269 мм
              </div>
            </div>
            <div
              id="un-item"
              className={`univers__column univers__column-2 ${
                isView ? "view" : ""
              }`}
            >
              <div className="univers__column-text top-text">
                Количество секций от 4 до 18
              </div>
              <img
                src="./image/univers-img-2.png"
                alt=""
                className="univers__img-2"
              />
              <div className="univers__column-text left-text">
                Высота от 594 до 1179 мм
              </div>
              <div className="univers__column-text bottom-text">
                Ширина от 530 до 830 мм
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
