package br.com.psi.address.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.psi.address.entities.Address;
import br.com.psi.address.repositories.AddressRepository;

@Service
@Transactional
public class AddressService {
	
	@Autowired
	private AddressRepository addressRepository;
	
	public List<Address> findAll() {
        return addressRepository.findAll();
    }

    public Address create(Address address) {
        return addressRepository.save(address);
    }

    public Address findAddressById(int id) {
        return addressRepository.findOne(id);
    }

    public Address update(Address address) {
        return addressRepository.save(address);
    }

    public void deleteAddress(int id) {
    	addressRepository.delete(id);
    }
}
