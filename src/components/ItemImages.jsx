import "../styles.css";
import React from "react";
import { useState } from "react";
import ItemDetails from "./ItemDetails";

function ItemImages({ itemsArray, setDivStyle, divStyle }) {
  //console.log(images);
  const [imgDetail, setImgDetail] = useState([]);

  function itemDetails(detail) {
    setImgDetail(detail);
    // console.log(imgDetail);
    // console.log("========");
  }
  return (
    <>
      <span className="images">
        {itemsArray.map((images) => {
          // console.log("image" +images.strMeal);
          return (
            <span className="imagehover">
              <img
                className="menuImages"
                onClick={() => {
                  itemDetails(images);
                  setDivStyle({ diaplay: "block" });
                }}
                src={images.strMealThumb}
                alt="images"
              />
              <span className="dishName">{images.strMeal}</span>
            </span>
          );
        })}
      </span>
      <div className="mealDetails" style={divStyle}>
        <ItemDetails key={imgDetail} imgDetail={imgDetail} />
      </div>
    </>
  );
}
export default ItemImages;
