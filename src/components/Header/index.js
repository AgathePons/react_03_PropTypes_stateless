// == Import
import './header.scss';

// == Composant
function Header() {
  return (
    <header className="header">
      <img
        className="header__img"
        src="https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="Des crêpes sur une planches avec des fraises"
      />
      <div className="header__content">
        <h1 className="header__content__title">Recette de crêpe</h1>
        <p className="header__content__infos">John Doeuf - facile</p>
      </div>
    </header>
  );
}

// == Export
export default Header;
