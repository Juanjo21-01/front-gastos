import { VictoryPie, VictoryLabel } from 'victory';
import { useGlobalState } from '../hooks/useGlobalState';

const ExpenseChart = () => {
  // hook
  const { transactions } = useGlobalState();

  const totalIngresos = transactions
    .filter((transaction) => transaction.cantidad > 0)
    .reduce((acc, transaction) => (acc += Number(transaction.cantidad)), 0);

  const totalGastos =
    transactions
      .filter((transaction) => transaction.cantidad < 0)
      .reduce((acc, transaction) => (acc += Number(transaction.cantidad)), 0) *
    -1;

  const totalPorcentajeGastos =
    Math.round((totalGastos / totalIngresos) * 100) || 0;
  const totalPorcentajeIngresos = 100 - totalPorcentajeGastos || 0;

  return (
    <VictoryPie
      colorScale={['#e74c3c', '#2ecc71']}
      data={[
        { x: 'Gastos', y: totalPorcentajeGastos },
        { x: 'Ingresos', y: totalPorcentajeIngresos },
      ]}
      animate={{
        duration: 200,
      }}
      labels={({ datum }) => `${datum.y}%`}
      labelComponent={<VictoryLabel angle={45} style={{ fill: 'white' }} />}
    />
  );
};

export default ExpenseChart;
