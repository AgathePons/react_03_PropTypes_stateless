// == Import
import PropTypes from 'prop-types';
import './ingredients.scss';

import Ingredient from './Ingredient';

// == Composant
function Ingredients({ ingredients }) {
  return (
    <ul className="ingredients">
      {
        ingredients.map((i) => (
          <Ingredient
            key={i.id}
            quantity={i.quantity}
            unit={i.unit}
            name={i.name}
          />
        ))
      }
    </ul>
  );
}

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Ingredients;
