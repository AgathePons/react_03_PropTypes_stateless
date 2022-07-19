// == Import
import './ingredients.scss';

// == Composant
function Ingredients() {
  return (
    <ul className="ingredients">
      <li className="ingredients__item">
        <span className="ingredients__item__quantity">350g</span> de truc
      </li>
      <li className="ingredients__item">
        <span className="ingredients__item__quantity">350g</span> de truc
      </li>
    </ul>
  );
}

// == Export
export default Ingredients;
