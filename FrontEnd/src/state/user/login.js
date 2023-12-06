import { create } from 'zustand'

export const useLoginStore = create((set) => ({
  loggedIn: false,
  logIn:  () => set({ loggedIn: true }),
  logOut:  () => set({ loggedIn: false }),
}))

export const useLoginLoaderStore = create((set) => ({
  loading: false,
  setLoading: (payload) => set({ payload }),
}))