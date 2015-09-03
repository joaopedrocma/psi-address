package br.com.psi.address.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import br.com.psi.address.entities.State;
import br.com.psi.address.repositories.StateRepository;

@Component
public class StateService {

	@Autowired
	private StateRepository stateRepository;

	public List<State> findAll() {
		return stateRepository.findAll();
	}

	public State create(State state) {
		return stateRepository.save(state);
	}

	public State findStateById(int id) {
		return stateRepository.findOne(id);
	}

	public State update(State state) {
		return stateRepository.save(state);
	}

	public void deleteState(int id) {
		stateRepository.delete(id);
	}
}
