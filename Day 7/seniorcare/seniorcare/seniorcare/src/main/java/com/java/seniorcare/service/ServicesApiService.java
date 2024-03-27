package com.java.seniorcare.service;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.seniorcare.model.Services;
import com.java.seniorcare.repository.ServicesRepo;


@Service

public class ServicesApiService {
    
    @Autowired
    ServicesRepo repository;

    public boolean addService(Services services) {
        repository.save(services);
        return true;
    }

    public List<Services> getServices() {
        return repository.findAll();
    }

    public Services updateService(Services services) {
        repository.save(services);
        return services;
    }

    public boolean deleteServiceByServiceType(String serviceType) {
        repository.deleteByServiceType(serviceType);
        return true;
    }
}
