import * as React from 'react';

const initialValue = localStorage.getItem('language') || '';

const SelectContext = React.createContext({ language: initialValue } as any);

function selectReducer(state: any, action: any) {
  switch (action.type) {
    case 'setLanguage': {
      localStorage.setItem('language', action.state);
      return { language: action.state };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function SelectProvider({ children }: any) {
  const [state, dispatch] = React.useReducer(selectReducer, { language: initialValue });
  const value = { state, dispatch };
  return <SelectContext.Provider value={value}>{children}</SelectContext.Provider>;
}

function useSelect() {
  const context = React.useContext(SelectContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

export { SelectProvider, useSelect };
