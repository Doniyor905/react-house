import React from "react";
import classes from "./Portfolio.module.scss"

function Portfolio() {
    return (
        <section className={classes.portfolio}>
            <div className="container">
                <div className={classes.portfolio__wrapper}>
                    <h2 className={classes.portfolio__title}>Портфолио</h2>
                    <div className={classes.portfolio__inner}>
                        <div className={classes.portfolio__item}>
                            <img src="./img/portfolio/portfolio.png" alt="" />
                        </div>
                        <div className={classes.portfolio__item}>
                            <img src="./img/portfolio/portfolio-2.png" alt="" />
                        </div>
                        <div className={classes.portfolio__item}>
                            <img src="./img/portfolio/portfolio-3.png" alt="" />
                        </div>
                        <div className={classes.portfolio__item}>
                            <img src="./img/portfolio/portfolio-4.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;