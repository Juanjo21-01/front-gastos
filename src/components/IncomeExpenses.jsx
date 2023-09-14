import { useGlobalState } from '../hooks/useGlobalState';

const IncomeExpenses = () => {
  // hook
  const { transactions } = useGlobalState();

  const cantidades = transactions.map((transaction) =>
    Number(transaction.cantidad)
  );

  const ingresos = cantidades
    .filter((cantidad) => cantidad > 0)
    .reduce((acc, cantidad) => (acc += cantidad), 0);

  const gastos =
    cantidades
      .filter((cantidad) => cantidad < 0)
      .reduce((acc, cantidad) => (acc += cantidad), 0) * -1;

  return (
    <>
      <div>
        <h4>Ingresos</h4>
        <p id="money-plus" className="money plus">
          $ {ingresos}
        </p>
      </div>
      <div>
        <h4>Gastos</h4>
        <p id="money-minus" className="money minus">
          $ {gastos}
        </p>
      </div>
    </>
  );
};

export default IncomeExpenses;
