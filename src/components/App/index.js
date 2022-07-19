// == Import
import './app.scss';

import Header from '../Header';
import Ingredients from '../Ingredients';
import Instructions from '../Instructions';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Ingredients />
      <Instructions />
    </div>
  );
}

// == Export
export default App;
