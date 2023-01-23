import classes from "../../components/Product/Product.module.scss";
function Exclusive() {
    return (
        <div className={classes.product__item}>
            <div className={classes.product__itemImg}>
                <img src="./img/routers/2.png" alt="" />
            </div>

            <div className={classes.product__itemPrice}>
                <h2 className={classes.price__title}>Exclusive Blitz New</h2>
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
    );
}


export default Exclusive;