package com.example.BackEnd.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Project {
    @Id
    @SequenceGenerator(name = "project_secuence",sequenceName = "project_secuence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "project_secuence")
    private Long id;
    private String name;
    private String description;
}
