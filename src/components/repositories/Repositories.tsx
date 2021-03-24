import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Repository from './Repository';
import Loader from '../loader/Loader';

import { IRepository } from './RepositoryInterfaces';
import { Sorts } from '../sort/SortInterfaces';

import API from '../../utils/api';

import { useFilter } from '../filter/FilterContext';
import { useSelect } from '../select/SelectContext';
import { useSort } from '../sort/SortContext';

const Repositories: React.FC = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    state: { filter },
  } = useFilter();
  const {
    state: { language },
  } = useSelect();
  const {
    state: { sort },
  } = useSort();

  const sortItems = (a: IRepository, b: IRepository) =>
    sort === Sorts.asc ? a.stars - b.stars : b.stars - a.stars;

  useEffect(() => {
    const getRepos = async (language: string, since: string) => {
      setLoading(true);
      try {
        const response = await API.get(
          `repositories?language=${language === 'all' ? '' : language}&since=${since}`,
        );
        setItems(response.data);
      } catch (e) {
        setItems([]);
      } finally {
        setLoading(false);
      }
    };

    if (language) {
      setLoading(true);
      (async () => await getRepos(language, filter))();
    }
  }, [filter, language]);

  return (
    <List>
      {loading ? (
        <Loader />
      ) : items.length ? (
        items
          .sort(sortItems)
          .map((item: IRepository) => <Repository key={`${item.name}_${item.author}`} {...item} />)
      ) : (
        <p>Nothing to show... :(</p>
      )}
    </List>
  );
};

export default Repositories;

const List = styled.ul`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;
