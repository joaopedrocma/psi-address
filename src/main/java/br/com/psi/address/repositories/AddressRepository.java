package br.com.psi.address.repositories;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import br.com.psi.address.entities.Address;

public interface AddressRepository extends JpaRepository<Address, Serializable> {

	@Modifying
	@Query("SELECT Neighbourhood, City, State, Country "
			+ "FROM Address as a "
			+ "inner join Neighbourhood n with n.neighbourhoodid = a.neighbourhoodid "
			+ "inner join City ci with ci.cityid = n.cityid "
			+ "inner join State s with s.stateid = ci.stateid "
			+ "inner join Country co with co.countryid = s.countryid "
			+ "WHERE postalcode = :postalcode")
	Address findAddressByPostalcode(@Param("postalcode") String postalcode);

}
