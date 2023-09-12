import { useGlobalState } from '../hooks/useGlobalState';

const Balance = () => {
  // context
  const { transactions } = useGlobalState();

  return (
    <div>
      <h2>Balance</h2>

      <h3>${JSON.stringify(transactions)}</h3>
    </div>
  );
};

export default Balance;
