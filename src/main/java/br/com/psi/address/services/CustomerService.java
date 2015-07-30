package br.com.psi.address.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.psi.address.entities.Customer;
import br.com.psi.address.repositories.CustomerRepository;

@Service
@Transactional
public class CustomerService {

	@Autowired
	private CustomerRepository CustomerRepository;

	public List<Customer> findAll() {
		return CustomerRepository.findAll();
	}

	public Customer create(Customer customer) {
		return CustomerRepository.save(customer);
	}
	
	  public Customer findCustomerById(int id) {
	        return CustomerRepository.findOne(id);
	    }

	public Customer login(String email, String password) {
		return CustomerRepository.findByEmailAndPassword(email, password);
	}

	public Customer update(Customer customer) {
		return CustomerRepository.save(customer);
	}

	public void deleteCustomer(int id) {
		CustomerRepository.delete(id);
	}
}
