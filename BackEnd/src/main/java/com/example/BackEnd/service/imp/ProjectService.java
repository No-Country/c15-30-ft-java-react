package com.example.BackEnd.service.imp;

import com.example.BackEnd.models.dto.ProjectDTO;
import com.example.BackEnd.repository.IProjectRepository;
import com.example.BackEnd.service.IProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class ProjectService implements IProjectService {
    @Autowired
    private IProjectRepository repository;


    @Override
    public ResponseEntity<?> saveProject(ProjectDTO projectDTO) {
        return null;
    }

    @Override
    public ResponseEntity<?> getAll() {
        return null;
    }

    @Override
    public ResponseEntity<?> getOne(Long id) {
        return null;
    }

    @Override
    public ResponseEntity<?> modifyProject(ProjectDTO projectDTO, Long id) {
        return null;
    }

    @Override
    public ResponseEntity<?> deleteProject(Long id) {
        return null;
    }
}
