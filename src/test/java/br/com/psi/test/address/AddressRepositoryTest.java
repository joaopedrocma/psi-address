package br.com.psi.test.address;

import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import br.com.psi.address.entities.Address;
import br.com.psi.address.repositories.AddressRepository;
import br.com.psi.test.address.utils.AbstractAddressTest;

public class AddressRepositoryTest extends AbstractAddressTest {

	@Autowired
	private AddressRepository repository;

	@Test
	public void testCrud() {
		Address ad = new Address();
		ad.setAddress("Verissimo");
		ad.setAddress2("40");
		ad.setDistrict("ccc");
		ad.setPostalcode("123");
		ad.setCityId(1);
		ad.setPhone("123");
		repository.save(ad);

		System.out.println(ad);
	}

}
