import type { StateCreator } from 'zustand';

export type MiddleWareDevTools = ["zustand/devtools", never]
export type MiddleWarePersist = ["zustand/persist", unknown]

export type Store<Store> = StateCreator<Store, [MiddleWareDevTools]>
export type StoreWithPersist<Store> = StateCreator<Store, [MiddleWareDevTools, MiddleWarePersist]>