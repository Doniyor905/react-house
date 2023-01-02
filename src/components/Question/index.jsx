import React from "react";
import classes from "./Question.module.scss";

function Question() {
    return (
        <section className={classes.question}>
            <div className="container">
                <div className={classes.question__wrapper}>
                    <h2 className={classes.question__title}>
                        Вопрос-ответ
                    </h2>
                    <div className={classes.question__inner}>
                        <div className={classes.question__item}>
                            <p>Сколько по времени занимает изготовление пластиковых окон?</p>
                            <img src="./img/arrow-down.svg" alt="" />
                        </div>

                        <div className={classes.question__item}>
                            <p>Сколько по времени занимает изготовление пластиковых окон?</p>
                            <img src="./img/arrow-down.svg" alt="" />
                        </div>

                        <div className={classes.question__item}>
                            <p>Сколько по времени занимает изготовление пластиковых окон?</p>
                            <img src="./img/arrow-down.svg" alt="" />
                        </div>

                        <div className={classes.question__item}>
                            <p>Сколько по времени занимает изготовление пластиковых окон?</p>
                            <img src="./img/arrow-down.svg" alt="" />
                        </div>

                        <div className={classes.question__item}>
                            <p>Сколько по времени занимает изготовление пластиковых окон?</p>
                            <img src="./img/arrow-down.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Question;