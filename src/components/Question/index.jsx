import React from "react";
import classes from "./Question.module.scss";

const items = [
    {
        id: "1",
        title: "One",
        content: "1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: "2",
        title: "One",
        content: "1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        id: "3",
        title: "One",
        content: "1. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
]
function Question() {
    const [accordion, setAccordion] = React.useState(false);

    const onAccordion = () => {
        setAccordion(!accordion);
    }
    return (
        <section className={classes.question}>
            <div className="container">
                <div className={classes.question__wrapper}>
                    <h2 className={classes.question__title}>
                        Вопрос-ответ
                    </h2>
                    <div className={classes.question__inner}>
                        {items.map((items, index) => (
                            <div key={index} className={classes.question__item}>
                                <div onClick={() => onAccordion(true)} className={classes.question__top}>
                                    <p>{items.title}</p>
                                    <img src="./img/arrow-down.svg" alt="" />
                                </div>
                                {accordion ? <div className={classes.question__bottom}>
                                    <p>{items.content}</p>
                                </div> : null}
                            </div>
                        ))}


                        {/* <div className={classes.question__item}>
                            <div className={classes.question__top}>
                                <p>Сколько по времени занимает изготовление пластиковых окон?</p>
                                <img src="./img/arrow-down.svg" alt="" />
                            </div>
                            <div className={classes.question__bottom}>
                                <p>Сколько по времени занимает изготовление пластиковых окон? Сколько по времени занимает изготовление пластиковых окон?
                                    Сколько по времени занимает изготовление пластиковых окон?
                                    Сколько по времени занимает изготовление пластиковых окон?
                                </p>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
            {/* <div className={classes.question__item}>
                <div onClick={() => setAccordion(true)} className={classes.question__top}>
                    <p>Сколько по времени занимает изготовление пластиковых окон?</p>
                    <img src="./img/arrow-down.svg" alt="" />
                </div>
                {accordion ? <div className={classes.question__bottom}>
                    <p>Сколько по времени занимает изготовление пластиковых окон? Сколько по времени занимает изготовление пластиковых окон?
                        Сколько по времени занимает изготовление пластиковых окон?
                        Сколько по времени занимает изготовление пластиковых окон?
                    </p>
                </div> : null}
            </div> */}
        </section>


    );
}

export default Question;