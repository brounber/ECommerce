import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { allData } from "../../data/api.js";
import style from "./Detail.module.scss"

const Detail = () => {
  let history = useNavigate();
  const { id } = useParams();
  const [addedToCart, setAddedToCart] = useState(false);


  const handleGoBack = () => {
    history.push("/");
  };

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  return (
    <div className={style.app__fullContent}>
      {addedToCart ? (
        <div className={style.addedProduct}>Product added successfully!</div>
      ) : (
        ""
      )}
      {allData
        .filter((item) => item.ProductID === Number(id))
        .map((info) => {
          return (
            <>
              <div className={style.app__fullContent_wrapper}>
                <div className={style.app__fullContent_image}></div>
                <div className={style.app__fullContent_content}>
                  <h2>{info.Name}</h2>
                  <p className={style.description}>{info.Description}</p>
                </div>
                <div className={style.app__fullContent_action}>
                  <p>
                    <strong className={style.price}>{info.Price}</strong>
                  </p>
                  <p>
                    <span>Out of Stock</span>
                    <button onClick={handleAddToCart}>Add to Cart</button>
                  </p>
                </div>
              </div>
            </>
          );
        })}
      <button className={style.goBackButton} onClick={handleGoBack}>
        Go back
      </button>
    </div>
  );
};

export default Detail;
