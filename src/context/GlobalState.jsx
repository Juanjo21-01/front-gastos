/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';
import { TYPES } from '../actions/appActions';
import appReducer from '../reducers/AppReducer';

export const Context = createContext();

const initialState = {
  transactions: [],
};

export const GlobalProvider = ({ children }) => {
  // hook useReducer
  const [state, dispatch] = useReducer(appReducer, initialState);

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

  // DATA
  const data = {
    transactions: state.transactions,
    agregarTransaccion,
    eliminarTransaccion,
  };

  return <Context.Provider value={data}>{children}</Context.Provider>;
};
