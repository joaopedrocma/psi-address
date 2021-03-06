package br.com.psi.address.repositories;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.psi.address.entities.Neighbourhood;

public interface NeighbourhoodRepository extends JpaRepository<Neighbourhood, Serializable> {

}
