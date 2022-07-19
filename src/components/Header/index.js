// == Import
import PropTypes from 'prop-types';
import './header.scss';

// == Composant
function Header({
  title,
  thumbnail,
  author,
  difficulty,
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
      </div>
    </header>
  );
}

Header.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
};

// == Export
export default Header;
