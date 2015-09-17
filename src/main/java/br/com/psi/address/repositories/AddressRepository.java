package br.com.psi.address.repositories;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.psi.address.entities.Address;

public interface AddressRepository extends JpaRepository<Address, Serializable> {

	//@Query("SELECT a from Address a WHERE a.postalcode = :postalcode")
	//Address findAddressByPostalcode(@Param("postalcode") String postalcode);

}
