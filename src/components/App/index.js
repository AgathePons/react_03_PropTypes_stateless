// == Import
import './app.scss';

import Header from 'src/components/Header';
import Ingredients from 'src/components/Ingredients';
import Instructions from 'src/components/Instructions';

import data from 'src/data/recipe';

// == Composant
function App() {
  return (
    <div className="app">
      <Header
        thumbnail={data.thumbnail}
        title={data.title}
        author={data.author}
        difficulty={data.difficulty}
      />
      <Ingredients ingredients={data.ingredients} />
      <Instructions instructions={data.instructions} />
    </div>
  );
}

// == Export
export default App;
