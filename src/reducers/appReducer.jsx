import { TYPES } from '../actions/appActions';

export default function appReducer(state, action) {
  switch (action.type) {
    case TYPES.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };

    case TYPES.DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    case TYPES.EDIT_TRANSACTION:
      return state;

    default:
      return state;
  }
}
