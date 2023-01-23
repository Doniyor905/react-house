import React from "react";
import classes from "./About.module.scss";

function About({ setModalOpen }) {
    return (
        <section className={classes.about}>
            <div className="container">
                <h2 className={classes.about__title}>О компании</h2>
                <ul className={classes.about__nav}>
                    <li className={classes.about__link}>Описание</li>
                    <li className={classes.about__link}>Как мы работаем</li>
                    <li className={classes.about__link}>Отзывы</li>
                    <li className={classes.about__link}>Сертификаты</li>
                </ul>
                <div className={classes.about__inner}>
                    <div className={classes.about__left}>
                        <div className={classes.about__leftImg}>
                            <img src="./img/aboutLogo.png" alt="" />
                        </div>
                        <p>Мы помогаем клиентам подбирать решения, учитывая пожежелания к характеристикам окна и его стоимости. Окно - это объект, которым Вы будете пользоваться много лет, поэтому для нас очень важно, чтобы Вы сделали правильный выбор.</p>
                    </div>
                    <div className={classes.about__right}>
                        <img src="./img/about-img.png" alt="" />
                    </div>
                </div>

                <div className={classes.about__advantages}>
                    <div className={classes.about__advantagesItem}>
                        <img src="./img/about/aboutIcon.svg" alt="" />
                        <div className={classes.about__advantagesItemText}>
                            <h3>профессионализм</h3>
                            <p>Бригада профессиональных
                                мастеров по монтажу
                                и обслуживанию</p>
                        </div>
                    </div>

                    <div className={classes.about__advantagesItem}>
                        <img src="./img/about/aboutIcon-2.svg" alt="" />
                        <div className={classes.about__advantagesItemText}>
                            <h3>Ценообразование</h3>
                            <p>Лучшие цены на рынке
                                пластиковых окон</p>
                        </div>
                    </div>

                    <div className={classes.about__advantagesItem}>
                        <img src="./img/about/aboutIcon-3.svg" alt="" />
                        <div className={classes.about__advantagesItemText}>
                            <h3>Мобильность</h3>
                            <p>Заключение договора
                                на дому</p>
                        </div>
                    </div>

                    <div className={classes.about__advantagesItem}>
                        <img src="./img/about/aboutIcon-4.svg" alt="" />
                        <div className={classes.about__advantagesItemText}>
                            <h3>Лояльность</h3>
                            <p>99% клиентов рекомендуют
                                нас своим друзьям</p>
                        </div>
                    </div>

                    <div className={classes.about__advantagesItem}>
                        <img src="./img/about/aboutIcon-5.svg" alt="" />
                        <div className={classes.about__advantagesItemText}>
                            <h3>Скорость</h3>
                            <p>Короткие сроки
                                установки изделий</p>
                        </div>
                    </div>

                    <div className={classes.about__advantagesItem}>
                        <img src="./img/about/aboutIcon-6.svg" alt="" />
                        <div className={classes.about__advantagesItemText}>
                            <h3>Служба качества</h3>
                            <p>Безупречное качество
                                и контроль изделий ПВХ</p>
                        </div>
                    </div>
                </div>
                <button className={classes.about__btn} onClick={() => setModalOpen(true)}>
                    <img src="./img/razmer.svg" alt="" />
                    Оформить заявку на замер
                </button>
            </div>
        </section>
    );
}

export default About;