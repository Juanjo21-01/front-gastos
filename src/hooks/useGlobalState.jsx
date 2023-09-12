import { useContext } from 'react';
import { Context } from '../context/GlobalState';

export const useGlobalState = () => useContext(Context);
