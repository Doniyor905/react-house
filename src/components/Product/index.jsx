import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import classes from "./Product.module.scss"
import Standart from "../../routers/Standart"
import Biznes from "../../routers/Biznes"
import Premium from "../../routers/Premium"
import Exclusive from "../../routers/Exclusive"

function Product() {
    return (
        <section className={classes.product}>
            <div className="container">
                <h2 className={classes.product__title}>Продукция</h2>
                <ul className={classes.product__nav}>
                    <Link to="/">
                        <li className={classes.product__link}>
                            Стандарт
                        </li>
                    </Link>

                    <Link to="/biznes">
                        <li className={classes.product__link}>
                            Бизнес
                        </li>
                    </Link>

                    <Link to="/premium">
                        <li className={classes.product__link}>
                            Премиум
                        </li>
                    </Link>

                    <Link to="/exclusive">
                        <li className={classes.product__link}>
                            Эксклюзив
                        </li>
                    </Link>
                </ul>
                <div className={classes.product__inner}>
                    <Routes>
                        <Route path="/" exact element={<Standart />} />
                        <Route path="/biznes" exact element={<Biznes />} />
                        <Route path="/premium" exact element={<Premium />} />
                        <Route path="/exclusive" exact element={<Exclusive />} />
                    </Routes>
                </div>
            </div>
        </section>
    );
}

export default Product;