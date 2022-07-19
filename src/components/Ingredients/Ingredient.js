// == Import
import PropTypes from 'prop-types';

function Ingredient({ quantity, unit, name }) {
  return (
    <li className="ingredients__item">
      <span className="ingredients__item__quantity">
        {quantity}{unit}
      </span>
      {name}
    </li>
  );
}

Ingredient.propTypes = {
  quantity: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Ingredient;
