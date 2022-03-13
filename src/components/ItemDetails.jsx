import "../styles.css";
import React from "react";
function ItemDetails({ imgDetail }) {
  return (
    <div className="main">
      <div className="mealName">{imgDetail.strMeal}</div>
      <img className="menuImage" src={imgDetail.strMealThumb} alt="bl" />
      <div className="Category">
        <div>{imgDetail.strCategory}</div>
        <div>{imgDetail.strArea}</div>
      </div>
      <div className="item" style={{ color: "white" }}>
        {imgDetail.strInstructions}
      </div>
      <div className="headlineIngredient">Ingredients</div>
      <div style={{ marginTop: "15px", display: "flex" }}>
        <div className="mainIngredient">
          <span className="ingredient">
            {imgDetail.strIngredient1}-{imgDetail.strMeasure1}
          </span>
          <span className="ingredient">
            {imgDetail.strIngredient2}-{imgDetail.strMeasure2}
          </span>
          <span className="ingredient">
            {imgDetail.strIngredient3}-{imgDetail.strMeasure3}
          </span>
          <span className="ingredient">
            {imgDetail.strIngredient4}-{imgDetail.strMeasure4}
          </span>
          <span className="ingredient">
            {imgDetail.strIngredient5}-{imgDetail.strMeasure5}
          </span>
        </div>
      </div>
    </div>
  );
}

export default React.memo(ItemDetails);
