import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import items from "./../../objects/items.json";

export default function Products({ toggleOnItemModal }) {
  const imagesProducts = [
    [
      {
        id: 1,
        src: "/image/solid.png",
        alt: "radiator",
        text: "Радиаторы SOLID",
        name: "Solid",
        price: "От 8 190 ₽",
      },
      {
        id: 2,
        src: "/image/quadra.png",
        alt: "radiator",
        text: "Радиаторы QUADRA",
        name: "Quadra",
        price: "От 9 240 ₽",
      },
      {
        id: 3,
        src: "/image/flow.png",
        alt: "radiator",
        text: "Радиаторы FLOW",
        name: "Flow",
        price: "От 9 240 ₽",
      },
    ],
    [
      {
        id: 4,
        src: "/image/flow-2.png",
        alt: "dry",
        text: "Полотенцесушители FLOW",
        name: "Flow",
        price: "От 14 600 ₽",
      },
      {
        id: 5,
        src: "/image/quadra-2.png",
        alt: "dry",
        text: "Полотенцесушители QUADRA",
        name: "Quadra",
        price: "От 14 600 ₽",
      },
    ],
    [
      {
        id: 6,
        src: "/image/details-1.png",
        alt: "detail",
        text: "Для монтажа радиатора",
        name: "det_1",
        price: "От 1 800 ₽",
      },
      {
        id: 7,
        src: "/image/details-2.png",
        alt: "detail",
        text: "Для монтажа полотенцесушителя",
        name: "det_2",
        price: "От 1 360 ₽",
      },
    ],
  ];

  const [selectImages, setSelectImages] = useState(null);
  const [isCurrentImg, setCurrentImg] = useState(0);
  const [isLengthArray, setLengthArray] = useState(
    imagesProducts.flat().length
  );

  const changeCurrentIndexForNextBtn = () => {
    if (isCurrentImg >= isLengthArray - 3) {
      setCurrentImg(isLengthArray - 3);
    } else {
      setCurrentImg(isCurrentImg + 1);
    }
  };
  const changeCurrentIndexForPrevBtn = () => {
    if (isCurrentImg <= 0) {
      setCurrentImg(0);
    } else {
      setCurrentImg(isCurrentImg - 1);
    }
  };
  const textNextBtn = () => {
    if (isLengthArray <= 3) {
      if (isLengthArray === 3) {
        return 3;
      }
      if (isLengthArray === 2) {
        return 2;
      } else return 1;
    } else {
      if (isCurrentImg < isLengthArray - 2) {
        return isCurrentImg + 3;
      } else {
        return isCurrentImg;
      }
    }
  };
  const textPrevBtn = () => {
    if (isLengthArray <= 3) {
      return 1;
    } else {
      if (isCurrentImg < isLengthArray - 2) {
        return isCurrentImg + 1;
      } else {
        return isCurrentImg;
      }
    }
  };

  const swiperRef = useRef();

  const handleClick = (targetAlt, targetName) => {
    const itemContent = items.filter(
      (item) => item.alt === targetAlt && item.type === targetName
    );
    toggleOnItemModal(itemContent);
  };

  return (
    <section id="products" className="products">
      <div className="container">
        <div className="products__wrapper">
          <h2 className="title products__title">Продукция Fusionline</h2>
          <div className="products__buttons">
            <div className="products__buttons-select">
              <button
                className={`btn__select ${
                  selectImages === null ? "active" : ""
                }`}
                onClick={() => {
                  setSelectImages(null);
                  setCurrentImg(0);
                  setLengthArray(imagesProducts.flat().length);
                }}
              >
                Все
              </button>
              <button
                className={`btn__select ${selectImages === 0 ? "active" : ""}`}
                onClick={() => {
                  setSelectImages(0);
                  setCurrentImg(0);
                  setLengthArray(imagesProducts[0].length);
                }}
              >
                Дизайнерские радиаторы
              </button>
              <button
                className={`btn__select ${selectImages === 1 ? "active" : ""}`}
                onClick={() => {
                  setSelectImages(1);
                  setCurrentImg(0);
                  setLengthArray(imagesProducts[1].length);
                }}
              >
                Дизайнерские полотенцесушители
              </button>
              <button
                className={`btn__select ${selectImages === 2 ? "active" : ""}`}
                onClick={() => {
                  setSelectImages(2);
                  setCurrentImg(0);
                  setLengthArray(imagesProducts[2].length);
                }}
              >
                Комплектующие для отопительных приборов
              </button>
            </div>
            <div className="products__buttons-slider">
              <button
                className={`slider__btn button__prev ${
                  isLengthArray <= 3 ? "" : isCurrentImg !== 0 ? "active" : ""
                }`}
                onClick={() => {
                  swiperRef.current.slidePrev();
                  changeCurrentIndexForPrevBtn();
                }}
              >
                <p
                  className={`button__txt text__prev ${
                    isLengthArray <= 3 ? "" : isCurrentImg !== 0 ? "active" : ""
                  }`}
                >
                  0{textPrevBtn()}
                </p>
                <svg
                  width="57"
                  height="50"
                  viewBox="0 0 57 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="-1"
                    y="1"
                    width="48"
                    height="48"
                    rx="24"
                    transform="matrix(-1 0 0 1 55 0)"
                    stroke="#C4C4C4"
                    strokeWidth="2"
                  />
                  <path
                    d="M45 25H1"
                    stroke="#C4C4C4"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <button
                className={`slider__btn button__next ${
                  isLengthArray <= 3
                    ? ""
                    : isCurrentImg < isLengthArray - 3
                    ? "active"
                    : ""
                }`}
                onClick={() => {
                  swiperRef.current.slideNext();
                  changeCurrentIndexForNextBtn();
                }}
              >
                <svg
                  width="57"
                  height="50"
                  viewBox="0 0 57 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="48"
                    height="48"
                    rx="24"
                    stroke="#C4C4C4"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 25H56"
                    stroke="#C4C4C4"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <p
                  className={`button__txt text__next ${
                    isLengthArray <= 3
                      ? ""
                      : isCurrentImg < isLengthArray - 3
                      ? "active"
                      : ""
                  }`}
                >
                  0{textNextBtn()}
                </p>
              </button>
            </div>
          </div>
          <>
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Pagination, Navigation]}
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="products__slider-wrapper"
            >
              {selectImages === null &&
                imagesProducts.flat().map((image) => (
                  <SwiperSlide>
                    <div
                      key={image.id}
                      className="products__item"
                      onClick={() => handleClick(image.alt, image.name)}
                    >
                      <img
                        loading="lazy"
                        src={image.src}
                        alt={image.alt}
                        className="products__slider-img"
                      />
                      <button
                        className="button slider__item-btn"
                        onClick={() => handleClick(image.alt, image.name)}
                      >
                        <span className="btn-text slider__item-btn-text">
                          Смотреть подробнее
                        </span>
                      </button>
                    </div>
                    <div className="products__slider-under-text">
                      <p className="products__slider-name-text">{image.text}</p>
                      <p className="products__slider-price-text">
                        {image.price}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              {selectImages !== null &&
                imagesProducts[selectImages].map((image) => (
                  <SwiperSlide>
                    <div
                      key={image.id}
                      className="products__item"
                      onClick={() => handleClick(image.alt, image.name)}
                    >
                      <img
                        loading="lazy"
                        src={image.src}
                        alt={image.alt}
                        className="products__slider-img"
                      />
                      <button
                        className="button slider__item-btn"
                        onClick={() => handleClick(image.alt, image.name)}
                      >
                        <span className="btn-text slider__item-btn-text">
                          Смотреть подробнее
                        </span>
                      </button>
                    </div>
                    <div className="products__slider-under-text">
                      <p className="products__slider-name-text">{image.text}</p>
                      <p className="products__slider-price-text">
                        {image.price}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </>
        </div>
      </div>
    </section>
  );
}
