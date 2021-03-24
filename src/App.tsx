import * as React from 'react';
import { useEffect, useState } from 'react';

// Utils
import API from './utils/api';
// Components
import Sort from './components/sort/Sort';
import Select from './components/select/Select';
import Filter from './components/filter/Filter';
import FilterSection from './components/filter/FilterSection';
import Footer from './components/common/Footer';
import Alert from './components/common/Alert';
// Common components
import Header from './components/common/Header';
import Main from './components/common/Main';
import Repositories from './components/repositories/Repositories';
// Providers
import { FilterProvider } from './components/filter/FilterContext';
import { SelectProvider } from './components/select/SelectContext';
import { SortProvider } from './components/sort/SortContext';

// Global styles
import './App.css';

const App: React.FC = () => {
  const [languages, setLanguages] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getLanguages = async () => {
      try {
        const response = await API.get('languages');
        setLanguages(response.data);
        setError(false);
      } catch (e) {
        setLanguages([]);
        showError();
      }
    };
    (async () => await getLanguages())();
  }, []);

  const showError = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 2000);
  };

  return (
    <div className="App">
      <Header>
        <h1>Github Trending</h1>
      </Header>
      {error ? <Alert /> : null}
      <Main>
        <FilterSection>
          <FilterProvider>
            <Filter />
            <SelectProvider>
              <Select options={languages} />
              <SortProvider>
                <Sort />
                <Repositories />
              </SortProvider>
            </SelectProvider>
          </FilterProvider>
        </FilterSection>
      </Main>
      <Footer />
    </div>
  );
};

export default App;
