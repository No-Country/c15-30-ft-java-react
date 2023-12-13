package com.example.BackEnd.controller;

import com.example.BackEnd.models.dto.ProjectDTO;
import com.example.BackEnd.service.IProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/project")
public class ProjectController {
    @Autowired
    private IProjectService service;

    @PostMapping("/save")
    public ResponseEntity<?> saveProject(@RequestBody ProjectDTO projectDTO){
        return service.saveProject(projectDTO);
    }

    @GetMapping("/getAll")
    public ResponseEntity<?> getAll(){
        return service.getAll();
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getOne(@PathVariable Long id){
        return service.getOne(id);
    }

    @PutMapping("/modify/{id}")
    public ResponseEntity<?> modifyProject(@RequestBody ProjectDTO projectDTO, @PathVariable Long id){
        return service.modifyProject(projectDTO, id);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteProject(@PathVariable Long id){
        return service.deleteProject(id);
    }
}
