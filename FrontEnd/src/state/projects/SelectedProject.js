import {create} from 'zustand';

const useSelectedProject = create((set) => ({
  selectedProject: '',
  setSelectedProject: (project) => set({ selectedProject: project }),
}));

export default useSelectedProject;