import { create } from "zustand";
import API from "@/axios/apiConnection";

export const workSpaceProjectsStore = create((set) => ({
  projects: [],
  setProjects: async (projects) => {
    const response = await API.get("/projects");
    console.log(response.data)
    set({projects: response.data})
  },
}));
