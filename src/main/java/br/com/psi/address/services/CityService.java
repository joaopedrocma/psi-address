package br.com.psi.address.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.psi.address.entities.City;
import br.com.psi.address.repositories.CityRepository;

@Component
public class CityService {

	@Autowired
	private CityRepository cityRepository;

	public List<City> findAll() {
		return cityRepository.findAll();
	}

	public City create(City city) {
		return cityRepository.save(city);
	}

	public City findCityById(int id) {
		return cityRepository.findOne(id);
	}

	public City update(City city) {
		return cityRepository.save(city);
	}

	public void deleteCity(int id) {
		cityRepository.delete(id);
	}
}
