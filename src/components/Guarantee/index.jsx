import React from "react";
import classes from "./Guarantee.module.scss";

function Guarantee() {
    return (
        <section className={classes.guarantee}>
            <div className="container">
                <div className={classes.guarantee__wrapper}>
                    <div className={classes.guarantee__title}>
                        <img src="./img/guarantee/guarantee-img.png" alt="" />
                    </div>
                    <div className={classes.guarantee__inner}>
                        <div className={classes.guarantee__item}>
                            <div className={classes.guarantee__itemImg}>
                                <img src="./img/guarantee/guarantee-icon.svg" alt="" />
                            </div>
                            <p>Инновационный
                                оконный завод</p>
                        </div>

                        <div className={classes.guarantee__item}>
                            <div className={classes.guarantee__itemImg}>
                                <img src="./img/guarantee/guarantee-icon-2.svg" alt="" />
                            </div>
                            <p>Лидер по переработке
                                профилей Rehau в России</p>
                        </div>

                        <div className={classes.guarantee__item}>
                            <div className={classes.guarantee__itemImg}>
                                <img src="./img/guarantee/guarantee-icon-3.svg" alt="" />
                            </div>
                            <p>Высокотехнологичное
                                автоматизированное
                                оборудование</p>
                        </div>

                        <div className={classes.guarantee__item}>
                            <div className={classes.guarantee__itemImg}>
                                <img src="./img/guarantee/guarantee-icon-4.svg" alt="" />
                            </div>
                            <p>Широкий
                                ассортимент
                                продукции</p>
                        </div>

                        <div className={classes.guarantee__item}>
                            <div className={classes.guarantee__itemImg}>
                                <img src="./img/guarantee/guarantee-icon-5.svg" alt="" />
                            </div>
                            <p>Сертифицированный
                                производитель Rehau</p>
                        </div>
                    </div>
                </div>
                <button className={classes.guarantee__btn}>
                    <img src="./img/calc.png" alt="" />
                    Заказать расчет
                </button>
            </div>
        </section>
    );
}

export default Guarantee;