import { useGlobalState } from '../hooks/useGlobalState';

const Balance = () => {
  // context
  const { transactions } = useGlobalState();

  // cantidades a numeros
  const cantidades = transactions.map((el) => Number(el.cantidad));

  const total = cantidades.reduce((acc, el) => (acc += el), 0).toFixed(2);
  return (
    <div className="flex justify-between">
      <h2>Balance</h2>

      <h3 className="text-2xl font-bold">${total}</h3>
    </div>
  );
};

export default Balance;
