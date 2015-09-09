package br.com.psi.address.web.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.com.psi.address.entities.Neighbourhood;
import br.com.psi.address.services.NeighbourhoodService;

@RestController
@RequestMapping("/neighbourhoods")
public class NeighbourhoodController {

	@Autowired
	private NeighbourhoodService neighbourhoodService;

	@RequestMapping(method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	@ResponseBody
	public List<Neighbourhood> findAll() {
		return neighbourhoodService.findAll();
	}

	@RequestMapping(value = "{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.OK)
	@ResponseBody
	public Neighbourhood findNeighbourhood(@PathVariable("id") int id) {
		return neighbourhoodService.findNeighbourhoodById(id);
	}

	@RequestMapping(method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.CREATED)
	@ResponseBody
	public ResponseEntity<Neighbourhood> createNeighbourhood(@RequestBody Neighbourhood neighbourhood) {
		Neighbourhood savedNeighbourhood = neighbourhoodService.create(neighbourhood);
		return new ResponseEntity<Neighbourhood>(savedNeighbourhood, HttpStatus.CREATED);
	}

	@RequestMapping(method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseStatus(HttpStatus.CREATED)
	@ResponseBody
	public ResponseEntity<Neighbourhood> updateNeighbourhood(@RequestBody Neighbourhood neighbourhood) {
		Neighbourhood savedNeighbourhood = neighbourhoodService.update(neighbourhood);
		return new ResponseEntity<Neighbourhood>(savedNeighbourhood,
				HttpStatus.OK);
	}

	@RequestMapping(value = "{id}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public ResponseEntity<Void> deleteNeighbourhood(@PathVariable("id") int id) {
		neighbourhoodService.deleteNeighbourhood(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
