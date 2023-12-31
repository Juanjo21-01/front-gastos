import Balance from './components/Balance';
import ExpenseChart from './components/ExpenseChart';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionForm from './components/transactions/TransactionForm';
import TransactionList from './components/transactions/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-3/5">
          <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-5">
            <div>
              <h1 className="text-3xl font-bold">
                Pagina para gastos e ingresos
              </h1>
              {/* Contenido */}
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className="flex flex-col flex-1">
              <ExpenseChart />
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
