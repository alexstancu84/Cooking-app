function MealComponent({ meal }) {
   return (
      <div className="meal">
         <img className="meal-img" src={meal.strMealThumb}></img>
         <h3>{meal.strMeal}</h3>
         <div className="meal-actions">
            <a href={meal.strYoutube} target="_blank">
               📺
            </a>
            <a href={meal.strSource} target="_blank">
               📃
            </a>
            <span>💖</span>
         </div>
      </div>
   );
}

export default MealComponent;
