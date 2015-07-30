package br.com.psi.address.repositories;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.psi.address.entities.Country;

public interface CountryRepository extends JpaRepository<Country, Serializable> {

}
