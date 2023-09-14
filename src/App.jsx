import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import Transactions from './components/transactions/Transactions';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      {/* Cabecera */}
      <Header />

      <IncomeExpenses />

      {/* Contenido */}
      <h1>Pagina para gastos e ingresos</h1>

      <Balance />

      {/* Transacciones */}
      <Transactions />
    </GlobalProvider>
  );
}

export default App;
