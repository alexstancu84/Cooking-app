import { useState } from "react";

function SearchForm({ setMeals, Meals }) {
   const [searchValue, setSearchValue] = useState("");

   function search(searchValue) {
      fetch(
         `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
      )
         .then((response) => response.json())
         .then((responseJSON) => setMeals(responseJSON.meals));
      console.log(searchValue);
   }

   return (
      <div>
         <form>
            <label></label>
            <input
               className="search-input"
               type="text"
               name="search-input"
               onChange={(e) => setSearchValue(e.target.value)}
               value={searchValue}
            />
            <button
               className="search-btn"
               onClick={(e) => {
                  e.preventDefault();
                  search(searchValue);
               }}
            >
               Search
            </button>
         </form>
      </div>
   );
}

export default SearchForm;
