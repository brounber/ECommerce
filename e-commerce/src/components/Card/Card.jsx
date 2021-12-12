import { Link } from "react-router-dom";
import style from "./Card.module.scss"

const Card = ({ data }) => {
  return data.map((item) => (
    <div className={style.app__card} key={item.ProductID}>
      <div className={style.app__card_image}>
        <img src="#" alt="" />
      </div>
      <div className={style.app__card_content}>
        <h2>{item.Name}</h2>
        <p>
          {item.Price}
          <span>`{item["Retail Price"]}`</span>
        </p>
        <Link to={`/product/${item.ProductID}`}>View details</Link>
      </div>
    </div>
  ));
};

export default Card;
