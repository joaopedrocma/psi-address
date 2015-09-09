package br.com.psi.address.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.psi.address.entities.Neighbourhood;
import br.com.psi.address.repositories.NeighbourhoodRepository;

@Component
public class NeighbourhoodService {

	@Autowired
	private NeighbourhoodRepository neighbourhoodRepository;

	public List<Neighbourhood> findAll() {
		return neighbourhoodRepository.findAll();
	}

	public Neighbourhood create(Neighbourhood neighbourhood) {
		return neighbourhoodRepository.save(neighbourhood);
	}

	public Neighbourhood findNeighbourhoodById(int id) {
		return neighbourhoodRepository.findOne(id);
	}

	public Neighbourhood update(Neighbourhood neighbourhood) {
		return neighbourhoodRepository.save(neighbourhood);
	}

	public void deleteNeighbourhood(int id) {
		neighbourhoodRepository.delete(id);
	}

}
