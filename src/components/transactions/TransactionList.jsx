import { useGlobalState } from '../../hooks/useGlobalState';

const TransactionList = () => {
  const { transactions, eliminarTransaccion } = useGlobalState();

  return (
    <div>
      <h3 className="text-slate-300 text-xl font-bold block">Historial</h3>

      <ul>
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center"
          >
            <p className="text-sm">{transaction.descripcion}</p>
            <div>
              <p>$ {transaction.cantidad}</p>
              <button
                onClick={() => eliminarTransaccion(transaction.id)}
                className="p-1 bg-red-600"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
