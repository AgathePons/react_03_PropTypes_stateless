// == Import
import PropTypes from 'prop-types';
import './instructions.scss';

// == Composant
function Instructions({ instructions }) {
  return (
    <ul className="instructions">
      {
        instructions.map((i) => <li key={i} className="instructions__item">{i}</li>)
      }
    </ul>
  );
}

Instructions.propTypes = {
  instructions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

// == Export
export default Instructions;
