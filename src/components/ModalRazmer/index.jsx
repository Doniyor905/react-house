import React from "react";
import classes from "./ModalRazmer.module.scss";

function ModalRazmer({ onClose, opened }) {
    return (
        <div className={`${classes.overlay} ${opened ? classes.overlayVisible : ""}`}>
            <div className={classes.modal}>
                <div className={classes.modal__inner}>
                    <div className={classes.modal__item}>
                        <div onClick={onClose} className={classes.modal__close}>
                            <span></span>
                        </div>
                        <div className={classes.modal__title}>
                            <img src="./img/razmer.svg" alt="" />
                            <p>Вызвать замерщика на дом</p>
                        </div>
                        <form className={classes.modal__form}>
                            <input className={classes.modal__input} type="text" placeholder="Ваше имя" />
                            <input className={classes.modal__input} type="text" placeholder="Номер телефона" />
                            <input className={classes.modal__input} type="text" placeholder="E-mail" />
                            <label>
                                <input type="checkbox" />
                                Я согласен(на) на обработку персональных данных
                            </label>
                            <button className={classes.modal__btn}>
                                Отправить заявку
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalRazmer;