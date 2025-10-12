import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import orderPopup from "./../../objects/order.json";

export default function Footer({toggleOnModal}) {
  const handleClick = () => {
    toggleOnModal(orderPopup);
  };
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="footer__wrap">
        <div className="footer__content">
            <a href="#home" className="logo__link">
              <img
                src="./image/custom_logo.svg"
                alt="Fusionline"
                className="logo__link-image"
              />
            </a>
          <div className="footer__contacts">
            <div className="contacts__location">
              <a href="https://yandex.ru/maps/213/moscow/house/bersenevskaya_naberezhnaya_6s3/Z04YcAdpS0MEQFtvfXt1cXpmYA==/" className="contacts__location-1">
                г. Москва, Берсеневская набережная, 6с3
              </a>
              <a href="https://yandex.ru/maps/65/novosibirsk/house/ulitsa_sibiryakov_gvardeytsev_50/bEsYfwdgTEAHQFtufXV3cn9jYQ==/" className="contacts__location-2">
                г. Новосибирск, ул. Сибиряков Гвардейцев, 50
              </a>
            </div>
            <div className="contacts__phone">
              <a
                href="tel:+7 (495) 968-04-06"
                className="phone-link contacts__phone-1"
              >
                +7 (495) 968-04-06
              </a>
              <a
                href="tel:+7 (383) 312-04-06"
                className="phone-link contacts__phone-2"
              >
                +7 (383) 312-04-06
              </a>
            </div>
            <div className="contacts__email">
              <img src="./image/email.png" alt="email" className="img__email" />
              <a href="#map" className="text__email">fusionline@gmail.com</a>
              </div>
            <p className="contacts__time">10:00 — 18:00</p>
          </div>
          <div className="footer__btn">
            <button className="button footer__btn" onClick={handleClick}>
              <span className="btn-text footer__btn-text">Сделать заказ</span>
            </button>
            <div className="contacts__messengers">
              <a
                href="#map"
                className="contacts__messengers-link contacts__messengers-link-1"
              >
                <img
                  src="./image/viber.svg"
                  alt="Viber"
                  className="contact__messengers-img contacts__messengers-img-1"
                />
              </a>
              <a
                href="#map"
                className="contacts__messengers-link contacts__messengers-link-2"
              >
                <img
                  src="./image/telegram.svg"
                  alt="Telegram"
                  className="contact__messengers-img contacts__messengers-img-2"
                />
              </a>
              <a
                href="#map"
                className="contacts__messengers-link contacts__messengers-link-3"
              >
                <img
                  src="./image/vkontakte.svg"
                  alt="VKontakte"
                  className="contact__messengers-img contacts__messengers-img-3"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__politics">
            <Link to="/politics" className="footer__politics-link">
              Политика конфиденциальности
            </Link>
        </div>
        </div>
      </div>
    </footer>
  );
}
