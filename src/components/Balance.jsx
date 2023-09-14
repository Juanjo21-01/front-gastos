import { useGlobalState } from '../hooks/useGlobalState';

const Balance = () => {
  // context
  const { transactions } = useGlobalState();

  // cantidades a numeros
  const cantidades = transactions.map((el) => Number(el.cantidad));

  const total = cantidades.reduce((acc, el) => (acc += el), 0);
  console.log(total);
  return (
    <div>
      <h2>Balance</h2>

      <h3>${total}</h3>
    </div>
  );
};

export default Balance;
