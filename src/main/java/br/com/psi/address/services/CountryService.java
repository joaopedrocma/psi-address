package br.com.psi.address.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.psi.address.entities.Country;
import br.com.psi.address.repositories.CountryRepository;

@Component
public class CountryService {

	@Autowired
	private CountryRepository countryRepository;

	public List<Country> findAll() {
		return countryRepository.findAll();
	}

	public Country create(Country country) {
		return countryRepository.save(country);
	}

	public Country findCountryById(int id) {
		return countryRepository.findOne(id);
	}

	public Country update(Country country) {
		return countryRepository.save(country);
	}

	public void deleteCountry(int id) {
		countryRepository.delete(id);
	}
}
