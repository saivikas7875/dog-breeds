import React from 'react';
import appStyles from './app.module.scss';
import { Container } from 'semantic-ui-react';
import { SearchBreeds } from './components/search-breeds';
import dog from './dog.png';

const App: React.FC = () => {
    return (
        <div className={appStyles.app}>
            <header className={appStyles.appHeader}>
                <Container className={appStyles.headerContainer}>
                    <h2 className={appStyles.appTitle}>Know your dog breeds</h2>
                    <img
                        src={dog}
                        className={appStyles.dogLogo}
                        alt="sitting dog"
                    />
                </Container>
            </header>
            <Container className={appStyles.appBody}>
                <SearchBreeds />
            </Container>
        </div>
    );
};

export default App;
