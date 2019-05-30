import React from 'react';
import appStyles from './app.module.css';
import { Container } from 'semantic-ui-react';
import {SearchBreeds} from './search-breeds';

const App: React.FC = () => {
  return (
    <div className={appStyles.app}>
      <header className={appStyles.appHeader}>
        <Container>
          <h2>Know your dog breeds</h2>
        </Container>
        <Container>
          <SearchBreeds/>
        </Container>
      </header>
    </div>
  );
}

export default App;
