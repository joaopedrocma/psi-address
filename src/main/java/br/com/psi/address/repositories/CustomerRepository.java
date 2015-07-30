package br.com.psi.address.repositories;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.psi.address.entities.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Serializable> {

	Customer login(String email, String password);
	
	Customer findByEmailAndPassword(String email, String password);
	
}
