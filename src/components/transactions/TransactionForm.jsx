import { useState } from 'react';
import { useGlobalState } from '../../hooks/useGlobalState';

const initialState = {
  descripcion: '',
  cantidad: '',
};
const TransactionForm = () => {
  // variable de estado
  const [form, setForm] = useState(initialState);

  // estado global
  const { agregarTransaccion } = useGlobalState();

  // capturar los cambios en el formulario
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // subir datos del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    agregarTransaccion({ ...form, id: Date.now() });

    setForm(initialState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa una descripcion"
          value={form.descripcion}
          name="descripcion"
          onChange={handleChange}
          className="bg-zinc-700 text-white p-3 rounded-lg block mb-2 w-full"
        />
        <input
          type="number"
          step={0.01}
          placeholder="Ingresa una cantidad"
          value={form.cantidad}
          name="cantidad"
          onChange={handleChange}
          className="bg-zinc-700 text-white p-3 rounded-lg block mb-2 w-full"
        />

        <button
          type="submit"
          className="bg-lime-500 text-zinc-900 p-3 rounded-lg block mb-2 w-full"
        >
          Agregar
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
