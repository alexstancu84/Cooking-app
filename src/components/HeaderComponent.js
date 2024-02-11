import NavBar from "./NavBar";
import SearchForm from "./SearchForm";

function HeaderComponent({ children }) {
   return <div className="header">{children}</div>;
}

export default HeaderComponent;
