import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import slider from "./../../objects/sliderImage.json";
import orderPopup from "./../../objects/order.json";

export default function Item({ data, toggleOffItemModal, toggleOnModal }) {
  console.log("ITEM", data);
  const sliderContent = slider.filter(
    (image) => data[0].alt === image.alt && data[0].type === image.type
  );
  const handleClick = () => {
    toggleOnModal(orderPopup, data);
  };

  return (
    <div className="popup__item">
      <div className="container">
        <svg
          className="popup__icon-close"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleOffItemModal}
        >
          <path
            d="M31 1L1 31"
            stroke="black"
            stroke-width="1.00189"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 1L31 31"
            stroke="black"
            stroke-width="1.00189"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div className="item__wrapper">
            <Swiper
              modules={[Pagination, Navigation]}
              slidesPerView={1}
              spaceBetween={10}
              direction="horizontal"
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
              }}
              pagination={{
                el: '.item__pagination',
                clickable: true,
                dynamicBullets: true,
              }}
              navigation={false}
              className="item__slider-wrapper"
            >
              {sliderContent.map((image) => (
                <SwiperSlide>
                  <div className="swiper__slide">
                    <img
                      loading="lazy"
                      src={image.src}
                      alt={image.alt}
                      className="item__slider-img"
                    />
                  </div>
                </SwiperSlide>
              ))}
            <div className="item__pagination"></div>
            </Swiper>
          <div className="item__about">
            <h2 className="item__about-title">{data[0].name}</h2>

            {data.map((item) => (
              <ul key={item.id} className="text item__about-list">
                {Object.entries(item)
                  .slice(4)
                  .map(([key, value]) => (
                    <li key={key} className="item__about-text">
                      <span className="key">{key}</span>
                      <span className="value">{value}</span>
                    </li>
                  ))}
                <button className="button item__btn" onClick={handleClick}>
                  <span className="btn-text item__btn-text">Заказать</span>
                </button>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
