import React from "react";
import "./style.css"
import partners from "./../../objects/partners.json";

export default function Partners() {
    const duplicatedPartners = [...partners, ...partners];
    return(
        <section id="partners" className="partners">
            <div className="container">
                <h2 className="title partners__title">
                    Наши партнеры
                </h2>
                    <div className="partners__wrap">
                        <div className="partners__slider">
                        {duplicatedPartners.map((partner, index) => (
                            <div key={index} className="partners__item">
                                <img loading="lazy" src={partner.src} alt={partner.alt} className="partner__item-img" />
                                <p className="text partner__item-text">Партнер {(index % partners.length) + 1}</p>
                            </div>
                        ))}
                        </div>
                    </div>
            </div>
        </section>
    );
}