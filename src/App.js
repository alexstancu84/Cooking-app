import { useState } from "react";
import HeaderComponent from "./components/HeaderComponent";
import MealComponent from "./components/MealComponent";
import MealContainer from "./components/MealContainer";
import SearchForm from "./components/SearchForm";
import NavBar from "./components/NavBar";
import MealList from "./components/MealList";
import SideBar from "./components/SideBar";
import FooterComponent from "./components/FooterComponent";

function App() {
   const [Meals, setMeals] = useState([]);
   console.log(Meals);

   return (
      <div className="App">
         <HeaderComponent>
            <NavBar></NavBar>
            <SearchForm Meals={Meals} setMeals={setMeals}></SearchForm>
         </HeaderComponent>
         <MealContainer>
            <SideBar></SideBar>
            <MealList>
               {Meals
                  ? Meals.map((meal) => (
                       <MealComponent
                          meal={meal}
                          key={meal.idMeal}
                       ></MealComponent>
                    ))
                  : "Meal not found"}
            </MealList>
         </MealContainer>
         <FooterComponent></FooterComponent>
      </div>
   );
}

export default App;
