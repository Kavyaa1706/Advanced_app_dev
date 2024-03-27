package com.java.seniorcare.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.java.seniorcare.model.Services;


@Repository

public interface ServicesRepo extends JpaRepository<Services, Integer> {

    void deleteByServiceType(String serviceType);

}