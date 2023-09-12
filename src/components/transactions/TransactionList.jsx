import { useGlobalState } from '../../hooks/useGlobalState';

const TransactionList = () => {
  const { transactions, eliminarTransaccion } = useGlobalState();

  return (
    <div>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <p>{transaction.descripcion}</p>
          <p>{transaction.cantidad}</p>
          <button onClick={() => eliminarTransaccion(transaction.id)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
