import { create } from "zustand";

export const useUserStore = create((set)=>({
  user: {
    id: 0,
    nombre: "",
    apellido: "",
    rol: "",
    imageUrl: "",
    userName: "",
    email: "",
    password: "",
    proyectos: 0,
    pais: 0,
    tecnologias: 0,
    puntaje: 0,
    favoritos: 0,
    activo: false
  },
  setUser: (user) => set({user})
}))

export const useTokenStore = create((set)=>({
  token: "",
  setToken: (token) => set({token})
}))