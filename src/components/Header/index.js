// == Import
import PropTypes from 'prop-types';
import './header.scss';

// If we absolutly want to have an "if" condition instead of && or ternary
/* const buildVeganJSX = (isVegan) => {
  if (isVegan) {
    return (<p>Recette vegan</p>);
  }
  return (<p>Recette pas vegan</p>);
}; */

// == Composant
function Header({
  title,
  thumbnail,
  author,
  difficulty,
  isVegan,
}) {
  return (
    <header className="header">
      <img
        className="header__img"
        src={thumbnail}
        alt="Des crêpes sur une planches avec des fraises"
      />
      <div className="header__content">
        <h1 className="header__content__title">{title}</h1>
        <p className="header__content__infos">{author} - {difficulty}</p>
        {/* conditional with comparison operators */}
        {/* isVegan && <p>Recette Vegan</p> */}
        {/* conditional with ternary  */}
        {isVegan ? <p>Recette Vegan</p> : <p>Recette pas vegan</p>}
        {/* conditional with the function defined above */}
        {/* buildVeganJSX(isVegan) */}
      </div>
    </header>
  );
}

Header.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  isVegan: PropTypes.bool.isRequired,
};

// == Export
export default Header;
