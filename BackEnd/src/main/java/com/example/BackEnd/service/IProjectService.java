package com.example.BackEnd.service;

import com.example.BackEnd.models.dto.ProjectDTO;
import org.springframework.http.ResponseEntity;

public interface IProjectService {
    public ResponseEntity<?> saveProject(ProjectDTO projectDTO);
    public ResponseEntity<?> getAll();
    public ResponseEntity<?> getOne(Long id);
    public ResponseEntity<?> modifyProject(ProjectDTO projectDTO, Long id);
    public ResponseEntity<?> deleteProject(Long id);
}
