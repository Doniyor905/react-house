import React from "react";
import classes from "./ModalServices.module.scss";

function ModalServices() {
    return (
        <div className={classes.modal}>
            <div className={classes.modal__inner}>
                <div className={classes.wrapper}>
                    <div className={classes.modal__item}>
                        <img className={classes.modal__img} src="./img/modalServices/1.png" alt="" />
                        <div className={classes.modal__left}>
                            <h2 className={classes.modal__title}>Установка пластиковых окон</h2>
                            <p className={classes.modal__subtitle}>
                                Пластиковые окна Rehau
                                от проверенного производителя с
                                гарантией качества
                            </p>
                            <div className={classes.modal__buttons}>
                                <button className={classes.modal__orange}>
                                    <img src="./img/razmer.svg" alt="" /> Заявка на замер
                                </button>
                                <button className={classes.modal__blue}>
                                    <img src="./img/calc.png" alt="" /> Заказать расчет
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalServices;