import React from "react";
import classes from "./Product.module.scss"

function Product() {
    return (
        <section className={classes.product}>
            <div className="container">
                <h2 className={classes.product__title}>Продукция</h2>
                <ul className={classes.product__nav}>
                    <li className={classes.product__link}>
                        Стандарт
                    </li>

                    <li className={classes.product__link}>
                        Бизнес
                    </li>

                    <li className={classes.product__link}>
                        Премиум
                    </li>

                    <li className={classes.product__link}>
                        Эксклюзив
                    </li>
                </ul>
                <div className={classes.product__inner}>
                    <div className={classes.product__item}>
                        <div className={classes.product__itemImg}>
                            <img src="./img/product-img.jpg" alt="" />
                        </div>

                        <div className={classes.product__itemPrice}>
                            <h2 className={classes.price__title}>Rehau Blitz New</h2>
                            <p className={classes.price__text}>
                                Сохраняют тепло в доме, защищают от шума
                                и вписываются в любой интерьер.
                                Практичный выбор</p>

                            <p className={classes.price__report}>
                                Системная глубина ...............................................60/60 мм <br />
                                Ширина стеклопакета...........................................24/31 мм<br />
                                Воздушные камеры...............................................3 <br />
                                Теплосопротивление............................................0,70 м2С/ВТ <br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Product;