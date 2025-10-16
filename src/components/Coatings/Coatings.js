import React, { useState, useEffect, useRef } from "react";
import "./style.css";

export default function Coatings() {
  const [isVisible, setIsVisible] = useState(false);
  const [isActiveText, setActiveText] = useState(null);
  const [isRotating, setIsRotating] = useState(false);
  const spanRef = useRef(null);
  const myElementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (myElementRef.current) {
      observer.observe(myElementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const changeActiveText = (textNumber) => {
    if (isActiveText === textNumber) {
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

  return (
    <section id="coatings" className="coatings">
      <div className="container">
        <h2 className="title coatings__title">Какие покрытия используем?</h2>
        <div ref={myElementRef} className="coatings__info-inner">
          <div className={`coatings__info-item ${isVisible ? "visible" : ""}`}>
            <div className="coatings__item-content">
              <div
                className="coatings__item-title"
                onClick={() => changeActiveText(1)}
              >
                <div
                  className={`icon__plus ${isActiveText === 1 ? "active" : ""}`}
                >
                  <span></span>
                  <span
                    ref={spanRef}
                    className={isRotating ? "rotate" : ""}
                  ></span>
                </div>
                <p className="item__title">Полимерное окрашивание</p>
              </div>
              <div
                className={`coatings__info-text ${
                  isActiveText === 1 ? "open" : ""
                }`}
              >
                <p className="info__text">
                  Инновационный способ окраски радиаторов, который позволяет
                  получить высококачественное покрытие, устойчивое к коррозии и
                  механическим повреждениям. Процесс окрашивания заключается в
                  нанесении на поверхность радиатора полимерного покрытия,
                  которое затем полимеризуется под воздействием высокой
                  температуры.
                </p>
                <br />
                <p className="info__text">
                  Полимерное окрашивание позволяет окрашивать радиаторы во все
                  цвета RAL, что дает возможность выбрать цвет, соответствующий
                  интерьеру помещения. Кроме того, полимерное покрытие обладает
                  высокой степенью адгезии к поверхности радиатора, что
                  обеспечивает надежную защиту от коррозии и увеличивает срок
                  службы радиатора.
                </p>
              </div>
            </div>
            <div className="coatings__info-img" onClick={() => changeActiveText(1)}>
              <img
                src="./image/coat-1.png"
                alt="coatings"
              />
            </div>
          </div>
          <div className={`coatings__info-item ${isVisible ? "visible" : ""}`}>
            <div className="coatings__item-content">
              <div
                className="coatings__item-title"
                onClick={() => changeActiveText(2)}
              >
                <p className="item__title">Анодирование</p>
                <div
                  className={`icon__plus ${isActiveText === 2 ? "active" : ""}`}
                >
                  <span></span>
                  <span
                    ref={spanRef}
                    className={isRotating ? "rotate" : ""}
                  ></span>
                </div>
              </div>
              <div
                className={`coatings__info-text ${
                  isActiveText === 2 ? "open" : ""
                }`}
              >
                <p className="info__text">
                  Процесс поверхностной обработки, который придает радиаторам
                  дополнительную прочность, защиту от коррозии и улучшенную
                  внешнюю эстетику. Анодное покрытие резьбовой части гарантирует
                  отсутствие коррозии в местах установки фитингов (торцевая и
                  нижняя подводка) и увеличивает порог стойкости по показателю
                  рН от 5 до 10 единиц. Анодное покрытие увеличивает теплоотдачу
                  поверхности. Применение анодного покрытия позволяет предложить
                  потребителю широкую цветовую гамму готовых изделий, способных
                  гармонично вписаться в любой интерьер
                </p>
              </div>
            </div>
            <div className="coatings__info-img" onClick={() => changeActiveText(2)}>
              <img
                src="./image/coat-2.png"
                alt="coatings"
              />
            </div>
          </div>
          <div className={`coatings__info-item ${isVisible ? "visible" : ""}`}>
            <div className="coatings__item-content">
              <div
                className="coatings__item-title"
                onClick={() => changeActiveText(3)}
              >
                <div
                  className={`icon__plus ${isActiveText === 3 ? "active" : ""}`}
                >
                  <span></span>
                  <span
                    ref={spanRef}
                    className={isRotating ? "rotate" : ""}
                  ></span>
                </div>
                <p className="item__title">Декорал</p>
              </div>
              <div
                className={`coatings__info-text ${
                  isActiveText === 3 ? "open" : ""
                }`}
              >
                <p className="info__text">
                  Технология декорирования металлических поверхностей,
                  основанная на химико-физическом процессе сублимации.
                  Алюминиевые листы покрываются порошковым покрытием, а затем
                  декорируются с помощью специальных чернил, которые нанесены на
                  термотрансферную пленку. Таким образом, вы получаете
                  декоративную отделку на металлической основе, которая
                  воспроизводит натуральные материалы, такие как древесина,
                  мрамор, кортен и любое другое изображение
                </p>
              </div>
            </div>
            <div className="coatings__info-img" onClick={() => changeActiveText(3)}>
              <img
                src="./image/coat-3.png"
                alt="coatings"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
