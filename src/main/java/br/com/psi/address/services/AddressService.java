package br.com.psi.address.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.psi.address.entities.Address;
import br.com.psi.address.repositories.AddressRepository;

@Component
public class AddressService {

	@Autowired
	private AddressRepository addressRepository;

	public List<Address> findAll() {
		return addressRepository.findAll();
	}

	public Address create(Address address) {
		return addressRepository.save(address);
	}

	public Address findAddressById(Integer id) {
		return addressRepository.findOne(id);
	}

	public Address findAddressByPostalcode(String postalcode) {
		return addressRepository.findAddressByPostalcode(postalcode);
	}

	public Address update(Address address) {
		return addressRepository.save(address);
	}

	public void deleteAddress(Integer id) {
		addressRepository.delete(id);
	}

}
