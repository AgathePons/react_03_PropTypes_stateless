// == Import
import PropTypes from 'prop-types';
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

/* Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
}; */

// == Export
export default Ingredients;
