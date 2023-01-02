import React from "react";
import classes from "./Services.module.scss"

function Services() {
    return (
        <section className={classes.services}>
            <div className={classes.container}>
                <h2 className={classes.services__title}>Наши услуги</h2>
                <div className={classes.services__inner}>
                    <div style={{ backgroundImage: `url("./img/services/services-bg.png")` }} className={classes.services__item}>
                        <div className={classes.services__itemTitle}>
                            <img src="./img/services/services-icon.svg" alt="" />
                            <h3>Установка пластиковых окон</h3>
                        </div>
                        <div className={classes.services__itemText}>
                            <p>
                                Устанавливаем пластиковые окна Rehau
                                от проверенного производителя с
                                гарантией качества
                            </p>
                            <svg className={classes.services__itemArrow} width="40" height="21" viewBox="0 0 40 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.3846 1.75L38 10.75L23.3846 19.75" stroke="white" stroke-width="2" />
                                <path d="M0 10.75H37.0256" stroke="white" stroke-width="2" />
                            </svg>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url("./img/services/services-bg-2.png")` }} className={classes.services__item}>
                        <div className={classes.services__itemTitle}>
                            <img src="./img/services/services-icon-2.svg" alt="" />
                            <h3>Остекление балконов и лоджий</h3>
                        </div>
                        <div className={classes.services__itemText}>
                            <p>
                                Занимаемся остеклением и отделкой
                                балконов и лоджий. Теплое и холодное остекление, изготовление выносов и крыш. Беремся за сложные объекты
                            </p>
                            <svg className={classes.services__itemArrow} width="40" height="21" viewBox="0 0 40 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.3846 1.75L38 10.75L23.3846 19.75" stroke="white" stroke-width="2" />
                                <path d="M0 10.75H37.0256" stroke="white" stroke-width="2" />
                            </svg>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url("./img/services/services-bg-3.png")` }} className={classes.services__item}>
                        <div className={classes.services__itemTitle}>
                            <img src="./img/services/services-icon-3.svg" alt="" />
                            <h3>Остекление коттеджей и дач</h3>
                        </div>
                        <div className={classes.services__itemText}>
                            <p>
                                Остекление и отделка под ключ:
                                от коттеджей и дач до террас
                                и беседок. Выделяем личного
                                технолога под каждый объект
                            </p>
                            <svg className={classes.services__itemArrow} width="40" height="21" viewBox="0 0 40 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.3846 1.75L38 10.75L23.3846 19.75" stroke="white" stroke-width="2" />
                                <path d="M0 10.75H37.0256" stroke="white" stroke-width="2" />
                            </svg>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url("./img/services/services-bg-4.png")` }} className={classes.services__item}>
                        <div className={classes.services__itemTitle}>
                            <img src="./img/services/services-icon-4.svg" alt="" />
                            <h3>Остекление корпоративных объектов</h3>
                        </div>
                        <div className={classes.services__itemText}>
                            <p>
                                Реализуем сложные проекты
                                по остеклению торговых центров,
                                ресторанов, производственных помещений
                                и офисов
                            </p>
                            <svg className={classes.services__itemArrow} width="40" height="21" viewBox="0 0 40 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.3846 1.75L38 10.75L23.3846 19.75" stroke="white" stroke-width="2" />
                                <path d="M0 10.75H37.0256" stroke="white" stroke-width="2" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;