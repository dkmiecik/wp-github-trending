import * as React from 'react';
import { Filters } from './FilterInterfaces';

const initialValue = localStorage.getItem('filter') || Filters.Daily;

const FilterContext = React.createContext({ filter: initialValue } as any);

function filerReducer(state: any, action: any) {
  switch (action.type) {
    case 'setFilter': {
      localStorage.setItem('filter', action.state);
      return { filter: action.state };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function FilterProvider({ children }: any) {
  const [state, dispatch] = React.useReducer(filerReducer, { filter: initialValue });
  const value = { state, dispatch };
  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
}

function useFilter() {
  const context = React.useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

export { FilterProvider, useFilter };
