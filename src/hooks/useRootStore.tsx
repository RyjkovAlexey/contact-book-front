import { useContext } from 'react';
import { RootContext } from '..';

export const useRootStore = () => useContext(RootContext);
