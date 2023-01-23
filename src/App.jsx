import React from "react";
// import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import Services from "./components/Services";
import Product from "./components/Product";
import Guarantee from "./components/Guarantee";
import Portfolio from "./components/Portfolio";
import Question from "./components/Question";
import ModalRazmer from "./components/ModalRazmer";
import ModalCalc from "./components/ModalCalc";
import ModalServices from "./components/ModalServices";
function App() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalCalcOpen, setmodalCalcOpen] = React.useState(false);

  return (
    <div className="App">
      {/* <ModalServices/> */}
      {modalCalcOpen ? <ModalCalc  onModalCalcClose={() => setmodalCalcOpen(false)} /> : null}
      {modalOpen ? <ModalRazmer  onClose={() => setModalOpen(false)} /> : null}
      <header className="header">
        <div className="container">
          <nav className="nav">
            <img className="nav__logo" src="./img/logo.svg" alt="" />
            <ul className="nav__list">
              <li><a href="#!" className="nav__link"> <span className="nav__link-line"></span> Услуги</a></li>
              <li><a href="#!" className="nav__link"> <span className="nav__link-line"></span> Продукция</a></li>
              <li><a href="#!" className="nav__link"> <span className="nav__link-line"></span> О компании</a></li>
              <li><a href="#!" className="nav__link"> <span className="nav__link-line"></span> Портфолио</a></li>
              <li><a href="#!" className="nav__link"> <span className="nav__link-line"></span> Вопрос-ответ</a></li>
              <li><a href="#!" className="nav__link"> <span className="nav__link-line"></span> Контакты</a></li>
            </ul>
            <div className="nav__buttons">
              <div className="nav__btn-order" onClick={() => setModalOpen(true)}>
                <img src="./img/razmer.svg" alt="" />
                Заявка на замер
              </div>
              <div className="nav__btn-price" onClick={() => setmodalCalcOpen(true)}>
                <img src="./img/calc.png" alt="" />
                Заказать расчет
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className="header__intro">
        <div className="container">
          <div className="header__intro-inner">
            <div className="header__intro-left">
              <h1 className="header__intro-title">
                <span>Окна Хаус -</span>
                Профессиональный подход
                к остеклению
              </h1>
              <div className="header__intro-service">
                <div className="intro-service-block">
                  <img src="./img/header/header-icon.svg" alt="" />
                  <p>Современные окна
                    и балконные конструкции
                    по доступным ценам</p>
                </div>
                <div className="intro-service-block">
                  <img src="./img/header/header-icon-2.svg" alt="" />
                  <p>Квалифицированный
                    подход к решению задач
                    любой сложности</p>
                </div>
                <div className="intro-service-block">
                  <img src="./img/header/header-icon-3.svg" alt="" />
                  <p>Гарантия
                    высочайшего качества
                    нашей продукции</p>
                </div>
              </div>
            </div>
            <div className="header__intro-right">
              <form className="header__form" action="">
                <h3 className="header__form-title">
                  Вызвать замершика на дом
                </h3>

                <input className="header__form-input" placeholder="Представьтесь, пожалуйста" type="text" />
                <input className="header__form-input" placeholder="Номер телефона" type="text" />
                <input className="header__form-input" placeholder="E-mail" type="text" />
                <label>
                  <input type="checkbox" />
                  <p>Согласен на обработку персональных данных
                    в соответствии с <span>политикой конфиденциальности</span></p>
                </label>
                <button className="header__form-btn">Отправить заявку</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Services />
      <Product />
      <Guarantee modalCalcOpen={modalCalcOpen} setmodalCalcOpen={setmodalCalcOpen} />
      {/* <About setModalOpen={setModalOpen} /> */}
      <Portfolio />
      <Question />

    </div>
  );
}

export default App;
