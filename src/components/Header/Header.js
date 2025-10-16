import React, { useState } from "react";
import "./style.css";
import callPopupData from "./../../objects/call.json";
import { useTheme } from "../hooks/useTheme";
import SwitchButtonTheme from "../Custom/SwitchButtonTheme";

export default function Header({ toggleOnModal }) {
  const [isOpen, setOpen] = useState(false);
  const [switchValue, setSwitchValue] = useState(()=>{
    const stored = localStorage.getItem('switchValue');
    return stored === 'true';
  });
  const handleClick = () => {
    toggleOnModal(callPopupData);
  };
  const {theme, toggleTheme} = useTheme();
  const handleSwitch = () => {
    localStorage.setItem('switchValue', switchValue);
    setSwitchValue(!switchValue);
    toggleTheme();
  }
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="logo">
            <a href="#home" className="logo__link">
              <img
                src="./image/custom_logo.svg"
                alt="Fusionline"
                className="logo__link-image"
              />
            </a>
          </div>
          <div className="contacts">
            <div className="contacts__time">10:00—18:00</div>
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
          </div>
          <div className="buttons__wrap">
            <button className="button contacts__btn" onClick={handleClick}>
              <span className="btn-text contacts__btn-text">Заказать звонок</span>
            </button>
            <div className="contacts__messengers">
              <a
                href="#home"
                className="contacts__messengers-link contacts__messengers-link-1"
              >
                <img
                  src="./image/viber.svg"
                  alt="Viber"
                  className="contact__messengers-img contacts__messengers-img-1"
                />
              </a>
              <a
                href="#home"
                className="contacts__messengers-link contacts__messengers-link-2"
              >
                <img
                  src="./image/telegram.svg"
                  alt="Telegram"
                  className="contact__messengers-img contacts__messengers-img-2"
                />
              </a>
              <a
                href="#home"
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
          <button
            className={`btn__navigation ${isOpen ? "open" : ""}`}
            onClick={() => setOpen(!isOpen)}
          >
            <span className="row-1"></span>
            <span className="row-2"></span>
            <span className="row-3"></span>
          </button>
        </div>
        <div className={`header__nav-desktop ${isOpen ? "active" : ""}`}>
          <nav className="header__nav-container">
            <ul className="header__nav-list">
              <li className="header__nav-list-item list-item-1">
                <a href="#advantages" className="list-item-link list-item-link-1">
                  Преимущества
                </a>
              </li>
              <li className="header__nav-list-item list-item-2">
                <a href="#products" className="list-item-link list-item-link-2">
                  Продукция
                </a>
              </li>
              <li className="header__nav-list-item list-item-3">
                <a href="#univers" className="list-item-link list-item-link-3">
                  Размеры
                </a>
              </li>
              <li className="header__nav-list-item list-item-4">
                <a href="#coatings" className="list-item-link list-item-link-4">
                  Покрытия
                </a>
              </li>
              <li className="header__nav-list-item list-item-5">
                <a href="#questions" className="list-item-link list-item-link-5">
                  Опрос
                </a>
              </li>
              <li className="header__nav-list-item list-item-7">
                <a href="#guarant" className="list-item-link list-item-link-7">
                  Гарантии
                </a>
              </li>
              <li className="header__nav-list-item list-item-8">
                <a href="#partners" className="list-item-link list-item-link-8">
                  Партнеры
                </a>
              </li>
              <li className="header__nav-list-item list-item-9">
                <a href="#faq" className="list-item-link list-item-link-9">
                  Популярные вопросы
                </a>
              </li>
              <li className="header__nav-list-item list-item-10">
                <a href="#map" className="list-item-link list-item-link-10">
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
          <div className="header__nav-pad">
            <a href="#" className="contacts__location-1">
              г. Москва, Берсеневская набережная, 6с3
            </a>
            <a href="#" className="contacts__location-2">
              г. Новосибирск, ул. Сибиряков Гвардейцев, 50
            </a>
          </div>
          <div className="header__nav-mobile">
            <div className="contacts__time">10:00 — 18:00</div>
            <a href="tel:+7 (495) 968-04-06" className="contacts__phone-1">
              +7 (495) 968-04-06
            </a>
            <a href="tel:+7 (383) 312-04-06" className="contacts__phone-2">
              +7 (383) 312-04-06
            </a>
          </div>
          <div className="theme">
            <p className="theme__text">{theme === "dark" ? "🌒" : "☀️"}</p>
            <SwitchButtonTheme 
              changeTheme={switchValue}
              handleToggleSwitch={handleSwitch}
              darkImage = {"/image/moon.png"}
              lightImage={"/image/sun.png"}
            />
          </div>

        </div>
      </div>
    </header>
  );
}
