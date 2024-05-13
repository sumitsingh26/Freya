import React, {createContext, useContext, useReducer} from 'react';

const SavedItemsContext = createContext();

export const useSavedItemsContext = () => useContext(SavedItemsContext);

const savedItemsReducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_ITEM':
      return [...state, action.payload];
    case 'UNSAVE_ITEM':
      return state.filter(itemId => itemId !== action.payload);
    default:
      return state;
  }
};

export const SavedItemsProvider = ({children}) => {
  const [savedItems, dispatch] = useReducer(savedItemsReducer, []);

  const saveItem = itemId => dispatch({type: 'SAVE_ITEM', payload: itemId});
  const unsaveItem = itemId => dispatch({type: 'UNSAVE_ITEM', payload: itemId});

  return (
    <SavedItemsContext.Provider value={{savedItems, saveItem, unsaveItem}}>
      {children}
    </SavedItemsContext.Provider>
  );
};
