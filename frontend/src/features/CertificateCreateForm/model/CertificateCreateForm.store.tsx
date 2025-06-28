import type { Store } from '@/shared/types';
import { create } from 'zustand/index';
import { devtools } from 'zustand/middleware';


type State = {
  createDate?: string,
  service?: string,
  email?: string,
  countPersons?: number,
  inited: boolean;
  isLoading: boolean;
}

type Actions = {
  submit: () => void,
}

export interface CertificateCreateFormStore extends State, Actions {}

const initialState: State = {
  isLoading: false,
  inited: false,
};

const store: Store<CertificateCreateFormStore> = (set, getState) => ({
  ...initialState,
  submit: () => {},
});

export const useCertificateCreateFormStore = create<CertificateCreateFormStore>()(
  devtools(store),
);