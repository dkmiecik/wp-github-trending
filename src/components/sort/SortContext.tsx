import * as React from 'react';
import { Sorts } from './SortInterfaces';

const initialValue = localStorage.getItem('sort') || Sorts.asc;

const SortContext = React.createContext({ sort: initialValue } as any);

function sortReducer(state: any, action: any) {
  switch (action.type) {
    case 'setSortDirection': {
      localStorage.setItem('sort', action.state);
      return { sort: action.state };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function SortProvider({ children }: any) {
  const [state, dispatch] = React.useReducer(sortReducer, { sort: initialValue });
  const value = { state, dispatch };
  return <SortContext.Provider value={value}>{children}</SortContext.Provider>;
}

function useSort() {
  const context = React.useContext(SortContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

export { SortProvider, useSort };
