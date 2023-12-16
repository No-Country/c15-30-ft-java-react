import {create} from 'zustand';

const useSelectedProject = create((set) => ({
  selectedProject: '',
  setSelectedProject: (project) => set({ selectedProject: project }),
}));

export default useSelectedProject;

export const useProjectCommits = create((set)=>({
  commits: [],
  setCommits: (commits) => set({ commits: commits }),
}))