package br.com.psi.address.repositories;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.psi.address.entities.City;

public interface CityRepository extends JpaRepository<City, Serializable> {

}
