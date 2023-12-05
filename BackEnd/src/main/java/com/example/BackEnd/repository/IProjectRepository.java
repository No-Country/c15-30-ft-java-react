package com.example.BackEnd.repository;

import com.example.BackEnd.models.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProjectRepository extends JpaRepository<Project,Long> {
}
