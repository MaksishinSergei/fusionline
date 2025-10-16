import React from "react";
import "./style.css"

export default function Guarantee(){
    return (
        <section id="guarant" className="guarant">
            <div className="container">
                <h2 className="title guarant__title">
                    Гарантируем
                </h2>
                <div className="guarant__wrap">
                    <div className="guarant__content">
                        <div className="guarant__item ">
                            <img src="./image/guarant-1.svg" alt="Гарантия" className="guarant__img img_1" />
                            <p className="text guarant__text">Качество</p>
                        </div>
                        <div className="guarant__item">
                            <img src="./image/guarant-3.svg" alt="Гарантия" className="guarant__img img_2" />
                            <p className="text guarant__text">Честные цены</p>
                        </div>
                        <div className="guarant__item">
                            <img src="./image/guarant-2.png" alt="Гарантия" className="guarant__img img_3" />
                            <p className="text guarant__text">лет гарантии</p>
                        </div>
                        <div className="guarant__item">
                            <img src="./image/guarant-4.svg" alt="Гарантия" className="guarant__img img_4" />
                            <p className="text guarant__text">Лучший сервис</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}