import React, { useReducer } from "react";
import CheckBox from "../Custom/CheckBox";
import CheckBoxInput from "../Custom/CheckBoxInput";
import "./style.css";
import opros from "./../../objects/oprosnik.json";
import { initialState, questionsReducer } from "../hooks/useQuestReducer";


export default function Questions(){
  const [state, dispatch] = useReducer(questionsReducer, initialState);
  const {
    count,
    type,
    selectedProducts,
    selectedCallback,
    selectedOptions,
    name,
    other,
    phone,
    formSale
  } = state;
  const typeText = ["Какой тип радиатора вам нужен?", "Какой тип полотенцесушителя вам нужен?"]
  let counterText = [
    {id: 1, text: "Что вы хотите приобрести?"},
    {id: 2, text: typeText[type]},
    {id: 3, text: "Какое количество необходимо?"},
    {id: 4, text: "Куда нужно доставить?"},
    {id: 5, text: "Кем Вы являетесь?"},
    {id: 6, text: "Оставьте контактные данные и менеджеры свяжутся с Вами в ближайшее время"},
  ];
  const handleCheckboxChange = (productType) => {
    dispatch({type: "SET_SELECT_PRODUCTS", payload: productType});
  };
  const handleCallbackChange = (callbackType) => {
    dispatch({type: "SET_SELECT_CALLBACK", payload: callbackType});
  };
  const handleOptionsCheckboxChange = (optionsValue) => {
    dispatch({type: "SET_OPTIONS", payload: optionsValue});
  }

  const handleOtherInputChange = (e) => {
    dispatch({type: "SET_OTHER", payload: e.target.value});
  };

  const handleOtherCheckboxChange = () => {
    if (selectedOptions[count] === " Другое...") {
      dispatch({ type: 'RESET_OTHER' });
    }
    dispatch({type: "SET_OPTIONS", payload: " Другое..."});
  };
  const handleClickPrev = () => {
    dispatch({ type: 'PREV_QUESTION' });
  }
  const handleClickNext = () => {
    dispatch({ type: 'NEXT_QUESTION' });
  }
  const handleNameChange = (e) => {
    dispatch({ type: 'SET_NAME', payload: e.target.value});
  };

const handlePhoneChange = (e) => {
  const inputValue = e.target.value;
  const limitedDigits = inputValue.replace(/\D/g, "").substring(0, 11);
  let formattedPhoneNumber = "";
  if (limitedDigits.length > 0) {
    formattedPhoneNumber = "+7 ";
    if (limitedDigits.length > 1) {
      formattedPhoneNumber += limitedDigits.substring(1, 4);
    }
    if (limitedDigits.length > 4) {
      formattedPhoneNumber += " " + limitedDigits.substring(4, 7);
    }
    if (limitedDigits.length > 7) {
      formattedPhoneNumber += "-" + limitedDigits.substring(7, 9);
    }
    if (limitedDigits.length > 9) {
      formattedPhoneNumber += "-" + limitedDigits.substring(9, 11);
    }
  }
  dispatch({ type: 'SET_PHONE', payload: formattedPhoneNumber });
};
  const getCurrentData = () => {
    const currentQuestion = opros.find(q => q.id === count);
    if (!currentQuestion) return null;
    if (count === 2 && currentQuestion.images && currentQuestion.select) {
      return {
        ...currentQuestion,
        images: Array.isArray(currentQuestion.images[type]) ? currentQuestion.images[type] : currentQuestion.images,
        select: Array.isArray(currentQuestion.select[type]) ? currentQuestion.select[type] : currentQuestion.select
      };
    }
    
    return currentQuestion;
  };
  const currentData = getCurrentData();
  const handleSale = () => {
    const quantity = selectedOptions[3] === " Другое..." && other ? other : selectedOptions[3];
    const formSaleData = {
      name: name,
      phone: phone,
      product: type === 0 ? "радиатор" : "полотенцесушитель",
      type: selectedOptions[2],
      quantity: quantity,
      where: selectedOptions[4],
      who: selectedOptions[5],
      callback: selectedCallback.telegram ? "Через telegram" : "Позвоните по номеру"
    };
    console.log(formSaleData);
    dispatch({type: "SET_FORM", payload: formSaleData});
  };
  const isCurrentQuestionValid = () => {
    switch (count) {
      case 1:
        return selectedProducts.radiator || selectedProducts.towel;
      case 2:
      case 3:
      case 4:
      case 5:
        return selectedOptions[count] !== undefined;
      case 6:
        return name.trim() !== "" && 
              phone.trim() !== "" && 
              (selectedCallback.telegram || selectedCallback.phone);
      default:
        return false;
    }
  };
  return(
    <section id="questions" className="questions">
      <div className="container">
        <div className="questions__wrapper">
          <h2 className="title questions__title">
            Ответьте на вопросы, оставьте телефон и получите скидку на нашу продукцию
          </h2>
          <div className="questions__subtitle-wrap">
            <div className="questions__counter">
              <p className="questions__counter-num">
                0{count}/06
              </p>
              <p className="questions__counter-text">{counterText[count - 1]?.text}</p>
            </div>
              {count !== 6 && 
                <div className="questions__content">
                  {currentData.images && (
                    <div className="questions__content-img">
                      {currentData.images.map((image, index)=>(
                        <img key={index} src={image} alt="quest" className="quest__img" onClick={() => {count === 1 ? (index === 0 ? handleCheckboxChange("radiator") : handleCheckboxChange("towel")) : handleOptionsCheckboxChange(currentData.select[index])}}/>
                      ))}
                    </div>
                  )}
                  <div className="questions__content-checkboxes">
                    {count === 1 && (
                      <>
                      <CheckBox 
                        checked={selectedProducts.radiator}
                        onChange={() => handleCheckboxChange("radiator")}
                        label=" Радиатор"
                        color="#154889"
                      />
                      <CheckBox 
                        checked={selectedProducts.towel}
                        onChange={() => handleCheckboxChange("towel")}
                        label=" Полотенцесушитель"
                        color="#154889"
                      />
                      </>
                    )}
                    {count > 1 && currentData.select && currentData.select.map((option, index) => {
                      if (option !== " Другое...") {
                        return (
                          <CheckBox 
                            key={index}
                            checked={selectedOptions[count] === option}
                            onChange={() => handleOptionsCheckboxChange(option)}
                            label={option}
                            color="#154889"
                          />
                        );
                      } else {
                        return (
                          <CheckBoxInput 
                            key={index}
                            checked={selectedOptions[count] === option}
                            onChange={handleOtherCheckboxChange}
                            onInputChange={handleOtherInputChange}
                            value={other}
                            label={option}
                            color="#154889"
                          />
                        );
                      }
                    })}
                  </div>
                </div>
              }
              {count === 6 && 
                <div className="questions__content">
                  <div className="questions__content-form">
                    <input value={name} onChange={handleNameChange} type="text" placeholder="Ваше имя" className="questions__content-form--input"/>
                    <input value={phone} onChange={handlePhoneChange} type="tel" placeholder="Ваш телефон" className="questions__content-form--input"/>
                  </div>
                  <div className="questions__content-checkboxes">
                    <p className="questions__content-checkboxes--text">
                      Как с Вами связаться?
                    </p>
                    <CheckBox 
                      checked={selectedCallback.telegram}
                      onChange={() => handleCallbackChange("telegram")}
                      label=" Через телеграм"
                      color="#154889"
                    />
                    <CheckBox 
                      checked={selectedCallback.phone}
                      onChange={() => handleCallbackChange("phone")}
                      label=" Позвоните по номеру "
                      color="#154889"
                    />
                  </div>
                </div>
              }
              </div>
            <div className="questions__content-btn">
              <button className={`button btn__text-prev ${count === 1 ? 'btn__text-prev--disabled' : ''}`} onClick={() => handleClickPrev()} disabled={count === 1 ? true : false}>
                <span className="btn-text main__btn-text">Назад</span>
              </button>
              <button className={`button btn__text-next ${!isCurrentQuestionValid() ? 'btn__text-next--disabled' : ''}`} onClick={() => count !== 6 ? handleClickNext() : handleSale()} disabled={!isCurrentQuestionValid()}>
                <span className="btn-text main__btn-text">{count === 6 ? "Получить скидку" : "Далее"}</span>
              </button>
            </div>
        </div>
      </div>
    </section>
  );
}
