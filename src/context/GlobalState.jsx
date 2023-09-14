/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from 'react';
import { TYPES } from '../actions/appActions';
import appReducer from '../reducers/AppReducer';

export const Context = createContext();

const initialState = {
  transactions: [],
};

export const GlobalProvider = ({ children }) => {
  // hook useReducer
  const [state, dispatch] = useReducer(appReducer, initialState, () => {
    const localData = localStorage.getItem('transactions');
    return localData ? JSON.parse(localData) : initialState;
  });

  // FUNCIONES
  const agregarTransaccion = (transaction) => {
    dispatch({
      type: TYPES.ADD_TRANSACTION,
      payload: transaction,
    });
  };

  const eliminarTransaccion = (id) => {
    dispatch({
      type: TYPES.DELETE_TRANSACTION,
      payload: id,
    });
  };

  // LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state));
  }, [state]);

  // DATA
  const data = {
    transactions: state.transactions,
    agregarTransaccion,
    eliminarTransaccion,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};
